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
        cellSelector: '.ext-topic-card',
        contain: true,
        initialIndex: 0,
        accessibility: true
    }

    this.flkty = new Flickity(carousel, options);
    this.flkty.on('cellSelect', this.updateSelected);

}



  render(){
    const { forum, topics } = this.state
    return (
      <div ref='carousel' >
        {topics && topics.map((topic, i) => <TopicCard key={topic.id} forum={forum} topic={topic} />)}
      </div>


    )
  }
}
