import React, { Component } from 'react'
import topicStore from 'lib/stores/topic-store/topic-store'
import forumStore from 'lib/stores/forum-store/forum-store'
import TopicCard from './topic-card/component'
import Flickity from 'flickity'
import {Link} from 'react-router'



export default class Carrusel extends Component {
  constructor (props) {
      super(props)
      this.flkty = null
      this.state = {
        forums: null,
        topics: null
      }
  }

  componentWillMount () {
    window.fetch(`/ext/api/feed`, { credentials: 'include' })
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          this.setState({ forums: res.result.forums, topics: res.result.topics.sort(() => 0.5 - Math.random()) })
        }
      })
  }

  componentDidUpdate(){
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

  render(){
    const { forums, topics } = this.state
    return (
      <div className='seccion-proyectos container-fluid'>
        <div className="fondo-titulo">
          <h2 className='title'>Propuestas a votación</h2>
        </div>
        <div ref='carrusel'>
          {topics && topics.map((topic, i) => (
            <TopicCard key={topic.id} topic={topic} forum={forums.find((f) => f.id === topic.forum)} />
          ))}
        </div>
        <Link className='boton-azul' href='/proyectos'>
          Ver más
        </Link>
      </div>
    )
  }
}
