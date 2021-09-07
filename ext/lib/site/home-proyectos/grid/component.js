import React, { Component } from 'react'
import TopicCard from '../../proyectos/topic-card/component'
import indexOf from 'lodash.indexof'
import sortBy from 'lodash.sortby'

export default class TopicGrid extends Component {
  constructor (props) {
    super(props)
    this.barrios = [
      {
        'name': 'carapachay',
        'title': 'Carapachay'
      },
      {
        'name': 'florida-este',
        'title': 'Florida Este'
      },
      {
        'name': 'florida-oeste',
        'title': 'Florida Oeste'
      },
      {
        'name': 'la-lucila',
        'title': 'La Lucila'
      },
      {
        'name': 'olivos',
        'title': 'Olivos'
      },
      {
        'name': 'munro',
        'title': 'Munro'
      },
      {
        'name': 'vicente-lopez',
        'title': 'Vicente Lopez'
      },
      {
        'name': 'villa-adelina',
        'title': 'Villa Adelina'
      },
      {
        'name': 'villa-martelli',
        'title': 'Villa Martelli'
      }
    ]
    this.states = [
      'finalizado',
      'ejecucion',
      'compra',
      'preparacion',
      'factible',
      'no-ganador'
    ]
  }

  renderTopics = (barrio) => {
    const topicsFiltered = this.props.topics.filter((topic) => topic.attrs.barrio === barrio.name);
    const topicsSortByState = sortBy(topicsFiltered ,(topic) => { 
      return indexOf(this.states, topic.attrs.state);
    });
    return topicsSortByState.map((topic, i) => (
      <TopicCard key={i} topic={topic} forum={{ title: topic.attrs.barrio }} /> 
    ))
  }

  render () {
    return (
      <div className='topic-grid'>
        {this.barrios.map((barrio, i) => (
          this.props.topics.filter((topic) => topic.attrs.barrio === barrio.name).length > 0 &&
          <div className='barrio-wrapper' key={i}>
            <h2 className='barrio-title'>{barrio.title}</h2>
            <div className={`${this.props.topics.filter((topic) => topic.attrs.barrio === barrio.name).length  < 3 ? 'cards-container-shortItems' : 'cards-container'}` } >
              {this.renderTopics(barrio)}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
