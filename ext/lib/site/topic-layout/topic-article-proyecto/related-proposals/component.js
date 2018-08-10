import React, { Component } from 'react'

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
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }

  render () {
    return (
      <div>
        {this.props.id}
      </div>
    )
  }
}