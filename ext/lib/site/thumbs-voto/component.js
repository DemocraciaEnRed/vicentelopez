import React from 'react'
import { Link } from 'react-router'

export default function ThumbsVoto (props) {
  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">
        <div className="row cont fondo-azul">
          <div className="subtitulo">
            <h2>
              Resultados de la votación de proyectos 2019
            </h2>
            <h3>¡Estamos haciendo el recuento de votos!</h3>
            <p>
              MARTES 9 DE OCTUBRE: recuento de votos de Villa Adelina - Olivos - La Lucila
              <br />
              MIÉRCOLES 10 DE OCTUBRE: recuento de votos de Carapachay - Vicente López - Munro
              <br />
              JUEVES 11 DE OCTUBRE: recuento de votos de Villa Martelli - Florida Este - Florida Oeste
              <br /><br />
              Los resultados definitivos de la votación estarán disponibles A PARTIR DEL LUNES 22 DE OCTUBRE
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
            Los Foros Vecinales son espacios de participación ciudadana donde los vecinos deciden en qué invertir parte del presupuesto municipal. Todos los años, y desde hace 7 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="como-voto img-responsive  ">
            </div>
            <h2 className="text-center">¿Cómo voto?</h2>
            <p>
            Cualquier mayor de 16 años que viva o trabaje en Vicente López puede votar. Es muy fácil, te acercás a los puntos de votación, completás tus datos, marcás los 3 proyectos que considerás prioritarios para tu barrio y listo.
            </p>

          </div>

          <div className="col-md-4">
            <div
              className=" donde-voto img-responsive  ">
            </div>
            <h2 className="text-center">
              ¿Dónde voto?
            </h2>
            <p className="donde-voto-cont">
            La votación estará abierta desde el lunes 24 de septiembre hasta el domingo 7 de octubre de 2018. Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente López: Munro, Florida Oeste, Carapachay, La Lucila, Olivos, Villa Martelli, Florida Este, Vicente López y Villa Adelina.
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
