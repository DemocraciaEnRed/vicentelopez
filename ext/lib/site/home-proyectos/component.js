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
import TopicGrid from './grid/component'

export class HomeProyectos extends Component {
  constructor () {
    super()
    this.state = {
      topics: [],
      forum: 'proyectos',
      page: null,
      noMore: false,
      ano: [],
      barrio: [],
      state: [],
      stage: 'seguimiento'
    }
  }

  componentDidMount () {
    let initialFilters = {}
    if (this.props.location.query.barrio) initialFilters.barrio = this.props.location.query.barrio
    if (this.props.location.query.tag) initialFilters.tags = this.props.location.query.tag
    initialFilters.state = 'ganador,no-ganador'
    const queryString = Object.keys(initialFilters).map((k) => `&${k}=${initialFilters[k]}`).join('')
    window.fetch(`/ext/api/topics?forumName=proyectos${queryString}`, {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          barrio: initialFilters.barrio ? initialFilters.barrio : [],
          topics: res.results.topics,
          page: res.pagination.page,
          noMore: this.state.page >= res.pagination.pageCount
        })
      })
      .catch((err) => console.error(err))
  }

  handleFilter = (filter, value) => {
    // If the value is not included in the filter array, add it
    if (!this.state[filter].includes(value)) {
      this.setState({
        [filter]: [...this.state[filter], value]
      }, () => this.fetchTopics())
    // If it's already included erase it
    } else {
      this.setState({
        [filter]: [...this.state[filter]].filter((item) => item !== value)
      }, () => this.fetchTopics())
    }
  }

    // Clear all selected items from a filter
    clearFilter = (filter) => {
      this.setState({
        [filter]: []
      }, () => this.fetchTopics())
    }

  fetchTopics = () => {
    console.log(this.state)
    let queryString = ['ano', 'barrio', 'state']
      .filter((k) => this.state[k].length > 0)
      .map((k) => `${k}=${this.state[k].join()}`).join('&')
    window.fetch(`/ext/api/topics?forumName=proyectos&${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          topics: res.results.topics,
          page: res.pagination.page,
          noMore: this.state.page >= res.pagination.pageCount
        })
      })
      .catch((err) => console.error(err))
  }

  seeMore = () => {
    let queryString = ['ano', 'barrio', 'state']
      .filter((k) => this.state[k].length > 0)
      .map((k) => `${k}=${this.state[k].join()}`)
      .concat([`page=${this.state.page + 1}`])
      .join('&')
    window.fetch(`/ext/api/topics?forumName=proyectos&${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          topics: [...this.state.topics].concat(res.results.topics),
          page: res.pagination.page,
          noMore: this.state.page >= res.pagination.pageCount
        })
      })
      .catch((err) => console.error(err))
  }

  goTop () {
    Anchor.goTo('containerr')
  }

  // fetchAll = () => {
  //   const { forum: name } = this.props.params

  //   this.setState({ loading: true })

  //   const u = new window.URLSearchParams(window.location.search)
  //   const query = {}

  //   forumStore.findAll()
  //     .then((forums) => {
  //       const forum = forums.find((forum) => forum.name === name)
  //       query.forum = forum.id
  //       if (u.has('tag')) query.tag = u.get('tag')

  //       const topics = name === 'proyectos'
  //         ? this.getFeed()
  //         : topicStore.findAll(query).then(([ topics, pagination ]) => topics)

  //       return Promise.all([forums, forum, topics])
  //     })
  //     .then(([forums, forum, topics]) => {
  //       this.setState({
  //         loading: false,
  //         forums,
  //         forum,
  //         topics
  //       }, () => {
  //         this.goTop()
  //       })
  //     })
  //     .catch((err) => {
  //       if (err.status === 404) return browserHistory.push('/404')
  //       if (err.status === 401) return browserHistory.push('/401')
  //       throw err
  //     })
  // }

  // getFeed = () => {
  //   const opts = { credentials: 'include' }
  //   return window.fetch(`/ext/api/topics?forumName=proyectos&s=${this.state.feedCount}`, opts)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.result) {
  //         this.setState({ feedCount: this.state.feedCount + 2 })
  //         return res.result.topics
  //       }
  //     })
  // }

  // verMas = () => {
  //   this.getFeed().then((topics) => {
  //     this.setState({
  //       topics: this.state.topics.concat(topics),
  //       noMore: !topics.length
  //     })
  //   }).catch((err) => console.error(err))
  // }

  render () {
    // if (config.visibility === 'hidden' && this.props.user.state.rejected) {
    //   browserHistory.push('/signin')
    //   return null
    // }
    // if (!this.state.forum) return null
    // const { forum } = this.state
    let { topics } = this.state

    // // randomizo los topics
    // if (topics && forum.name !== 'proyectos') {
    //   topics = topics.sort(() => 0.5 - Math.random())
    // }

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
            <Filter
              handleFilter={this.handleFilter}
              ano={this.state.ano}
              state={this.state.state}
              barrio={this.state.barrio} />
            <TopicGrid topics={topics} />
          </section>
          <div className='paginacion-container'>
            {this.state.noMore || topics.length === 0
              ? <span>No hay más proyectos que coincidan con la búsqueda</span>
              : <button className='boton-azul btn' onClick={this.seeMore}>
                Ver más
              </button>
            }
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomeProyectos)
