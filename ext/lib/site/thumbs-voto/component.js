import React from 'react'
import {Link} from 'react-router'

export default function ThumbsVoto (props) {

  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">
        <div className="row cont">
          <div className="subtitulo">
            <h2>
              Proponé ideas y soluciones para tu barrio.
            </h2>
            <Link
              to='/crear-anteproyecto'
              className="boton-azul">
              Mandá tu propuesta
            </Link>
          </div>
        </div>
        <div className="row cont">
          <div className="col-md-4">
            <div
              className="que-son img-responsive  ">
            </div>
            <h2
              className="text-center">
                ¿Qué Son?
            </h2>
            <p className="que-son-cont">
            Los Foros Vecinales son espacios de participación ciudadana donde los vecinos deciden en qué invertir parte del presupuesto municipal. Todos los años, y desde hace 6 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="como-voto img-responsive  ">
            </div>
            <h2 className="text-center">¿Cómo Voto?</h2>
            <p>
            Votar es muy fácil, si te acercás a las urnas te van a dar una boleta con los proyectos que podés encontrar en esta web. Marcás los proyectos que considerás prioritarios y listo. Los requisitos son vivir o trabajar en Vicente López y ser mayor de 16 años.
            </p>

          </div>

          <div className="col-md-4">
            <div
              className=" donde-voto img-responsive  ">
            </div>
            <h2 className="text-center">
              ¿Dónde Voto?
            </h2>
            <p className="donde-voto-cont">
            Encontrarás más de 100 urnas habilitadas para votar en los 9 barrios de Vicente López. La votación estará abierta desde el lunes 18 de septiembre hasta el domingo 1 de octubre de 2017.
              <Link to='/s/acerca-de#mapa'>
                Consultá todos los puntos de votación aquí.
              </Link>
            </p>
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
