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
import BannerListadoTopics from 'ext/lib/site/banner-listado-topics/component'

const defaultValues = {
  'votacion': {
    barrio: [],
    anio: ['2020'],
    // state: ['preparacion', 'compra', 'ejecucion', 'finalizado']
    state: ['preparacion', 'compra', 'ejecucion', 'finalizado']
  },
  'seguimiento': {
    barrio: [],
    // anio: ['2018', '2019', '2020'],
    anio: ['2018', '2019', '2020'],
    state: ['no-ganador', 'preparacion', 'compra', 'ejecucion', 'finalizado']
  }
}

export class HomeProyectos extends Component {
  constructor () {
    super()
    this.state = {
      topics: [],
      forum: 'proyectos',
      page: null,
      noMore: false,
      anio: [],
      barrio: [],
      state: [],
      // puede ser 'seguimiento' o 'votacion'
      stage: 'votacion', //anterior 'votación', se modificó para ocultar filtro de proyectos ganadores del 2018.
      sort: ['barrio']
    }
  }

  componentDidMount () {
    let initialFilters = {}
    if (this.props.location.query.barrio) initialFilters.barrio = this.props.location.query.barrio
    if (this.props.location.query.tag) initialFilters.tags = this.props.location.query.tag
    initialFilters.sort = 'barrio'
    // This filters should be applied if seguimiento stage is active only
    // initialFilters.state = 'no-ganador,preparacion,compra,ejecucion,finalizado'
    // initialFilters.anio = '2018,2019'
    // This filters should be applied if Votacion Abierta stage is active only
    initialFilters.state = this.props.location.query.stage === 'seguimiento' ? 'no-ganador,preparacion,compra,ejecucion,finalizado' : 'preparacion,compra,ejecucion,finalizado'
    initialFilters.anio = this.props.location.query.stage === 'seguimiento' ? '2018,2019,2020' : '2020'
    // initialFilters.anio = this.props.location.query.stage === 'seguimiento' ? '2018,2019,2020' : '2019'
    const queryString = Object.keys(initialFilters).map((k) => `&${k}=${initialFilters[k]}`).join('')
    window.fetch(`/ext/api/topics?forumName=proyectos${queryString}&limit=100`, {
      credentials: 'include'
    })
    // window.fetch(`/ext/api/topics?forumName=proyectos${queryString}`, {
    //   credentials: 'include'
    // })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          barrio: initialFilters.barrio ? [ initialFilters.barrio ] : [],
          // This filters should be applied if seguimiento stage is active only
          // state: defaultValues.seguimiento.state,
          // anio: defaultValues.seguimiento.anio,
          // stage: 'seguimiento',
          // This filters should be applied if Votacion Abierta stage is active only
          state: this.props.location.query.stage === 'seguimiento' ? ['no-ganador', 'preparacion', 'compra', 'ejecucion', 'finalizado'] : ['preparacion', 'compra', 'ejecucion', 'finalizado'],
          anio: this.props.location.query.stage === 'seguimiento' ? ['2018', '2019','2020'] : ['2020'],
          stage: this.props.location.query.stage === 'seguimiento' ? 'seguimiento' : 'votacion',
          topics: res.results.topics,
          page: res.pagination.page,
          noMore: res.results.topics.length < 20
        }, () => {
          this.firstSeeMore()
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
      // If it's already included and it's the only filter applied, apply default filters
    /* } else if (this.state[filter].length === 1) {
      this.clearFilter(filter) */
      // If it's already included erase it
    } else {
      this.setState({
        [filter]: [...this.state[filter]].filter((item) => item !== value)
      }, () => this.fetchTopics())
    }
  }

  handleDefaultFilter = (filter, value) => {
    this.setState({
      [filter]: [value]
    }, () => this.fetchTopics())
  }

  // Clear all selected items from a filter
  clearFilter = (filter) => {
    this.setState({
      [filter]: defaultValues[this.state.stage][filter]
    }, () => this.fetchTopics())
  }

  fetchTopics = () => {
    let query = {
      anio: this.state.anio,
      barrio: this.state.barrio,
      state: this.state.state,
      sort: this.state.sort
    }
    let queryString = Object.keys(query)
      .filter((k) => query[k].length > 0)
      .map((k) => `${k}=${query[k].join()}`)
      .concat([`limit=100`])
      .join('&')
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
    let queryString = ['anio', 'barrio', 'state', 'sort']
      .filter((k) => this.state[k].length > 0)
      .map((k) => `${k}=${this.state[k].join()}`)
      .concat([`page=${this.state.page + 1}`])
      .concat([`limit=100`])
      .join('&')
    window.fetch(`/ext/api/topics?forumName=proyectos&${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          topics: [...this.state.topics].concat(res.results.topics),
          page: res.pagination.page,
          noMore: res.results.topics.length < 20
        })
      })
      .catch((err) => console.error(err))
  }

  firstSeeMore = () => {
    let queryString = ['anio', 'barrio', 'state', 'sort']
      .filter((k) => this.state[k].length > 0)
      .map((k) => `${k}=${this.state[k].join()}`)
      .concat([`page=${this.state.page + 1}`])
      .concat([`limit=100`])
      .join('&')
    window.fetch(`/ext/api/topics?forumName=proyectos&${queryString}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          topics: [...this.state.topics].concat(res.results.topics),
          page: res.pagination.page,
          noMore: res.results.topics.length < 20
        },() => {
          this.seeMore()
        })
      })
      .catch((err) => console.error(err))
  }

  goTop () {
    Anchor.goTo('containerr')
  }

  changeStage = () => {
    this.setState((prevState) => {
      return {
        stage: prevState.stage === 'seguimiento' ? 'votacion' : 'seguimiento',
        anio: prevState.stage === 'seguimiento' ? ['2020'] : ['2018', '2019', '2020'],
        barrio: [],
        state: prevState.stage === 'seguimiento' ? ['preparacion', 'compra', 'ejecucion', 'finalizado'] : ['preparacion', 'compra', 'ejecucion', 'finalizado']
      }
    }, () => this.fetchTopics())
  }

  render () {
    let { topics } = this.state

    return (
      <div id='forum-home'>
        <BannerListadoTopics
          title='Seguimiento de Proyectos'
          subtitle='Acá podés encontrar los proyectos que fueron <b>ganadores</b> o <b>están aprobados</b> y ver en qué estado de su ejecución se encuentran.'
          />

        <Anchor id='containerr'>
          <section className='grid-container'>
            <Filter
              handleFilter={this.handleFilter}
              handleDefaultFilter={this.handleDefaultFilter}
              anio={this.state.anio}
              state={this.state.state}
              barrio={this.state.barrio}
              changeStage={this.changeStage}
              stage={this.state.stage}
              clearFilter={this.clearFilter}
              openVotation={true} />
            <TopicGrid topics={topics} />
          </section>
          <div className='paginacion-container'>
            {this.state.noMore
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
