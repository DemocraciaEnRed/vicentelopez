import React, { Component } from 'react'
import { Link } from 'react-router'
import bus from 'bus'
import t from 't-component'
import urlBuilder from 'lib/url-builder'
import config from 'lib/config'
import userConnector from 'lib/site/connectors/user'

export class UserBadge extends Component {
  static links = [
    config.frequentlyAskedQuestions
      ? { label: t('help.faq.title'), path: '/help/faq' }
      : false
  ].filter((p) => p)

  constructor (props) {
    super(props)

    this.state = {
      canChangeTopics: false
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
    let menuItemAdmin = null

    if (userAttrs.privileges && userAttrs.privileges.canManage) {
      menuItemAdmin = (
        <li>
          <Link to={urlBuilder.for('admin.topics', { forum: config.forumProyectos })}>
            {t('header.forums')}
          </Link>
        </li>
      )
    }

    const classes = ['header-item', 'user-badge', 'user-badge-helper']

    if (this.props.menuOn) classes.push('active')

    return (
      <div className={classes.join(' ')} onClick={this.props.toggleOnClick}>
        <button className='header-link'>
          <img src={userAttrs.avatar} alt='' />
        </button>
        <ul
          className='dropdown-list'>
          {menuItemAdmin}
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
