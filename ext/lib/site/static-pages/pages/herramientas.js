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
                Si tenés dudas de cómo utilizar la plataforma de foros vecinales, descargá este instructivo con capturas paso a paso de cómo usarla.
              </p>
              <img className='thumb-instructivo' src='/ext/lib/site/static-pages/ThumbInstructivo.jpg' alt='Instructivo'/>
                <div className="btns-descargas">
                  <a target='_blank' href='https://cloudup.com/cQDssht_3L9' className='boton-azul'>Instructivo</a>
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