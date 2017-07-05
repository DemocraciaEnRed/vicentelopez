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
      autoPlay: true
    })
  }

  render(){
    const { forum, topics } = this.state
    return (
      <div ref={this.carruselMount}>
        {topics && topics.map((topic, i) => <TopicCard key={topic.id} forum={forum} topic={topic} />)}
      </div>

      // <div ref={this.carruselMount} className='carousel'>
      //     <div className='cell'>1</div>
      //     <div className='cell'>2</div>
      //     <div className='cell'>3</div>
      //     <div className='cell'>4</div>
      // </div>
    )
  }
}
