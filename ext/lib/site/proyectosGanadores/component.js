import React, { Component } from 'react'
import Flickity from 'flickity'
import forumStore from 'lib/stores/forum-store/forum-store'

import { Link } from 'react-router'
import TopicCard from '../proyectos/topic-card/component'
import getYears from '../utils/getYears'

export default class Carrusel extends Component {
  constructor (props) {
    super(props)
    this.flkty = null
    this.state = {
      topics: null,
      forumConfig:null,
      barrios: [
        {
          'name': 'carapachay',
          'title': 'Carapachay'
        },
        {
          'name': 'florida-este',
          'title': 'Florida Este'
        },
        {
          'name': 'florida-oeste',
          'title': 'Florida Oeste'
        },
        {
          'name': 'la-lucila',
          'title': 'La Lucila'
        },
        {
          'name': 'munro',
          'title': 'Munro'
        },
        {
          'name': 'olivos',
          'title': 'Olivos'
        },
        {
          'name': 'vicente-lopez',
          'title': 'Vicente Lopez'
        },
        {
          'name': 'villa-adelina',
          'title': 'Villa Adelina'
        },
        {
          'name': 'villa-martelli',
          'title': 'Villa Martelli'
        }
      ],
    }
  }

  componentDidMount () {
    forumStore.findOneByName('proyectos')
      .then((forum) => {
        this.setState({ forumConfig: forum.config })
      }).then(()=>
      window.fetch(`/ext/api/topics?forumName=proyectos&anio=${getYears(this.state.forumConfig, 'votation')}&state=preparacion,compra,ejecucion,finalizado&limit=100&sort=popular`, { credentials: 'include' })
      )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ topics: res.results.topics.sort(() => 0.5 - Math.random()) }
      )})
      .catch((err) => console.error(err))
  }

  componentDidUpdate () {
    if (this.flkty) this.flkty.destroy()
    // https://www.npmjs.com/package/flickity
    const options = {
      // cellAlign: 'center',
      // draggable: true,
      // friction: 0.2,
      contain: this.state.topics && this.state.topics.length <= 5,
      pageDots: false,
      wrapAround: this.state.topics && this.state.topics.length > 5
    }
    this.flkty = new Flickity(this.refs.carrusel, options)
  }

  componentWillUnmount () {
    this.flkty.destroy()
  }

  render () {
    const {forumConfig, topics, barrios } = this.state
    return (
      <div className='seccion-proyectos-factibles container-fluid'>
        <div className="fondo-titulo">
          <h2 className='title'>Proyectos Ganadores {forumConfig && getYears(forumConfig, 'votation')}</h2>
        </div>
        <section className='seccion-barrios-factibles container'>
          <div className='seccion-barrios-proyectos-factibles container'>
            <div className='seccion-botones-factibles'>
              {/* <Link to={`/proyectos`} className={`boton-azul btn`}>
                Todos los barrios
              </Link> */}
              {barrios.map((barrio, i) => (
                <Link key={i} to={`/proyectos?barrio=${barrio.name}`}
                  className={`boton-azul btn`}>
                  { barrio.title }
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div ref='carrusel'>
          {topics && topics.map((topic, i) => (
            <TopicCard key={topic.id} topic={topic} forum={{ title: topic.attrs.barrio }} />
          ))}
        </div>
        <Link className='boton-azul' href='/proyectos'>
          Ver más
        </Link>
      </div>
    )
  }
}
