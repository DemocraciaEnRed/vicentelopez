import React, { Component } from 'react'
import t from 't-component'
import { Link, browserHistory } from 'react-router'
import userConnector from 'lib/site/connectors/user'

export class Subscribe extends Component {
  state = {
    showResults: false,
    showLoginMessage: false,
    results: null
  }

  componentWillMount () {
    this.setStateFromProps(this.props)
  }

  componentWillReceiveProps (props) {
    this.setStateFromProps(props)
  }

  setStateFromProps (props) {
    const { topic, user } = props
    const userId = user.state.value.id;
    const userSuscribed = topic.attrs.subscribers.find( user => user === userId );
 
    return this.setState({
      showLoginMessage: false,
      showResults: topic.closed, 
      subscribed: !!userSuscribed
    })
  }

  handleSubscribe = (e) => {
    if (this.state.showResults) return

    if (!this.props.user.state.fulfilled) {
      return browserHistory.push({
        pathname: '/signin',
        query: { ref: window.location.pathname }
      })
    }
    // WIP
      const subscribeURL =`/ext/api/topics/${this.props.topic.id}/subscribe` // TO DO CONFIRM URL
      window.fetch(subscribeURL, {
        credentials: 'include',
        method: 'POST',
        body: {
          userID: this.props.user.state.value.id
        }
      }).then((res) => {
        //set state for reloading data
      }).catch((err) => { throw err })
  }

  render () {
    const { user, topic } = this.props

    if (user.state.pending) return null

    const { subscribed, showResults } = this.state
    if (user.state.fulfilled && !topic.privileges.canVote) return null
    return (
      <div className='topics-subscribe-propuesta'>
        {subscribed && (
          <button
            className='btn btn-primary'
            onClick={this.handleSubscribe}>
            &nbsp;
            Desuscribirse
          </button>
        )}
        {!showResults && !subscribed && (
          <button
            disabled={!topic.privileges.canVote}
            className='btn btn-primary'
            onClick={this.handleSubscribe}>
            &nbsp;
            Suscribirse
          </button>
        )}
        
        <div className='subscribers-total'>
          {topic.attrs.subscribers.length}
          &nbsp;
          <span className='icon-bell' />
        </div>
        
        {user.state.fulfilled && !topic.privileges.canVote && (
          <p className='text-mute overlay-vote'>
            <span className='icon-lock' />
            <span className='text'>
              
            </span>
          </p>
        )}
      </div>
    )
  }
}

export default userConnector(Subscribe)
