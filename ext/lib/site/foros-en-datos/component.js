import React from 'react'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'
import {Link} from 'react-router'



export default function ForosEnDatos () {
  return (
      <section className='seccion-foros-datos container'>
        <h2 className='title'>Los foros en datos</h2>
        <h3>Distribución de proyectos por tipo</h3>
        <div className="flexBox">
          <div className="graph-box">
          <CarruselAnios />
          </div>
        </div>
        <div className='cont-boton-azul'>
            <Link to='/s/datos' className="boton-azul">
                Ver más datos
            </Link>
        </div>
      </section>
  )
}
