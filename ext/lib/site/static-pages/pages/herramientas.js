import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import {Link} from 'react-router'

export default class Page extends Component {
  componentDidMount () {
  Anchor.goTo('container')
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div>
        <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Herramientas</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-herramientas'>
            <Link to='#' className="boton-azul">
              Descargas
            </Link>
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}