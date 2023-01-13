import React, { Component } from 'react'
import { Link } from 'react-router'
import textStore from 'lib/stores/text-store'


class Footer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      texts: {}
    }
  }

  componentDidMount () {
    textStore.findAllDict().then((textsDict) => {
      this.setState({
        texts: textsDict
      })
    }).catch((err) => {
      this.state = {
        texts: {}
      }
    }
    )
   
  }
  
  render () {
    const { texts } = this.state

    return(
    <footer className='footer-static'>
      <div className='container'>
        <div className='contacto-detalles'>
          <h3>CONTACTO</h3>
          <p>
            <span>Subsecretaría de Participación Ciudadana</span>
            <span>Secretaría de Gobierno y Legal y Técnica</span>
            <span>D. de Acassuso 1750</span>
            <span>CP1636, Olivos.</span>
            <span>Tel: 4851-2000 interno 203</span>
            <span>WhatsApp para consultas: +5491162426741</span>
            <span>Mail: participacion.ciudadana@vicentelopez.gov.ar</span>
          </p>
        </div>
        <div className='mapa-box'>
          <div>
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.856104315487!2d-58.49609055954085!3d-34.50653212820279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb117412a3aa9%3A0x5e58f5edeb71c832!2sDomingo+de+Acassuso+1750%2C+B1636ESF+Olivos%2C+Buenos+Aires!5e0!3m2!1ses!2sar!4v1552391953934" frameBorder="0" allowFullScreen/>
          </div>
        </div>
        <div className='social-icon'>
          <a className='social-facebook' href='https://www.facebook.com/PresupuestoParticipativoVicenteLopez/ ' target="_blank"/>
          <a className='social-instagram' href='https://www.instagram.com/presupuestoparticipativo_vl/' target="_blank" />
          <a className='social-mail' href='mailto:participacion.ciudadana@vicentelopez.gov.ar' target="_blank"/>
        </div>
        <div className='logo'>
          <a href='http://www.vicentelopez.gov.ar/' />
        </div>
        <div className='terminos'>
          {texts['info-TyC-pdf'] ? <a  href={texts['info-TyC-pdf']} target='_blank'> Términos y condiciones </a>
                                 : <Link to='/s/terminos-y-condiciones'> Términos y condiciones </Link>}
        </div>
        <div className='terminos'>
          {texts['info-PPYUD-pdf'] ? <a  href={texts['info-PPYUD-pdf']} target='_blank'> Términos y condiciones </a>
                                 : <Link to='/s/politica-datos'> Politica de Privacidad y Uso de Datos </Link>}
        </div>
      </div>
    </footer>
  )
}
}

export default Footer
