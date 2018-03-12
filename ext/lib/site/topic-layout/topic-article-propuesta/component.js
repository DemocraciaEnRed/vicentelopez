import React, { Component } from 'react'
import bus from 'bus'
import t from 't-component'
import urlBuilder from 'lib/url-builder'
import userConnector from 'lib/site/connectors/user'
import Header from './header/component'
import Content from './content/component'
import Footer from './footer/component'
import Social from './social/component'
import Vote from './vote/component'
import Poll from './poll/component'
import Cause from './cause/component'
import Comments from './comments/component'
import AdminActions from './admin-actions/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import { Link } from 'react-router'

class TopicArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showSidebar: false
    }
  }

  componentWillMount () {
    bus.on('sidebar:show', this.toggleSidebar)
  }

  componentDidUpdate () {
    document.body.scrollTop = 0
  }

  componentWillUnmount () {
    bus.off('sidebar:show', this.toggleSidebar)
  }

  toggleSidebar = (bool) => {
    this.setState({
      showSidebar: bool
    })
  }

  handleCreateTopic = () => {
    window.location = urlBuilder.for('admin.topics.create', {
      forum: this.props.forum.name
    })
  }

  twitText = () => {
    switch (this.props.topic.attrs && this.props.topic.attrs.state) {
      case 'pendiente':
        return encodeURIComponent('Apoyemos este proyecto para mejorar Vicente López. ')
      case 'perdedor':
        return encodeURIComponent(this.props.topic.mediaTitle)
      case 'proyectado':
        return encodeURIComponent('Este proyecto se va a realizar gracias a la participación de los vecinos. ')
      default:
        return ''
    }
  }

  render () {
    const {
      topic,
      forum,
      user
    } = this.props

    const userAttrs = user.state.fulfilled && (user.state.value || {})
    const canCreateTopics = userAttrs.privileges &&
      userAttrs.privileges.canManage &&
      forum &&
      forum.privileges &&
      forum.privileges.canChangeTopics

    if (!topic) {
      return (
        <div className='no-topics'>
          <p>{t('homepage.no-topics')}</p>
          {
            canCreateTopics && (
              <button
                className='btn btn-primary'
                onClick={this.handleCreateTopic} >
                {t('homepage.create-debate')}
              </button>
            )
          }
        </div>
      )
    }

    const socialLinksUrl = window.location.origin + topic.url
    const twitterText = this.twitText()

    return (
      <div className='topic-article-wrapper'>
        {
          this.state.showSidebar &&
            <div onClick={hideSidebar} className='topic-overlay' />
        }
        <div className="banner">

          <Header
            closingAt={topic.closingAt}
            closed={topic.closed}
            author={topic.author}
            authorUrl={topic.authorUrl}
            tags={topic.tags}
            forumName={forum.name}
            mediaTitle={topic.mediaTitle} />

        </div>
        <div className='topic-article-status'>Proyecto {topic.attrs.state} </div>

        {
          (forum.privileges && forum.privileges.canChangeTopics)
            ? (
              <div className='topic-article-content topic-admin-actions'>
                <a
                  href={urlBuilder.for('admin.topics.id', {
                    forum: forum.name,
                    id: topic.id
                  })}
                  className='btn btn-default btn-sm'>
                  <i className='icon-pencil' />
                  &nbsp;
                  {t('proposal-article.edit')}
                </a>
              </div>
            )
            : (topic.privileges && topic.privileges.canEdit)
              ? (
                <div className='topic-article-content topic-admin-actions'>
                  <a
                    href={`/formulario-propuesta/${topic.id}`}
                    className='btn btn-default btn-sm'>
                    <i className='icon-pencil' />
                      &nbsp;
                    {t('proposal-article.edit')}
                  </a>
                </div>
              )
              : (user.state.value && topic.owner.id === user.state.value.id) &&
              (
                <p className='alert alert-info alert-propuesta'>
                  El estado de ésta propuesta fue cambiado a {topic.attrs.state}, por lo tanto ya no puede ser editada por su autor/a.
                </p>
              )
        }

        <div className='topic-article-content entry-content'>
          <div className='topic-article-nombre'>{topic.attrs.nombre}</div>
          <h2 className='topic-article-subtitulo'>subtítulo de la propuesta</h2>
          <h3 className='topic-article-barrio'>{topic.attrs.barrio}</h3>

          <span className='topic-article-span'>Propuesta</span>
          {topic.attrs.problema && <p className='topic-article-p'>{topic.attrs.problema} </p> }

          <span className='topic-article-span'>Solución</span>
          {topic.attrs.problema && <p className='topic-article-p'>{topic.attrs.solucion} </p> }

          <span className='topic-article-span'>Beneficios</span>
          {topic.attrs.problema && <p className='topic-article-p'>{topic.attrs.beneficios} </p> }
        </div>

        <div className='topic-tags topic-article-content'>
          {
            this.props.topic.tags && this.props.topic.tags.map((tag, i) => <a className='topic-article-tag' href={`${window.location.origin}${urlBuilder.for('site.forum', { forum: this.props.forum.name })}?tag=${tag}`} key={i}>{ tag } </a>)
          }
        </div>
        {
          (topic.attrs.state && topic.attrs.state === 'rechazado') &&
              (
                <div className='alert alert-info alert-propuesta' role='alert'>
                  <span>Esta propuesta ha sido rechazada por la Municipalidad de Vicente Lopez.</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti dolorem cumque, delectus placeat nulla. Aspernatur fugit asperiores eum placeat, incidunt omnis alias enim rem, iste soluta aut doloribus molestias.</p>
                  <p>Subsecretaría de Participación Ciudadana</p>
                </div>)}

        {
          !user.state.pending && <Comments forum={forum} topic={topic} />
        }
      </div>
    )
  }
}

export default userConnector(TopicArticle)

function hideSidebar () {
  bus.emit('sidebar:show', false)
}
