import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import config from 'lib/config'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import userConnector from 'lib/site/connectors/user'
import TopicCard from './topic-card/component'
import BannerListadoTopics from 'ext/lib/site/banner-listado-topics/component'

// Variables para fases de propuestas abiertas o cerrdas:
// config.propuestasAbiertas
// config.propuestasTextoAbiertas
// config.propuestasTextoCerradas
// Botón manda a: href='/formulario-propuesta'

class HomePropuestas extends Component {
  constructor () {
    super()

    this.state = {
      page: 1,
      noMore: false,
      forum: null,
      topics: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    const u = new window.URLSearchParams(window.location.search)
    forumStore.findOneByName('proyectos')
      .then((forum) => {
        return Promise.all([
          forum,
          this.fetchTopics(this.state.page)
        ])
      })
      .then(([forum, topics]) => {
        this.setState({
          forum,
          topics
        })
      })
      .catch((err) => { throw err })
  }

  handleInputChange = (evt) => {
    evt.preventDefault()
    const { value, name } = evt.target
    this.setState({
      [name]: value,
      page: 1
    }, () => this.changeTopics())
  }

  changeTopics () {
    this.fetchTopics(this.state.page)
      .then((res) => {
        this.setState({ topics: res })
      })
      .catch((err) => { console.error(err) })
  }

  fetchTopics = (page) => {
    const query = {
      forumName: 'proyectos',
      sort: 'newest',
      page: page,
      // A MEJORAR: con estos parámetros las no-factibles del 2021 no aparecen en ningún lado
      // solo falta no-factible, que es de las archivadas
      state: 'factible,pendiente,no-factible,integrado,no-ganador,preparacion,compra,ejecucion,finalizado',
      anio: '2021'
    };
    const u = new window.URLSearchParams(window.location.search)
    let queryToArray = Object.keys(query).map((key) => {
      return `${key}=${query[key]}`
    }).join('&')
    return window.fetch(`/ext/api/topics?${queryToArray}`, {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => res.results.topics)
  }

  paginateForward = () => {
    const page = this.state.page + 1

    this.fetchTopics(page)
      .then((topics) => {
        this.setState({
          topics: this.state.topics.concat(topics),
          noMore: topics.length === 0 || topics.length < 20,
          page
        })
      })
      .catch((err) => { console.error(err) })
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
      console.log(res)
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

  render () {
    const { forum, topics } = this.state
    return (

      <div className='ext-home-ideas'>
        <BannerListadoTopics
          btnText='Mandá tu propuesta'
          title='Propuestas'
          />

        <div className='container'>
          <div className="row">
            { config.propuestasAbiertas
              ? (
                  <div className='notice'>
                    <h1>{config.propuestasTextoAbiertas}</h1>
                  </div>
              ) : (
                <span className='alert-duedate' >
                  <span className="text-info">Formulario cerrado, ¡Gracias por participar!</span><br />
                  {config.propuestasTextoCerradas}
                </span>
              )
            }
          </div>
        </div>

        <div className='container topics-container'>
          <div className='row'>
            <div className='col-md-12'>
              {topics && topics.length === 0 && (
                <div className='empty-msg'>
                  <div className='alert alert-success' role='alert'>
                    No se encontraron propuestas.
                  </div>
                </div>
              )}
              {topics && topics.map((topic, i) => (
                <TopicCard
                  onSubscribe={this.handleSubscribe}
                  onVote={this.handleVote}
                  key={`${topic.id}-${i}`}
                  forum={forum}
                  topic={topic} />
              ))}
              {!this.state.noMore && (
                <div className='more-topics'>
                  <button onClick={this.paginateForward}>Ver Más</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default userConnector(HomePropuestas)
