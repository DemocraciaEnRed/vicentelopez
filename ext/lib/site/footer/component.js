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
          <div>
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.80690130259!2d-58.4867401486855!3d-34.50777938038877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb14018ac8413%3A0x50b76f9f4f319407!2sJuan+Bautista+Alberdi+830%2C+Olivos%2C+Buenos+Aires!5e0!3m2!1sen!2sar!4v1501095308553"  frameBorder="0"  allowFullScreen></iframe>
          </div>
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
