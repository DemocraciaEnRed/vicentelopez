import React from 'react'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'


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
      </section>
  )
}
