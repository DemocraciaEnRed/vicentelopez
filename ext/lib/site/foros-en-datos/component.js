import React from 'react'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'
import {Link} from 'react-router'

export default function ForosEnDatos () {
  return (
      <section className='seccion-foros-datos'>
        <div className="fondo-titulo">
          <h2 className='title'>Los foros en datos</h2>
        </div>
        <div className="flexBox">
          <p>El presupuesto participativo de Vicente López se viene haciendo de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de Foros Vecinales.</p>
          <div className="graph-box">
            <CarruselAnios />
          </div>
          <div
            className='row'>
              <div className='cont-boton-azul'>
                  <Link to='/s/datos' className="boton-azul">
                      Ver más datos
                  </Link>
              </div>
          </div>
        </div>
      </section>
  )
}
