import React, {Component} from 'react'
import {Link} from 'react-router'
import userConnector from 'lib/site/connectors/user'

class MobileMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOn: false
    }
  }

  toggleOnClick = () => {
    this.setState({menuOn: false})
  }

  render () {
    return (
      <nav className="mobile-nav">
        <a
          id="mobile-menu"
          className="mobile-menu"
          onClick={() => this.setState({menuOn: !this.state.menuOn})}>
          <i className ="mobile-menu-icon">☰</i>
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
                    onClick={toggleOnClick}>
                    Acerca de
                  </Link>
                </div>
                <div className="header-item mobile-link">
                  <Link
                    to='/placeholder'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={() => this.setState({menuOn: false})}>
                    Proyectos
                  </Link>
                </div>
                <div className="header-item mobile-link">
                  <Link
                    to='/s/datos'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={() => this.setState({menuOn: false})}>
                    Datos
                  </Link>
                </div>
                <div className="header-item mobile-link">
                  <Link
                    to='/placeholder'
                    className='header-link'
                    activeStyle={{ color: '#8C1E81' }}
                    onClick={() => this.setState({menuOn: false})}>
                    Prensa
                  </Link>
                </div>
                <div>
                  {this.props.user.state.rejected && (
                    <AnonUser form={this.props.userForm}
                    onClick={() => this.setState({menuOn: false})} />
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