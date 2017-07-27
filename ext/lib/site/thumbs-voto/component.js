import React from 'react'
import {Link} from 'react-router'

export default function ThumbsVoto (props) {

  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">

        <div className="row cont">
          <div className="col-md-4">
            <div
              className="que-son img-responsive  ">
            </div>
            <h2
              className="text-center">
                ¿Qué Son?
            </h2>
            <p className="que-son-cont">Son espacios de participación ciudadana donde los vecinos deciden en que invertir parte del presupuesto municipal. Todos los años desde hace 5 años se asigna y comunica una partida por barrio para la ejecución de estos proyectos.</p>
          </div>

          <div className="col-md-4">
            <div
              className="como-voto img-responsive  ">
            </div>
            <h2 className="text-center">¿Cómo Voto?</h2>
            <p>Cualquier mayor de 16 años que viva o trabaje en vicente lopez podrá votar desde el XXX hasta el XXX en todas las urnas habilitadas</p>

          </div>

          <div className="col-md-4">
            <div
              className=" donde-voto img-responsive  ">
            </div>
            <h2 className="text-center">
              ¿Donde Voto?
            </h2>
            <p className="donde-voto-cont">Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente Lopez: Munro , Florida Oeste , Carapachay, La Lucila, Olivos , Villa Martilli, Florida Este, Vicente Lopez y Villa Adelina.</p>

          </div>


        </div>

        <div
          className='row'>
            <div className='cont-boton-azul'>
                <Link to='/s/acerca-de' className="boton-azul">
                    Más información
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
