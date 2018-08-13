import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      relatedProposals: null
    }
  }

  componentDidMount () {
    window.fetch(`/ext/api/topics?forumName=proyectos&related=${this.props.id}&state=integrado`, {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.results.topics.length > 0) {
          this.setState({
            relatedProposals: res.results.topics
          })
        }
      })
      .catch((err) => console.error(err))
  }

  render () {
    return (
      <div className='alert alert-success alert-proyecto' role='alert'>
        Podés ver la propuesta original <Link to={`/propuestas/topic/${this.props.id}`} className='alert-link'>aquí</Link>.
        {this.state.relatedProposals &&
          <p>{`Podés ver ${this.state.relatedProposals.length > 1 ? 'las propuestas que fueron integradas' : 'la propuesta que fue integrada'} en este proyecto `}
            {this.state.relatedProposals.map((p, i) => (
              <Link to={`/propuestas/topic/${p.id}`} className='alert-link' key={i}>{i === this.state.relatedProposals.length - 1 ? 'aquí' : 'aquí, ' }</Link>
            ))}
            {'.'}
          </p>
        }
      </div>
    )
  }
}
