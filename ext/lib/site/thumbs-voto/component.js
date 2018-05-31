import React from 'react'
import { Link } from 'react-router'

export default function ThumbsVoto (props) {
  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">
        <div className="row cont fondo-azul">
          <div className="subtitulo">
            <h2>
              Presupuesto Participativo 2018
            </h2>
            <h3>Gracias a la participación de vecinos e instituciones, recibimos 375 propuestas para los 9 barrios de Vicente López. Durante junio y julio analizaremos cuáles de ellas son posibles de realizar. En agosto, les informaremos cuáles de ellas participarán de la votación que se realizará entre el 24 de septiembre y el 7 de octubre de este año.</h3>
            <Link
              to='/propuestas'
              className="boton-azul boton-blanco">
              Mirá todas las propuestas enviadas
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
            Los Foros Vecinales son espacios de participación ciudadana donde los vecinos deciden en qué invertir parte del presupuesto municipal. Todos los años, y desde hace 7 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="como-voto img-responsive  ">
            </div>
            <h2 className="text-center">¿Cómo se distribuye el dinero por barrio?</h2>
            <p>
            La partida de $75 millones, que corresponderá al presupuesto 2019, se repartirá siguiendo dos criterios: los primeros 39 millones se repartieron por partes iguales a cada uno de los 9 barrios. Los siguientes 36 millones se distribuirán según la cantidad de habitantes de cada barrio.
            </p>

          </div>

          <div className="col-md-4">
            <div
              className=" donde-voto img-responsive  ">
            </div>
            <h2 className="text-center">
              ¿Cómo se elaboran los proyectos?
            </h2>
            <p className="donde-voto-cont">
            En una serie de reuniones programadas (Foros Vecinales), los vecinos se encuentran con los funcionarios municipales de cada área para presentarles propuestas para cada barrio. También podés presentar tu propuesta <Link style={{ display: 'inline' }} to='/formulario-propuesta'>aquí</Link>
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
