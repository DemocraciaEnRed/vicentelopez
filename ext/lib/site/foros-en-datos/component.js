import React from 'react'
import { Link } from 'react-router'

const ForosEnDatos = () => (
  <section className='seccion-foros-datos'>
    <div className='fondo-titulo'>
      <h2 className='title'>Los foros en datos</h2>
    </div>
    <div className='datos'>
      <p>El Presupuesto Participativo de Vicente López se implementa de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de los Foros Vecinales.</p>
      <figure className='graph-box'>
        <div className='graph-img'>
          <img src='/ext/lib/site/static-pages/evolucion-participacion1.svg' alt='' />
        </div>
        <figcaption>
          <p className='caption'>Evolución de ciudadanos (porcentaje de la población de Vicente López) que han participado en los foros vecinales de Vicente López.</p>
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
