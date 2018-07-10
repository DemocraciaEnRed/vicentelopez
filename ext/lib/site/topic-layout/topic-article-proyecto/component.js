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
import {Link} from 'react-router'


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
    switch (this.props.topic.attrs.state) {
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
        {
          topic.coverUrl && <div className="cover" style={{backgroundImage: 'url("' + topic.coverUrl + '")'}}></div>
        }
        <AdminActions forum={forum} topic={topic} />
        <Header
          closingAt={topic.closingAt}
          closed={topic.closed}
          author={topic.author}
          authorUrl={topic.authorUrl}
          tags={topic.tags}
          forumName={forum.name}
          mediaTitle={topic.mediaTitle} />
        {topic.clauses && <Content clauses={topic.clauses} />}
        {
          topic.links && (
            <Footer
              source={topic.source}
              links={topic.links}
              socialUrl={topic.url}
              title={topic.mediaTitle} />
          )
        }
        {topic.attrs.state !== 'pendiente' && topic.attrs.state !== 'no-factible' && topic.attrs.anio === '2018' &&
          <div className='alert alert-success alert-proyecto' role='alert'>
            Podés ver la propuesta original <Link to={`/propuestas/topic/${topic.id}`} className='alert-link'>aquí</Link>.
          </div>
        }
        <Social
          topic={topic}
          twitterText={twitterText}
          socialLinksUrl={socialLinksUrl} />
        <div className='topic-tags topic-article-content'>
          {
            this.props.topic.tags && this.props.topic.tags.map((tag, i) => <a href={`${window.location.origin}${urlBuilder.for('site.forum', { forum: this.props.forum.name })}?tag=${tag}`} key={i}>#{tag}</a>)
          }
        </div>  
        {
          topic.attrs.state !== 'factible' && (
              <div className='topic-article-content proyecto-ganador'>
                <div className='box-header'>
                  <span>Proyecto ganador</span>
                </div>
                <div className='box-content'>
                  <div className='box-content-item'>
                    <span className='box-content-title'>Presupuesto asignado:</span>
                    <span className='box-content-info'>{topic.attrs.budget}</span>
                  </div>
                  <div className='box-content-item'>
                    <span className='box-content-title'>Cantidad de votos:</span>
                    <span className='box-content-info'>{topic.attrs.votos}</span>
                  </div>
                </div>
                <div className='box-footer'>
                  <span className='hashtag'>#ForosVecinalesVteLopez</span>
                    <a target='_blank' href={`http://www.facebook.com/sharer.php?u=${socialLinksUrl}`} rel='noopener noreferrer' className='fb'></a>
                    <a target='_blank' href={`http://twitter.com/share?text=${twitterText}&url=${socialLinksUrl}`} rel='noopener noreferrer' className='tw'></a>
                </div>
                <Link
                  to='/s/datos'
                  className='ver-resu'>
                  Ver los resultados de la votación aquí
                  </Link>
              </div>
            )
        }
        {
          !user.state.pending && <Comments forum={forum} topic={topic} />
        }
        <Proyectos />
      </div>
    )
  }
}

export default userConnector(TopicArticle)

function hideSidebar () {
  bus.emit('sidebar:show', false)
}
