import React, { Component } from 'react'
import { Link } from 'react-router'
import bus from 'bus'
import config from 'lib/config'
import userConnector from 'lib/site/connectors/user'
import UserBadge from 'ext/lib/site/header/user-badge/component'
import MobileMenu from 'ext/lib/site/header/mobile-menu/component'
import AnonUser from 'ext/lib/site/header/anon-user/component'
import ProyectosLink from 'ext/lib/site/header/proyectos-link'
import forumStore from 'lib/stores/forum-store/forum-store'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userForm: null,
      mobileMenu: false,
      userMenu: false,
      userPrivileges: null
    }

    props.user.onChange(this.onUserStateChange)
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

  toggleMobileMenu = () => {
    if (this.state.userMenu) {
      this.setState({
        mobileMenu: !this.state.mobileMenu,
        userMenu: false
      })
    } else {
      this.setState({
        mobileMenu: !this.state.mobileMenu
      })
    }
  }

  toggleUserMenu = (ev, evFromDocument) => {
    if (this.state.mobileMenu) {
      this.setState({
        mobileMenu: false,
        userMenu: !this.state.userMenu
      })
    } else {
      this.setState({ userMenu: !this.state.userMenu })
    }

    // fix bug que el menú queda abierto siempre; con esto al clickear afuera se cierra
    if (!evFromDocument && !this.state.userMenu){
      let fun = this.toggleUserMenu
      let listener = () => {
        fun(null, true)
        document.removeEventListener('click', listener)
      }
      document.addEventListener('click', listener)
    }
  }

  onUserStateChange = () => {
    if (this.props.user.state.fulfilled){
      forumStore.findOneByName(config.forumProyectos).then(
        forum => this.setState({ userPrivileges: forum.privileges })
      )
    }
  }

  render () {
    const styles = {
      color: config.headerFontColor,
      backgroundColor: config.headerBackgroundColor
    }
    const showAdmin = this.state.userPrivileges && this.state.userPrivileges.canChangeTopics
    // MEDIA QUERY - Si es menor al breakpoint muestra un menú, si es mayor, otro
    if (window.matchMedia('(max-width: 975px)').matches) {
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

          <ul
            className='nav navbar-nav nav-mobile'>

            {/*this.props.user.state.fulfilled && (
              <li className='nav-item'>
                <Link
                  to='/notifications'
                  className='nav-link'>
                  <span className='icon-bell' />
                </Link>
              </li>
            )*/}

            {this.props.user.state.fulfilled && (
              <UserBadge
                menuOn={this.state.userMenu}
                toggleOnClick={this.toggleUserMenu} />
            )}

            <MobileMenu
              form={this.state.userForm}
              menuOn={this.state.mobileMenu}
              toggleOnClick={this.toggleMobileMenu} />

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
            />
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
                to='/propuestas'
                className={`header-link ${window.location.pathname.includes('propuesta') ? 'active' : ''}`}
                activeStyle={{ color: '#8C1E81' }}>
                  Propuestas
              </Link>
            </div>
            <div className="header-item">
              <ProyectosLink />
            </div>
            <div className="header-item">
              <Link
                to='/s/datos'
                className='header-link'
                activeStyle={{ color: '#8C1E81' }}>
                  Datos
              </Link>
            </div>
            { showAdmin &&
              <div className="header-item">
                <Link
                  to='/proyectos/admin/topics'
                  className={`header-link ${window.location.pathname.includes('/admin') ? 'active' : ''}`}
                  activeStyle={{ color: '#8C1E81' }}>
                    Admin
                </Link>
              </div>
            }
            {/*<div className="header-item">
              <Link
                to='/s/herramientas'
                className='header-link'
                activeStyle={{ color: '#8C1E81' }}>
                  Herramientas
              </Link>
            </div>*/}

            {/*this.props.user.state.fulfilled && (
              <li className='nav-item'>
                <Link
                  to='/notifications'
                  className='nav-link hidden-xs-down'>
                  <span className='icon-bell' />
                </Link>
              </li>
            )*/}

            {this.props.user.state.fulfilled && (
              <UserBadge
                menuOn={this.state.userMenu}
                toggleOnClick={this.toggleUserMenu} />
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
