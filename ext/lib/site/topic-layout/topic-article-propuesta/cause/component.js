import React, { Component } from 'react'
import t from 't-component'
import { Link, browserHistory } from 'react-router'
import topicStore from 'lib/stores/topic-store/topic-store'
import userConnector from 'lib/site/connectors/user'

export class Cause extends Component {
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
    const { topic } = props

    return this.setState({
      showLoginMessage: false,
      showResults: topic.closed || !!topic.voted,
      supported: !!topic.voted
    })
  }

  handleSupport = (e) => {
    if (this.state.showResults) return

    if (!this.props.user.state.fulfilled) {
      return browserHistory.push({
        pathname: '/signin',
        query: { ref: window.location.pathname }
      })
    }

    topicStore.vote(this.props.topic.id, 'support')
      .catch((err) => { throw err })
  }

  render () {
    const { user, topic } = this.props

    if (user.state.pending) return null

    const { supported, showResults } = this.state
    if (user.state.fulfilled && !topic.privileges.canVote) return null
    return (
      <div className='topics-cause-propuesta'>
        {supported && (
          <button
            className='btn btn-primary'
            disabled='true'>
            &nbsp;
            Te gusta
          </button>
        )}
        {!showResults && (
          <button
            disabled={!topic.privileges.canVote}
            className='btn btn-primary'
            onClick={this.handleSupport}>
            &nbsp;
            Me gusta
          </button>
        )}
        <div className='likes-total'>
          {topic.action.count}
          &nbsp;
          <span className='icon-like' />
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

export default userConnector(Cause)

const LoginMessage = () => (
  <div className='alert alert-info' role='alert'>
    <span className='icon-heart' />{' '}
    {t('proposal-options.must-be-signed-in')}.{' '}
    <Link
      to={{
        pathname: '/signin',
        query: { ref: window.location.pathname }
      }}>
      {t('signin.login')}
    </Link>
    {' '}{t('common.or')}{' '}
    <Link
      to={{
        pathname: '/signup',
        query: { ref: window.location.pathname }
      }}>
      {t('signin.signup')}
    </Link>
  </div>
)
