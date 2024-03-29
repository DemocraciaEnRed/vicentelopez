import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import config from 'lib/config'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import userConnector from 'lib/site/connectors/user'
import { findAllTags } from 'lib/middlewares/tag-middlewares/tag-middlewares'
import TopicCard from './topic-card/component'
import Footer from 'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
// import BannerListadoTopics from 'ext/lib/site/banner-listado-topics/component'
import FilterPropuestas from './filter-propuestas/component'
import BotonMandarPropuesta from './botonMandarPropuestas'
import getYears from '../utils/getYears'

const barrios = [
  { 'name': 'Carapachay', 'value': 'carapachay' },
  { 'name': 'Florida Este', 'value': 'florida-este' },
  { 'name': 'Florida Oeste', 'value': 'florida-oeste' },
  { 'name': 'La Lucila', 'value': 'la-lucila' },
  { 'name': 'Munro', 'value': 'munro' },
  { 'name': 'Olivos', 'value': 'olivos' },
  { 'name': 'Vicente López', 'value': 'vicente-lopez' },
  { 'name': 'Villa Adelina', 'value': 'villa-adelina' },
  { 'name': 'Villa Martelli', 'value': 'villa-martelli' }
]

const states = [
  { 'name': 'Pendiente', 'value': 'pendiente' },
  { 'name': 'Factible', 'value': 'factible' },
  { 'name': 'No factible', 'value': 'no-factible' },
  { 'name': 'Integrado', 'value': 'integrado' },

]

const anios = ['2018', '2019', '2020', '2021','2022','2023']

let tags = []

// Variables para fases de propuestas abiertas o cerrdas:
// config.propuestasAbiertas
// config.propuestasTexto
// Botón manda a: href='/formulario-propuesta'

const factibleStates= ['no-ganador', 'preparacion', 'compra', 'ejecucion', 'finalizado', 'factible']

const defaultValues = {
  limit: 20,
  barrio: [],
  anio: ['2023'],
  //state: ['pendiente', 'factible', 'no-factible', 'integrado','preparacion', 'compra', 'ejecucion', 'finalizado'],
  state: [],
  tag: [],
  // 'barrio' o 'newest' o 'popular'
  sort: 'newest'
}

class HomePropuestas extends Component {
  constructor () {
    super()

    this.state = {
      forum: null,
      topics: null,

      anio: defaultValues.anio,
      barrio: defaultValues.barrio,
      state: defaultValues.state,
      tag: defaultValues.tag,
      sort: defaultValues.sort,

      page: null,
      noMore: null
    }

    this.handleInputChange = this.handleInputChange.bind(this)

    this.getTags()
  }

  goTop () {
    window.scrollTo(0,0)
  }

  componentWillMount () {
    if (this.props.location.query.tags)
      defaultValues.tag.push(this.props.location.query.tags)
  }

  componentDidMount () {
    window.scrollTo(0,0)

    // traer forum al state
    forumStore.findOneByName('proyectos')
      .then((forum) => this.setState({ forum }))
      .then(()=>this.setState({anio:getYears(this.state.forum.config,'votation')}))
      .then(()=>this.fetchTopics())
      .catch((err) => { throw err })
    
/*     // traer topics
    this.fetchTopics() */
  }

  getTags = () => {
    let res = {}
    findAllTags(res, () => {
      let barriosKeys = barrios.map((b) => b.value)
      let tagsNoBarrio = res.tags.filter((t) => ! barriosKeys.includes(t.hash))
      tags = tagsNoBarrio.filter(t => t.name != 'Default').map((t) => ({name: t.name, value: t.id}))
    })
  }

  fetchTopics = (page) => {
    page = page || 1

    let query = {
      forumName: config.forumProyectos,
      page: page.toString(),
      limit: defaultValues.limit.toString(),

      anio: this.state.anio.length > 0 ? this.state.anio : getYears(this.state.forum.config),
      barrio: this.state.barrio,
      state: this.state.state,
      // tags: this.state.tag,
      tag: this.state.tag,
      sort: this.state.sort
    }

    let queryString = Object.keys(query)
      .filter((k) => query[k] && query[k].length > 0)
      .map((k) => `${k}=${ Array.isArray(query[k]) ?  query[k].join(',') : query[k] }`)
      .join('&')
      
    return window
      .fetch(`/ext/api/topics?${queryString}`, {credentials: 'include'})
      .then((res) => res.json())
      .then((res) => {
        // pagination contiene: count, page, pageCount, limit
        this.setState({
          topics: page == 1 ? res.results.topics : this.state.topics.concat(res.results.topics),
          page: page,
          noMore: page >= res.pagination.pageCount
        })
        return res.results.topics
      })
      .catch((err) => console.error(err))
  }

  // función cuando hacés click en "Ver Más"
  paginateForward = () => {
    const page = this.state.page + 1
    this.fetchTopics(page)
  }

  changeTopics () {
    this.fetchTopics(this.state.page)
      .then((res) => {
        this.setState({ topics: res })
      })
      .catch((err) => { console.error(err) })
  }

  handleInputChange = (evt) => {
    evt.preventDefault()
    const { value, name } = evt.target
    this.setState({
      [name]: value,
      page: 1
    }, () => this.changeTopics())
  }

