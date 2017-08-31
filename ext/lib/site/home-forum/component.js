import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import t from 't-component'
import urlBuilder from 'lib/url-builder'
import config from 'lib/config'
import checkReservedNames from 'lib/forum/check-reserved-names'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import userConnector from 'lib/site/connectors/user'
import TopicCard from '../proyectos/topic-card/component'
import Footer from 'ext/lib/site/footer/component'
import Barrios from 'ext/lib/site/barrios/component'
import DatosPorForo from 'ext/lib/site/datos-forum/component'

export class HomeForum extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: null,
      topics: [],
      forum: null,
      forums: null
    }
  }

  componentWillMount () {
    if (!config.multiForum && !config.defaultForum) {
      window.location = urlBuilder.for('forums.new')
    }

    let name = this.props.params.forum

    if (!name && !config.multiForum) {
      name = config.defaultForum
    }

    checkReservedNames(name)

    this.setState({ loading: true })

    var u = new window.URLSearchParams(window.location.search)
    let query = {}

    forumStore.findAll().then((forums) => {
      const forum = forums.find((forum) => forum.name === name)
      query.forum = forum.id
      if (name == 'proyectos') {
        window.fetch(`/ext/api/feed`, { credentials: 'include' })
        .then((res) => res.json())
        .then((res) => {
          if (res.result) {
            this.setState({topics: res.result.topics.sort(() => 0.5 - Math.random()) })
          }
        })
      } 
      if (u.has('tag')) query.tag = u.get('tag')
      return Promise.all([
        forums,
        forum,
        topicStore.findAll(query)
      ])
    })

    .then(([forums, forum, topics]) => {
      this.setState({
        loading: false,
        forums,
        forum,
        topics
      })
    })
    .catch((err) => {
      if (err.status === 404) return browserHistory.push('/404')
      if (err.status === 401) return browserHistory.push('/401')
      throw err
    })
  }

  render () {
    if (config.visibility === 'hidden' && this.props.user.state.rejected) {
      browserHistory.push('/signin')
      return null
    }

    if (!this.state.forum) return null

    const { forums, forum, topics } = this.state
  
    //randomizo los topics
    topics.sort(() => 0.5 - Math.random())

    const cover = (forum.coverUrl && {
      backgroundImage: 'linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url("' + forum.coverUrl + '")'
    }) || null

    return (
      <div id='forum-home'>
        <section className="banner-proyectos">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Propuestas</h1>
            </div>
          </div>
        </section>
        <Barrios forums={forums} />
        {this.props.params.forum != 'proyectos' &&
          <DatosPorForo forum={forum} />
        }
        {topics.length === 0 && (
          <div className='no-topics'>
            <p>{t('homepage.no-topics')}</p>
          </div>
        )}
        <div className='topics-container'>
          {this.state.loading && (
            <div className='loader-wrapper'>
              <div className='topic-loader' />
            </div>
          )}
         {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} forum={forums.find((f) => f.id === topic.forum)} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomeForum)