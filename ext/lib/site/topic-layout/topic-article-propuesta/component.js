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
import topicStore from 'lib/stores/topic-store/topic-store'

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
                <p className='alert alert-warning'>
                  El estado de ésta propuesta fue cambiado a {topic.attrs.state}, por lo tanto ya no puede ser editada por su autor/a.
                </p>
              )
          }

        <Header
          closingAt={topic.closingAt}
          closed={topic.closed}
          author={topic.author}
          authorUrl={topic.authorUrl}
          tags={topic.tags}
          forumName={forum.name}
          mediaTitle={topic.mediaTitle} />

        <div className='topic-card-body'>
          <div className='topic-article-content entry-content'>
            {topic.attrs.problema &&
          <p><span>Problema:</span> {topic.attrs.problema} </p>
            }
            {topic.attrs.problema &&
          <p><span>Solución:</span>  {topic.attrs.solucion} </p>
            }
            {topic.attrs.problema &&
          <p><span>Beneficios: </span> {topic.attrs.beneficios} </p>
            }

            { /*  <div className='topic-card-footer'>
              <div className='participants'>
                {topic.action.count}
                <span className='icon-like' />
              </div>
              {topic.voted && (
                <button disabled className='btn btn-primary'>
          Te gusta
                </button>
              )}
              {!topic.voted && (
                <button
                  onClick={() => onVote(topic.id)}
                  className='btn btn-primary'>
          Me gusta
                </button>
              )}
            </div> */ }

          </div>
        </div>

        {
          topic.links && (
            <Footer
              source={topic.source}
              links={topic.links}
              socialUrl={topic.url}
              title={topic.mediaTitle} />
          )
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

function createClauses ({ attrs, clauses }) {
  let div = document.createElement('div')
  let content
  if (!attrs) {
    content = clauses
      .sort(function (a, b) {
        return a.position > b.position ? 1 : -1
      })
      .map(function (clause) {
        return clause.markup
      })
      .join('')
  } else {
    const { problema, solucion, beneficios } = attrs
    content = `${problema} \n\n ${solucion} \n\n ${beneficios}`
  }
  div.innerHTML = content
  return div.textContent
}

/*
handleVote = (id) => {
  const { user } = this.props

  if (user.state.rejected) {
    return browserHistory.push({
      pathname: ‘/signin’,
      query: { ref: window.location.pathname }
    })
  }

    topicStore.vote(id, ‘apoyo-idea’)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => { throw err }) */
