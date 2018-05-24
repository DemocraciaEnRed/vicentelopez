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
    window.fetch(`/ext/api/topics?forumName=proyectos&state=ganador&limit=20&sort=popular`, { credentials: 'include' })
      .then((res) => res.json())
      .then((res) => this.setState({ topics: res.results.topics.sort(() => 0.5 - Math.random()) }))
      .catch((err) => console.error(err))
  }

  componentDidUpdate () {
    if (this.flkty) this.flkty.destroy()
    const options = {
      // cellAlign: 'center',
      // draggable: true,
      // friction: 0.2,
      // contain: true,
      pageDots: false,
      wrapAround: true
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
          <h2 className='title'>Proyectos ganadores del 2017</h2>
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
