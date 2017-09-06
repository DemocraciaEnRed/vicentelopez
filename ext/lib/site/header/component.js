import React, {Component} from 'react'
import {Link} from 'react-router'
import bus from 'bus'
import config from 'lib/config'
import userConnector from 'lib/site/connectors/user'
import UserBadge from 'ext/lib/site/header/user-badge/component'
import MobileMenu from 'ext/lib/site/header/mobile-menu/component'
import AnonUser from 'ext/lib/site/header/anon-user/component'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userForm: null
    }
  }

  componentWillMount () {
    bus.on('user-form:load', this.onLoadUserForm)
  }

  componentWillUnmount () {
    bus.off('user-form:load', this.onLoadUserForm)
  }

  onLoadUserForm = (formName) => {
    this.setState({
      userForm: formName
    })
  }

  render () {
    const styles = {
      color: config.headerFontColor,
      backgroundColor: config.headerBackgroundColor
    }

    // MEDIA QUERY - Si es menor al breakpoint muestra un menú, si es mayor, otro

    if (window.matchMedia("(max-width: 975px)").matches) {
      return (
        <nav className='navbar navbar-fixed-top navbar-vilo' style={styles}>

        <Link
          to={config.homeLink}
          className='navbar-brand'>
          <img
            src='/ext/lib/site/header/mobile-menu/mobile-logo.svg'
            className='d-inline-block align-top'
            height='30' />
        </Link>

        <ul
          className='nav navbar-nav nav-mobile'>

          {this.props.user.state.fulfilled && (
              <li className='nav-item'>
                <Link
                  to='/notifications'
                  className='nav-link'>
                  <span className='icon-bell' />
                </Link>
              </li>
          )}

          {this.props.user.state.fulfilled && (
            <UserBadge />
          )}

          <MobileMenu form={this.state.userForm} />

        </ul>
      </nav>
      )
    } else {
      return (
        <nav className='navbar navbar-fixed-top navbar-vilo' style={styles}>

          <Link
            to={config.homeLink}
            className='navbar-brand'>
            <img
              src={config.logo}
              className='d-inline-block align-top'
              height='30' />
          </Link>

          <ul className='nav navbar-nav'>

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
                  to='/proyectos'
                  className='header-link'
                  activeStyle={{ color: '#8C1E81' }}>
                  Proyectos
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
                  to='/s/herramientas'
                  className='header-link'
                  activeStyle={{ color: '#8C1E81' }}>
                  Herramientas
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
