import React, {Component} from 'react'
import {Link} from 'react-router'
import bus from 'bus'
import userConnector from 'lib/site/connectors/user'
import AnonUser from 'ext/lib/site/header/anon-user/component'

class MobileMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOn: false
    }
  }

  toggleOnClick = () => {
    this.setState({menuOn: !this.state.menuOn})
  }

  render () {
    return (
      <nav className="mobile-nav">
        <a
          id="mobile-menu"
          className="mobile-menu"
          onClick={this.toggleOnClick}>
        </a>
        {
          this.state.menuOn && (
            <div
            id="mobile-menu-display"
            className="mobile-menu-display">
              <ul>
                <div className="header-item mobile-link">
                  <Link
                    to='/s/acerca-de'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.toggleOnClick}>
                    Acerca de
                  </Link>
                </div>
                <div className="header-item mobile-link">
                  <Link
                    to='/proyectos'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.toggleOnClick}>
                    Proyectos
                  </Link>
                </div>
                <div className="header-item mobile-link">
                  <Link
                    to='/s/datos'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.toggleOnClick}>
                    Datos
                  </Link>
                </div>
                <div className="header-item mobile-link">
                  <Link
                    to='s/herramientas'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={this.toggleOnClick}>
                    Herramientas
                  </Link>
                </div>
                <div>
                  {this.props.user.state.rejected && (
                    <AnonUser form={this.props.form}
                    toggleOnClick={this.toggleOnClick} />
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
