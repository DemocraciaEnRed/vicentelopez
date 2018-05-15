import React, { Component } from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import TopicCard from '../../proyectos/topic-card/component'

export default class TopicGrid extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        {this.props.topics.map((topic, i) => (
          <TopicCard key={topic.id} topic={topic} forum={this.props.forums.find((f) => f.id === topic.forum)} />
        ))}
      </div>
    )
  }
}
