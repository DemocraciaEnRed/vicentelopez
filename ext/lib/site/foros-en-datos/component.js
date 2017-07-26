import React from 'react'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'


export default function ForosEnDatos () {
  return (
      <section className='seccion-foros-datos'>
        <div className="fondo-titulo">
          <h2 className='title'>Los foros en datos</h2>
        </div>
        <div className="flexBox">
          <div className="graph-box">
          <CarruselAnios />
          </div>
        </div>
      </section>
  )
}
