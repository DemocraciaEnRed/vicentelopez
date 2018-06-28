import React, { Component } from 'react'
import TopicCard from '../../proyectos/topic-card/component'

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
  }
  render () {
    return (
      <div className='topic-grid'>
        {this.barrios.map((barrio, i) => (
          this.props.topics.filter((topic) => topic.attrs.barrio === barrio.name).length > 0 &&
          <div className='barrio-wrapper' key={i}>
            <h2 className='barrio-title'>{barrio.title}</h2>
            <div className=
           {`${this.props.topics.filter((topic) => topic.attrs.barrio === barrio.name).length  < 3 ? 'cards-container-shortItems' : 'cards-container'}` } >
              {this.props.topics
                .filter((topic) => topic.attrs.barrio === barrio.name)
                .map((topic) => {
                  return <TopicCard key={topic.id} topic={topic} forum={{ title: topic.attrs.barrio }} />
                })
              }
            </div>
          </div>
        ))}
      </div>
    )
  }
}