  handleFilter = (filter, value) => {
    // If the value is not included in the filter array, add it
    if (!this.state[filter].includes(value)) {
      this.setState({
        [filter]: value==='factible' ? [...this.state[filter], ...factibleStates] : [...this.state[filter], value]
      }, () => this.fetchTopics())
      // If it's already included and it's the only filter applied, apply default filters
    /* } else if (this.state[filter].length === 1) {
      this.clearFilter(filter) */
      // If it's already included erase it
    } else {
      this.setState({
        [filter]: value==='factible' ? [...this.state[filter].filter(item=>!factibleStates.includes(item))] : [...this.state[filter]].filter((item) => item !== value)
      }, () => this.fetchTopics())
    }
  }

  handleDefaultFilter = (filter, value) => {
    this.setState({
      [filter]: value==='factible' ? factibleStates : [value]
    }, () => this.fetchTopics())
  }

  // Clear all selected items from a filter
  clearFilter = (filter) => {
    this.setState({
      [filter]: []
    }, () => this.fetchTopics())
  }

  handleVote = (id) => {
    const { user } = this.props

    if (user.state.rejected) {
      return browserHistory.push({
        pathname: '/signin',
        query: { ref: window.location.pathname }
      })
    }

    topicStore.vote(id, 'apoyo-idea').then((res) => {
      const topics = this.state.topics
      const index = topics.findIndex((t) => t.id === id)
      topics[index] = res
      this.setState({ topics })
    }).catch((err) => { throw err })
  }

  handleSubscribe = (id) => {
    const { user } = this.props

    if (user.state.rejected) {
      return browserHistory.push({
        pathname: '/signin',
        query: { ref: window.location.pathname }
      })
    }

    // WIP
    const subscribeURL =`/api/v2/topics/${id}/subscribe` // TO DO CONFIRM URL
    window.fetch(subscribeURL, {
      credentials: 'include',
      method: 'POST'
    }).then((res) => res.json())
    .then(res => {
      let index = this.state.topics.findIndex(topic => {
        return topic.id == id
      })
      let topicsCopy = this.state.topics

      if(res.message === 'Suscribed') {
        if(topicsCopy[index].attrs.subscribers){
          let aux = topicsCopy[index].attrs.subscribers.split(',')
          aux.push(user.state.value.id)
          topicsCopy[index].attrs.subscribers = aux.join(',')
        } else {
          topicsCopy[index].attrs.subscribers = user.state.value.id
        }
      }
      else {
        if(topicsCopy[index].attrs.subscribers){
          let aux = topicsCopy[index].attrs.subscribers.split(',')
          aux = aux.filter( s => s != user.state.value.id)
          topicsCopy[index].attrs.subscribers = aux.join(',')
        }
      }
      this.setState({
        topics: topicsCopy
      })
    }).catch((err) => { throw err })
  }

  handleRemoveBadge = (option) => (e) => {
    // feísimo, feísimo
    if (this.state.anio.includes(option)){
      this.setState({ anio: this.state.anio.filter(i => i != option) })
    }else if (this.state.state.includes(option)){
      this.setState({ state: this.state.state.filter(i => i != option) })
    }else if (this.state.barrio.includes(option)){
      this.setState({ barrio: this.state.barrio.filter(i => i != option) })
    }else if (this.state.tag.includes(option)){
      this.setState({ tag: this.state.tag.filter(i => i != option) })
    }

    this.setState({topics:[]}, ()=>this.fetchTopics())
  }

  render () {
    const { forum, topics } = this.state
    return (

      <div className='ext-home-ideas'>
        {/*<BannerListadoTopics
          btnText='Mandá tu propuesta'
          btnLink='/formulario-propuesta'
          title='Propuestas'
          />*/}
        {
          forum && forum.config.propuestasAbiertas ? <BotonMandarPropuesta /> : 
            <header className='banner-proyectos'>
              <h1 className='proyectos-title'>Propuestas</h1>
              <p>Acá podés encontrar las propuestas correspondientes al Presupuesto Participativo de Vicente López</p>
            </header>
        }
        { forum && forum.config.propuestasTexto &&
        <div className='container'>
          <div className='row'>
            <div className='notice'>
              <h1>{forum.config.propuestasTexto}</h1>
            </div>
          </div>
        </div>
        }
        {forum && <div className='container topics-container'>

          {forum && forum.config.filterYear && <FilterPropuestas
            barrios={barrios}
            barrio={this.state.barrio}
            states={states}
            state={this.state.state}
            anios={getYears(forum.config)}
            anio={this.state.anio}
            tags={tags}
            tag={this.state.tag}
            openVotation={true}
            handleFilter={this.handleFilter}
            handleDefaultFilter={this.handleDefaultFilter}
            clearFilter={this.clearFilter}
            handleRemoveBadge={this.handleRemoveBadge} />}

          <div className='row mt-2'>
            <div className='col-md-10 offset-md-1'>
              {topics && topics.length === 0 || !forum.config.filterYear && (
                <div className='empty-msg'>
                  <div className='alert alert-warning' role='alert'>
                    No se encontraron propuestas.
                  </div>
                </div>
              )}
              {topics && forum.config.filterYear && topics.map((topic, i) => (
                <TopicCard
                  barrio={topic.attrs && barrios.find(b => b.value == topic.attrs.barrio)}
                  onSubscribe={this.handleSubscribe}
                  onVote={this.handleVote}
                  key={`${topic.id}-${i}`}
                  forum={forum}
                  topic={topic} />
              ))}
              {!this.state.noMore && forum.config.filterYear && (
                <div className='more-topics'>
                  <button onClick={this.paginateForward}>Ver Más</button>
                </div>
              )}
            </div>
          </div>
        </div>}
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomePropuestas)
