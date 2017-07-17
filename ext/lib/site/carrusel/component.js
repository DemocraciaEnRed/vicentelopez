import React, { Component } from 'react'
import topicStore from 'lib/stores/topic-store/topic-store'
import forumStore from 'lib/stores/forum-store/forum-store'
import TopicCard from './topic-card/component'
import Flickity from 'flickity'


export default class Carrusel extends Component {
  constructor (props) {
      super(props)
      this.flkty = null
  }

  componentDidUpdate(){
    const options = {
      cellAlign: 'center',
      draggable: true,
      friction: 0.2,
      contain: true,
      wrapAround: true,
      imagesLoaded: true
    }
    this.flkty = new Flickity(this.refs.carrusel, options)
  }

  render(){
    const { forums, topics } = this.props
    return (
      <div className='carrusel-seccion container-fluid'>
        <div className='row'>
          <div
            className='col-xs-10 offset-xs-1 col-md-8 offset-md-2 cont-barrio'>
            <div className='titulo-verde' >
              <h2>Proyectos</h2>
            </div>
          </div>
        </div>
        <div>
          <div ref='carrusel'>
            {topics && topics.map((topic, i) => (
              <TopicCard key={topic.id} forum={forums.find((f) => f.id === topic.id)} topic={topic} />
            ))}
          </div>
        </div>
        <div
          className='row'>
            <div
              className='col-xs-12 col-md-4 offset-md-4 cont-boton-azul'>
                <a href='#'><button
                  type="button" className
                    =" boton-azul btn">
                    <p>VER MÁS</p>
                </button></a>
            </div>
        </div>
      </div>

    )
  }
}
