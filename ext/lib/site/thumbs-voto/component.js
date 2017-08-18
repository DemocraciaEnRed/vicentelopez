import React from 'react'
import {Link} from 'react-router'

export default function ThumbsVoto (props) {

  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">
        <div className="row cont">
          <div className="subtitulo">
            <h2>Presupuesto Participativo 2017</h2>
              <p>
                Gracias a vos recibimos más de 350 proyectos, vamos a votar y decidir juntos cómo
                invertir $65 millones de pesos.
              </p>
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
            Los Foros Vecinales son espacios de participación ciudadana donde los vecinos deciden en qué invertir parte del presupuesto municipal. Todos los años, y desde hace 5 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="como-voto img-responsive  ">
            </div>
            <h2 className="text-center">¿Cómo Voto?</h2>
            <p>
            Votar es muy fácil, si te acercas a las urnas te van a dar una boleta con los proyectos que podes encontrar en esta web. Marcás los proyectos que considerás prioritarios y listo. Los requisitos son vivir o trabajar en Vicente López y ser mayor de 16 años.
            </p>

          </div>

          <div className="col-md-4">
            <div
              className=" donde-voto img-responsive  ">
            </div>
            <h2 className="text-center">
              ¿Donde Voto?
            </h2>
            <p className="donde-voto-cont">
            Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente López. La votación estará abierta desde el lunes 18 de septiembre hasta el domingo 1 de octubre de 2017, de lunes a viernes entre las 8:30hs a 16hs. También instalaremos urnas móviles en cada uno de los barrios.
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
