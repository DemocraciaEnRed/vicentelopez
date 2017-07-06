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

  carruselMount = (e) => {
    console.log(e)
    this.flkty = new Flickity(e, {
      autoPlay: true,
      wrapAround: true,
      contain: true
    })
  }

  render(){
    const { forum, topics } = this.state
    return (
      <div className='carrusel-seccion container-fluid'>
        <div className='row'>
          <div className='col-xs-10 offset-xs-1 col-md-8 offset-md-2 cont-barrio'>
            <div className='barrio-verde'>
              <h2>Proyectos</h2>
            </div>
          </div>
        </div>
        <div ref={this.carruselMount}>
          {topics && topics.map((topic, i) => <TopicCard key={topic.id} forum={forum} topic={topic} />)}
        </div>

      </div>

    )
  }
}
