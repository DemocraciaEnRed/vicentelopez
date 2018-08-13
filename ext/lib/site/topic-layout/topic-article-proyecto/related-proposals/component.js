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
      .then((res) => this.setState({ relatedProposals: res.results.topics }, () => console.log(this.state.relatedProposals)))
      .catch((err) => console.error(err))
  }

  render () {
    return (
      <div className='alert alert-success alert-proyecto' role='alert'>
        Podés ver la propuesta original <Link to={`/propuestas/topic/${this.props.id}`} className='alert-link'>aquí</Link>.
      </div>
    )
  }
}