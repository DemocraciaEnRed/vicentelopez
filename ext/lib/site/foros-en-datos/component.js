import React from 'react'
import {Link} from 'react-router'

export default function ForosEnDatos () {
  return (
    <section className='seccion-foros-datos'>
      <div className="fondo-titulo">
        <h2 className='title'>Los foros en datos</h2>
      </div>
      <div className="flexBox">
        <p>El Presupuesto Participativo de Vicente López se implementa de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de los Foros Vecinales.</p>
        <figure className="graph-box">
        {
          window.matchMedia("(min-width: 550px)").matches ?
          (
            <iframe src="//e.infogram.com/0e934508-19f4-4faa-a5b9-5ab8ce664e72?src=embed" title="Distribución de proyectos por área temática por año" width="550" height="594" scrolling="no" frameBorder="0">
            </iframe>
          ) : (
            <iframe src="//e.infogram.com/0e934508-19f4-4faa-a5b9-5ab8ce664e72?src=embed" title="Distribución de proyectos por área temática por año" width="360" height="594" scrolling="no" frameBorder="0">
            </iframe>
          )
        }
        </figure>
        <div className='row'>
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
