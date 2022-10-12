import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import {Link} from 'react-router'
import PuntosDeVotacion from '../assets/puntos-de-votacion'
import forumStore from 'lib/stores/forum-store/forum-store'

export default class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showTable: false,
      forum: null
    }
  }

  componentDidMount () {
    this.goTop()
  }

  componentWillMount () {
    forumStore.findOneByName('proyectos').then((forum) => {
      if (forum.config.mostrarPuntosVotacion) {
        this.setState({ forum })
        return
      }
      window.location = '/'
    }).catch((err) => { console.log(err) })
  }

  goTop () {
    window.scrollTo(0,0)
  }

  render () {
    const { showTable, forum } = this.state
    return (
      <div>
        <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Cómo y cuándo votar</h1>
            </div>
          </div>
        </section>
        <div id='container'>
          <div className='ext-herramientas'>
            {/* <div className='action-btns'>
              {
                <button
                  className='boton-azul'
                  onClick={() => this.setState({ showTable: !showTable })}>
                  <span>{ showTable ? String.fromCharCode(9650) : String.fromCharCode(9660) }</span>
                  Ver tabla de lugares y horarios de votación
                </button>
              }
              {
                <div className='btns-descargas'>
                  <Link href='/s/documentos'>
                    <button className='boton-azul'>
                      Descargá aquí las boletas de votación de tu barrio
                    </button>
                  </Link>
                </div>
              }
            </div>
            { showTable && <PuntosDeVotacion/> } */}
            <div className='text-center documents'>
              <a className='btn btn-lg' href='https://celeste.blob.core.windows.net/pp-vicentelopez/assets/reglamento-pp-vicente-lopez-2022.pdf' target='_blank'>Reglamento</a>
              <a className='btn btn-lg' href='https://celeste.blob.core.windows.net/pp-vicentelopez/assets/como-votar-ppvl-2022.pdf' target='_blank'>Cómo votar</a>

            </div>
            <div className="fila no-bg">
              <div className="map-box">
                <div className='mapa'>
                  <iframe src="https://www.google.com/maps/d/embed?mid=1pMxGrUzA59m_9WlhXnkrs3YxUCAPZkoI&ehbc=2E312F"  width="640" height="480"></iframe>
                </div>
              </div>
            </div>

            <img className="flyer-pp" src='https://celeste.blob.core.windows.net/pp-vicentelopez/assets/flyer-reuniones-pp.png' alt="Flyer reuniones del presupuesto participativo VL"/>
            {/* <div className="fila no-bg">
              <div className="map-box">
                <div className='mapa'>
                  <iframe src="https://www.google.com/maps/d/embed?mid=1qhRpeylCuWIO7llVNSi5prF1JDBuI13b" width="640" height="480"></iframe>
                </div>
              </div>
            </div> */}

            {/* <img controls className='mapa-municipio' src='https://celeste.blob.core.windows.net/pp-vicentelopez/assets/mapa_vicente-lopez.jpg' /> */}
          </div>
        </div>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
