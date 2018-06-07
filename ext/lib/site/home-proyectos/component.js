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
import Header from './header/component'
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
      stage: 'votacion',
      sort: ['barrio']
    }
  }

  componentDidMount () {
    let initialFilters = {}
    if (this.props.location.query.barrio) initialFilters.barrio = this.props.location.query.barrio
    if (this.props.location.query.tag) initialFilters.tags = this.props.location.query.tag
    initialFilters.state = 'factible'
    initialFilters.ano = '2018'
    const queryString = Object.keys(initialFilters).map((k) => `&${k}=${initialFilters[k]}`).join('')
    window.fetch(`/ext/api/topics?forumName=proyectos${queryString}`, {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          barrio: initialFilters.barrio ? [ initialFilters.barrio ] : [],
          state: ['factible'],
          ano: ['2018'],
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
    let query = {
      ano: this.state.ano,
      barrio: this.state.barrio,
      state: this.state.state.length > 0 ? this.state.state : ['ganador', 'no-ganador'],
      sort: this.state.sort
    }
    let queryString = Object.keys(query)
      .filter((k) => query[k].length > 0)
      .map((k) => `${k}=${query[k].join()}`).join('&')
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

  changeStage = () => {
    this.setState((prevState) => {
      console.log(prevState)
      return {
        stage: prevState.stage === 'seguimiento' ? 'votacion' : 'seguimiento',
        ano: prevState.stage === 'seguimiento' ? ['2018'] : ['2017'],
        barrio: [],
        state: prevState.stage === 'seguimiento' ? ['factible'] : ['ganador', 'no-ganador']
      }
    }, this.fetchTopics())
  }

  render () {
    let { topics } = this.state
    return (
      <div id='forum-home'>
        <Header stage={this.state.stage} />
        <Anchor id='containerr'>
          <section className='grid-container'>
            <Filter
              handleFilter={this.handleFilter}
              ano={this.state.ano}
              state={this.state.state}
              barrio={this.state.barrio}
              changeStage={this.changeStage}
              stage={this.state.stage} />
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
