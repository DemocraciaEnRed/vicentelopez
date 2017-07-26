import React from 'react'
import {Link} from 'react-router'


export default function Footer (props) {

  return (
    <footer className='footer-static'>
      <div className="container">
        <div className='contacto-detalles'>
          <h3>CONTACTO</h3>
          <p>
            <span>Subsecretaría de Participación Ciudadana</span>
            <span>Secretaría de Gobierno y Asuntos Interjurisdiccionales</span>
            <span>Juan B. Alberdi 830 </span>
            <span>CP1636, Olivos.</span>
            <span>(54.11) 4851-2000 Int. 203/207/208/209</span>
          </p>
        </div>
        <div className='mapa-box'>
          <div className='mapa'></div>
        </div>
        <div className='social-icon'>
          <a className='social-facebook' href="#"></a>
          <a className='social-twitter' href="#"></a>
          <a className='social-mail' href="#"></a>
        </div>
        <div className='logo'>
          <a href="http://www.vicentelopez.gov.ar/"></a>
          </div>
        <div className='terminos'>
          <Link to='/s/terminos-y-condiciones'> Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  )
}
