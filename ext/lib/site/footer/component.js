import React from 'react'

export default function Footer (props) {

  return (
      <footer
        className='footer-static container'>
        <div className='row'>
          <div
            className='col-xs-6 col-md-6'>
            <h3>CONTACTO</h3>
            <p
              className='datos-contacto'>
                <span>Subsecretaría de Participación Ciudadana</span>
                <span>Secretaría de Gobierno y Asuntos Interjurisdiccionales</span>
                <span>Juan B. Alberdi 830 </span>
                <span>CP1636, Olivos.</span>
                <span>(54.11) 4851-2000 Int. 203/207/208/209</span>
            </p>
          </div>
          <div
            className='col-xs-6 col-md-4 offset-md-2'>
            <div
              className='mapa'>
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
              className='col-xs-6 col-md-6 social-icon'>
                <div
                  className='social-facebook'>
                </div>
                <div
                  className='social-twitter'>
                </div>
                <div
                  className='social-mail'>
                </div>

                <div
                  className='terminos'>
                    <p>TÉRMINOS Y CONDICIONES</p>
                </div>

            </div>
            <div
              className='col-xs-6 col-sm-6 col-md-4 offset-md-2'>
                <div className='logo'> </div>

            </div>

        </div>

      </footer>
  )
}
