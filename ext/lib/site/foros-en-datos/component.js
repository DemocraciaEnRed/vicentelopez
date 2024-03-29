import React from 'react'
import { Link } from 'react-router'

const ForosEnDatos = () => (
  <section className='seccion-foros-datos'>
    <div className='fondo-titulo'>
      <h2 className='title'>El Presupuesto Participativo en datos</h2>
    </div>
    <div className='datos'>
      <p>El Presupuesto Participativo de Vicente López se implementa de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones del Presupuesto Participativo.</p>
      <figure className='graph-box'>
        <div className='graph-img'>
        <iframe 
                  src='https://flo.uri.sh/visualisation/13058014/embed' 
                  title='Interactive or visual content' 
                  className='flourish-embed-iframe iframe-bars'  
                  scrolling='no'  
                  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'/>
        </div>
        <figcaption>
          <p className='caption'>Evolución de participantes (porcentaje de la población de Vicente López) que han participado en el Presupuesto Participativo de Vicente López.</p>
        </figcaption>
      </figure>
      <div className='row'>
        <div className='cont-boton-azul'>
          <Link to='/s/datos' className='boton-azul'>
            Ver más datos
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default ForosEnDatos
