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
import Filter from './filter/component'
import TopicGrid from './TopicGrid/component'

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
        const forum = forums.find((forum) => forum.name === name)
        query.forum = forum.id
        if (u.has('tag')) query.tag = u.get('tag')

        const topics = name === 'proyectos'
          ? this.getFeed()
          : topicStore.findAll(query).then(([ topics, pagination ]) => topics)

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
        <header className='banner-proyectos'>
          <h1 className='proyectos-title'>Seguimiento de proyectos</h1>
          <h2 className='proyectos-subtitle'>Acá podés encontrar los proyectos que fueron aprobados en votaciones anteriores y ver en qué estado de su ejecución se encuentran.</h2>
        </header>
        <Anchor id='containerr'>
          <section className='grid-container'>
            <Filter />
            <TopicGrid topics={topics} />
          </section>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomeProyectos)
