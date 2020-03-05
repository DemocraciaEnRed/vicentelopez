import React, { Component } from 'react'
import Flickity from 'flickity'
import { Link } from 'react-router'
import TopicCard from './topic-card/component'

export default class Carrusel extends Component {
  constructor (props) {
    super(props)
    this.flkty = null
    this.state = {
      topics: null
    }
  }

  componentDidMount () {
    window.fetch(`/ext/api/topics?forumName=proyectos&anio=2020&state=preparacion,compra,ejecucion,finalizado&limit=20&sort=popular`, { credentials: 'include' })
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
      contain: this.state.topics.length <= 5,
      pageDots: false,
      wrapAround: this.state.topics.length > 5
    }
    this.flkty = new Flickity(this.refs.carrusel, options)
  }

  componentWillUnmount () {
    this.flkty.destroy()
  }

  render () {
    const { topics } = this.state
    return (
      <div className='seccion-proyectos container-fluid'>
        <div className="fondo-titulo">
          <h2 className='title'>Proyectos ganadores del 2019</h2>
        </div>
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
