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
              <p>
                Si tenés dudas de cómo utilizar la plataforma de foros vecinales, podés seguir el instructivo en video o descargarlo en pdf.
              </p>
              <video controls className='video-instructivo'>
                <source src="https://cldup.com/puxr4wF2a7.mp4" type="video/mp4" />
              </video>
              <div className="btns-descargas">
                <a target='_blank' href='https://cloudup.com/cQDssht_3L9' className='boton-azul'>Descargar instructivo en PDF</a>
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