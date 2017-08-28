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
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3287.7955547382676!2d-58.483951!3d-34.508067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb14018ac8413%3A0x50b76f9f4f319407!2sJuan+Bautista+Alberdi+830%2C+Olivos%2C+Buenos+Aires%2C+Argentina!5e0!3m2!1ses!2sar!4v1501270118288" frameBorder="0"  allowFullScreen></iframe>
          </div>
        </div>
        <div className='social-icon'>
          <a className='social-facebook' href="https://www.facebook.com/VivamosVL/"></a>
          <a className='social-twitter' href="https://twitter.com/vivamosvl"></a>
          <a className='social-mail' href="mailto:participacion.ciudadana@vicentelopez.gov.ar"></a>
        </div>
        <div className='logo'>
          <a href="http://www.vicentelopez.gov.ar/"></a>
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
}
