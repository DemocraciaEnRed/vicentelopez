import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import t from 't-component'
import config from 'lib/config'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import userConnector from 'lib/site/connectors/user'
import Footer from 'ext/lib/site/footer/component'
import Barrios from 'ext/lib/site/barrios/component'
import DatosPorForo from 'ext/lib/site/datos-forum/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import TopicCard from '../proyectos/topic-card/component'

export class HomeProyectos extends Component {
  constructor () {
    super()

    this.state = {
      loading: null,
      topics: [],
      forum: null,
      forums: null,
      feedCount: 0,
      noMore: false
    }
  }

  componentWillMount () {
    this.fetchAll()
  }

  fetchAll = () => {
    const { forum: name } = this.props.params

    this.setState({ loading: true })

    const u = new window.URLSearchParams(window.location.search)
    const query = {}

    forumStore.findAll()
      .then((forums) => {
        const barrios = ['villa-martelli','proyectos','villa-adelina','vicente-lopez','olivos','munro','la-lucila','florida-oeste','florida-este','carapachay']
        const forum = forums.find((forum) => forum.name === name)
        query.forum = forum.id
        if (u.has('tag')) query.tag = u.get('tag')

        const topics = name === 'proyectos'
          ? this.getFeed()
          : topicStore.findAll(query)

        return Promise.all([forums, forum, topics])
      })
      .then(([forums, forum, topics]) => {
        this.setState({
          loading: false,
          forums,
          forum,
          topics
        }, () => {
          this.goTop()
        })
      })
      .catch((err) => {
        if (err.status === 404) return browserHistory.push('/404')
        if (err.status === 401) return browserHistory.push('/401')
        throw err
      })
  }

  getFeed = () => {
    const opts = { credentials: 'include' }

    return window.fetch(`/ext/api/feed?s=${this.state.feedCount}`, opts)
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          this.setState({ feedCount: this.state.feedCount + 2 })
          return res.result.topics
        }
      })
  }

  goTop () {
    Anchor.goTo('containerr')
  }

  verMas = () => {
    this.getFeed().then((topics) => {
      this.setState({
        topics: this.state.topics.concat(topics),
        noMore: !topics.length
      })
    }).catch((err) => console.error(err))
  }

  render () {
    if (config.visibility === 'hidden' && this.props.user.state.rejected) {
      browserHistory.push('/signin')
      return null
    }

    if (!this.state.forum) return null

    const { forums, forum } = this.state
    let { topics } = this.state

    // randomizo los topics
    if (topics && forum.name !== 'proyectos') {
      topics = topics.sort(() => 0.5 - Math.random())
    }

    // const cover = (forum.coverUrl && {
    //   backgroundImage: 'linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url("' + forum.coverUrl + '")'
    // }) || null

    return (
      <div id='forum-home'>
        <section className='banner-proyectos'>
          <div className='banner' />
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Proyectos</h1>
            </div>
          </div>
        </section>
        <Barrios forums={forums} />
        <Anchor id='containerr'>
          {this.props.params.forum !== 'proyectos' &&
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
          <div className='btn-wrapper'>
            {!this.state.noMore && forum.name === 'proyectos' && (
              <button className='boton-azul' onClick={this.verMas}>
                VER MAS
              </button>
            )}
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomeProyectos)
