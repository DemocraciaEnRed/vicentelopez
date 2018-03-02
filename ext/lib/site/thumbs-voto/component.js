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
            Los Foros Vecinales son espacios de participación ciudadana donde los vecinos deciden en qué invertir parte del presupuesto municipal. Todos los años, y desde hace 7 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="como-voto img-responsive  ">
            </div>
            <h2 className="text-center">¿Cómo se distribuye el dinero por barrio?</h2>
            <p>
            La partida, que corresponderá al presupuesto 2019, se repartirá siguiendo dos criterios: los primeros 39 millones se repartieron por partes iguales a cada uno de los 9 barrios. Los siguientes 36 millones se distribuirán según la cantidad de habitantes de cada barrio.
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
            En una serie de reuniones programadas (Foros Vecinales), los vecinos se encuentran con los funcionarios municipales de cada área para presentarles propuestas para cada barrio. También podés presentar tu propuesta
              <Link to='/crear-anteproyecto'>
                Aquí
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
