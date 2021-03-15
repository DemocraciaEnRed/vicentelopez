import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import bus from 'bus'
import userConnector from 'lib/site/connectors/user'
import AnonUser from 'ext/lib/site/header/anon-user/component'
import ProyectosLink from 'ext/lib/site/header/proyectos-link'

class MobileMenu extends Component {
  componentWillMount () {
    document.addEventListener('click', this.handleClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClick, false)
  }

  handleClick = (e) => {
    if (!ReactDOM.findDOMNode(this).contains(e.target) && this.props.menuOn) {
      this.props.toggleOnClick()
    }
  }

  render () {
    return (
      <nav className='mobile-nav'>
        <a
          id='mobile-menu'
          className='mobile-menu'
          onClick={this.props.toggleOnClick} >
        </a>
        {
          this.props.menuOn && (
            <div
              id='mobile-menu-display'
              className='mobile-menu-display'>
              <ul>
                 <div className='header-item mobile-link'>
                  <Link
                    to='/s/acerca-de'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.props.toggleOnClick}>
                    Acerca de
                  </Link>
                </div> 
                <div className='header-item'>
                  <Link
                    to='/propuestas'
                    className={`header-link ${!~window.location.pathname.includes('propuesta') ? 'active' : ''}`}
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.props.toggleOnClick}>
                    Propuestas
                  </Link>
                </div>
                <div className='header-item mobile-link'>
                  <ProyectosLink />
                </div>
                <div className='header-item mobile-link'>
                  <Link
                    to='/s/datos'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.props.toggleOnClick}>
                    Datos
                  </Link>
                </div>
                {/* <div className='header-item mobile-link'>
                  <Link
                    to='/s/herramientas'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.props.toggleOnClick}>
                    Herramientas
                  </Link>
                </div> */}
                <div>
                  {this.props.user.state.rejected && (
                    <AnonUser form={this.props.form}
                      toggleOnClick={this.props.toggleOnClick} />
                  )}
                </div>
              </ul>
            </div>
          )
        }
      </nav>
    )
  }
}

export default userConnector(MobileMenu)
