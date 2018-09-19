import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import {Link} from 'react-router'

export default class Page extends Component {
  componentDidMount () {
    this.goTop()
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
            <div className='instructivo'>
              <img controls className='video-instructivo' src='https://forosvecinales.blob.core.windows.net/assets/mapa_vicente-lopez.jpg' />
              <div className="btns-descargas">
                <Link to='/s/documentos?archivo=boleta&anio=2018&barrio=vicente-lopez' className='boton-azul'>Descargar boletas 2018</Link>
              </div>
            </div>
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}