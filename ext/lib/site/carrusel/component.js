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
      forum: null
    }
    this.flkty = null
  }

  componentDidMount () {
    forumStore.findOneByName('proyectos')
      .then((forum) => {
        return Promise.all([forum, topicStore.findAll({ forum: forum.id })])
      })
      .then(([forum, topics]) => {
        console.log(forum, topics)
        this.setState({ topics, forum })
      })
      .catch((err) => {
        console.log(err)
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



  render(){
    const { forum, topics } = this.state
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
          <div ref='carousel' >
            {topics && topics.map((topic, i) => <TopicCard key={topic.id} forum={forum} topic={topic} />)}
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
