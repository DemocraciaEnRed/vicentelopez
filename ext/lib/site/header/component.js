import React, {Component} from 'react'
import {Link} from 'react-router'
import bus from 'bus'
import config from 'lib/config'
import userConnector from 'lib/site/connectors/user'
import UserBadge from 'lib/header/user-badge/component'
import AnonUser from 'lib/header/anon-user/component'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userForm: null,
      showToggleSidebar: null,
      showSidebar: null
    }
  }

  componentWillMount () {
    bus.on('user-form:load', this.onLoadUserForm)
    bus.on('sidebar:enable', this.showToggleSidebarChange)
    bus.on('sidebar:show', this.showSidebarChange)
  }

  componentWillUnmount () {
    bus.off('user-form:load', this.onLoadUserForm)
    bus.off('sidebar:enable', this.showToggleSidebarChange)
    bus.off('sidebar:show', this.showSidebarChange)
  }

  onLoadUserForm = (formName) => {
    this.setState({
      userForm: formName
    })
  }

  showToggleSidebarChange = (bool) => {
    this.setState({
      showToggleSidebar: bool
    })
  }

  showSidebarChange = (bool) => {
    this.setState({
      showSidebar: bool
    })
  }

  handleToggleSidebar = (evt) => {
    evt.preventDefault()
    bus.emit('sidebar:show', !this.state.showSidebar)
  }

  render () {
    const styles = {
      color: config.headerFontColor,
      backgroundColor: config.headerBackgroundColor
    }


    if (window.matchMedia("(max-width: 960px)").matches) {
      return (
        <nav className='navbar navbar-fixed-top navbar-vilo' style={styles}>
        {
          this.state.showToggleSidebar &&
          (
            <button
              id='toggleButton'
              onClick={this.handleToggleSidebar}>
              <span className='icon-menu' />
            </button>
          )
        }

        <Link
          to={config.homeLink}
          className='navbar-brand hidden-sm-up'>
          <img
            src={config.logoMobile}
            className='d-inline-block align-top'
            height='30' />
        </Link>
        <Link
          to={config.homeLink}
          className='navbar-brand hidden-xs-down'>
          <img
            src={config.logo}
            className='d-inline-block align-top'
            height='30' />
        </Link>

        <ul
          className='nav navbar-nav float-xs-right'>

          {this.props.user.state.fulfilled && (
            <li className='nav-item'>
              <Link
                to='/notifications'
                className='nav-link hidden-xs-down'>
                <span className='icon-bell' />
              </Link>
            </li>
          )}

          {this.props.user.state.fulfilled && (
            <UserBadge />
          )}

          {this.props.user.state.rejected && (
            <AnonUser form={this.state.userForm} />
          )}
        </ul>
      </nav>
      )
    } else {
      return (
        <nav className='navbar navbar-fixed-top navbar-vilo' style={styles}>
          {
            this.state.showToggleSidebar &&
            (
              <button
                id='toggleButton'
                onClick={this.handleToggleSidebar}>
                <span className='icon-menu' />
              </button>
            )
          }

          <Link
            to={config.homeLink}
            className='navbar-brand hidden-sm-up'>
            <img
              src={config.logoMobile}
              className='d-inline-block align-top'
              height='30' />
          </Link>
          <Link
            to={config.homeLink}
            className='navbar-brand hidden-xs-down'>
            <img
              src={config.logo}
              className='d-inline-block align-top'
              height='30' />
          </Link>

          <ul
            className='nav navbar-nav float-xs-right'>

              <div className="header-item">
                <Link
                  to='/s/acerca-de'
                  className='header-link'
                  activeStyle={{ color: '#8C1E81' }}>
                  Acerca de
                </Link>
              </div>
              <div className="header-item">
                <Link
                  to='/placeholder'
                  className='header-link'
                  activeStyle={{ color: '#8C1E81' }}>
                  Proyectos
                </Link>
              </div>
              <div className="header-item">
                <Link
                  to='/placeholder'
                  className='header-link'
                  activeStyle={{ color: '#8C1E81' }}>
                  Barrios
                </Link>
              </div>
              <div className="header-item">
                <Link
                  to='/s/datos'
                  className='header-link'
                  activeStyle={{ color: '#8C1E81' }}>
                  Datos
                </Link>
              </div>
              <div className="header-item">
                <Link
                  to='/placeholder'
                  className='header-link'
                  activeStyle={{ color: '#8C1E81' }}>
                  Prensa
                </Link>
              </div>

            {this.props.user.state.fulfilled && (
              <li className='nav-item'>
                <Link
                  to='/notifications'
                  className='nav-link hidden-xs-down'>
                  <span className='icon-bell' />
                </Link>
              </li>
            )}

            {this.props.user.state.fulfilled && (
              <UserBadge />
            )}

            {this.props.user.state.rejected && (
              <AnonUser form={this.state.userForm} />
            )}
          </ul>
        </nav>
    )  
    }   

    
  }
}

export default userConnector(Header)
