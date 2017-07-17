import React, { Component } from 'react'
import topicStore from 'lib/stores/topic-store/topic-store'
import forumStore from 'lib/stores/forum-store/forum-store'
import TopicCard from './topic-card/component'
import Flickity from 'flickity'


export default class Carrusel extends Component{
  constructor(props){
    super(props)
    this.state = {
      topics: null,
      forums: null
    }
    this.flkty = null
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

  componentDidUpdate (){
    const carousel = this.refs.carousel;
    const options = {
        contain: true,
        initialIndex: 0,
        accessibility: true,
        pageDots: false,
        wrapAround: true
    }

    this.flkty = new Flickity(carousel, options);
    this.flkty.on('cellSelect', this.updateSelected);
  }

  carruselMount = (e) => {
    console.log(e, this.state.topics)
  }

  render(){
    const { forums, topics } = this.state
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
          <div ref={this.carruselMount}>
            {topics && topics.map((topic, i) => <TopicCard key={topic.id} forum={forums.find((f) => f.id === topic.id)} topic={topic} />)}
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
