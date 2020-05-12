import React, { Component } from 'react'
import { Link } from 'react-router'
import bus from 'bus'
import t from 't-component'
import urlBuilder from 'lib/url-builder'
import config from 'lib/config'
import userConnector from 'lib/site/connectors/user'
import forumStore from 'lib/stores/forum-store/forum-store'

export class UserBadge extends Component {
  static links = [
    config.frequentlyAskedQuestions
      ? { label: t('help.faq.title'), path: '/help/faq' }
      : false
  ].filter((p) => p)

  constructor (props) {
    super(props)

    this.state = {
      canChangeTopics: false,
      forumProyectos: null
    }
  }

  componentDidMount () {
    bus.on('forum:change', this.setChangeTopicsPermission)
  }

  componentWillUnmount () {
    bus.off('forum:change', this.setChangeTopicsPermission)
  }

  setChangeTopicsPermission = (forum) => {
    this.setState({
      canChangeTopics: (forum && forum.privileges.canChangeTopics)
    })
  }

  render () {
    const userAttrs = this.props.user.state.value

    /*let menuItemAdmin = null
    let forumProyectos = this.state.forumProyectos
    if (forumProyectos && forumProyectos.privileges && forumProyectos.privileges.canChangeTopics) {
      menuItemAdmin = (
        <li>
          <Link to={urlBuilder.for('admin.topics', { forum: config.forumProyectos })}>
            {t('header.forums')}
          </Link>
        </li>
      )
    }*/

    const classes = ['header-item', 'user-badge', 'user-badge-helper']

    if (this.props.menuOn) classes.push('active')

    return (
      <div className={classes.join(' ')} onClick={this.props.toggleOnClick}>
        <button className='header-link'>
          <img src={userAttrs.avatar} alt='' />
          {userAttrs.firstName}
          <span className="glyphicon glyphicon-triangle-bottom"></span>
        </button>
        <ul
          className='dropdown-list'>
          <li>
            <Link to={urlBuilder.for('settings')}>
              {t('header.settings')}
            </Link>
          </li>
          {UserBadge.links.map((link, i) => (
            <li key={`link-${i}`}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
          <li>
            <a onClick={this.props.user.logout}>
              {t('header.logout')}
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default userConnector(UserBadge)
