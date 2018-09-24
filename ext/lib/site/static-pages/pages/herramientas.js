import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import {Link} from 'react-router'
import PuntosDeVotacion from '../assets/puntos-de-votacion'

export default class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showTable: false
    }
  }

  componentDidMount () {
    this.goTop()
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    const { showTable } = this.state
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
            <div className='action-btns'>
              <button
                className='boton-azul'
                onClick={() => this.setState({ showTable: !showTable })}>
                <span>{ showTable ? String.fromCharCode(9650) : String.fromCharCode(9660) }</span>
                Ver tabla de lugares y horarios de votación
              </button>
              <div className="btns-descargas">
                <Link to='/s/documentos?archivo=boleta&anio=2018&barrio=vicente-lopez' className='boton-azul'>Descargar boletas 2018</Link>
              </div>
            </div>
            { showTable && <PuntosDeVotacion/> }
            <div className="fila no-bg">
              <div className="map-box">
                <div className='mapa'>
                  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1pMxGrUzA59m_9WlhXnkrs3YxUCAPZkoI" width="640" height="480"></iframe>
                </div>
              </div>
            </div>

            <img controls className='mapa-municipio' src='https://forosvecinales.blob.core.windows.net/assets/mapa_vicente-lopez.jpg' />
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}