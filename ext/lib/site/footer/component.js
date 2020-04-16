import React from 'react'
import { Link } from 'react-router'

const Footer = () => (
  <footer className='footer-static'>
    <div className='container'>
      <div className='contacto-detalles'>
        <h3>CONTACTO</h3>
        <p>
          <span>Subsecretaría de Participación Ciudadana</span>
          <span>Secretaría de Gobierno y Legal y Técnica</span>
          <span>D. de Acassuso 1750</span>
          <span>CP1636, Olivos.</span>
          <span>WhatsApp para consultas: +5491162426741</span>
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
        <Link to='/s/terminos-y-condiciones'> Términos y condiciones
        </Link>
        <Link to='/s/reglamento'> Reglamento
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
