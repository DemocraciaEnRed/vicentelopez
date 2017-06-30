import React from 'react'

export default function Footer (props) {

  return (
      <footer
        className='footer-static container'>
        <div className='row'>
          <div
            className='col-xs-6 col-md-6'>
            <h3>Contacto</h3>
            <p
              className='datos-contacto'>
                <span>Subsecretaría de Participación Ciudadana </span>
                <span>Interjurisdiccionales </span>
                <span>Juan B. Alberdi 830 </span>
                <span>CP1636, Olivos.</span>
                <span>(54.11) 4851-2000 Int. 203/207/208/209</span>
            </p>
          </div>
          <div
            className='col-xs-6 col-md-4 offset-md-2'>
            <div
              className='mapa img-responsive pull-right'>
            </div>
          </div>
        </div>

        <div
          className='row'>
          <div
            className='col-md-4 col-md-offset-4'>

          </div>
        </div>

        <div
          className='row'>
          <div
            className='col-xs-5 col-md-4 social-icon'>
            <div
              className='social-facebook'>
            </div>
            <div
              className='social-twitter'>
            </div>
            <div
              className='social-mail'>
            </div>
          </div>
          <div
              className='col-xs-6 col-md-4 offset-md-4 logo'>

          </div>

        </div>



          <div
            className='row'>
            <div
              className='col-xs-6 col-md-4'>


                <p>TÉRMINOS Y CONDICIONES</p>
            </div>

          </div>




      </footer>
  )
}
