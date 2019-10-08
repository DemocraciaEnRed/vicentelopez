import React from 'react'
import { Link } from 'react-router'

export default function ThumbsVoto (props) {
  return (
    <section className="thumbs info-landing">
      <div className="container-fluid">
        <div className="row cont fondo-azul">
          <div className="subtitulo">
              <h2>
              Muchas Gracias
            </h2>
             {/*<h3>Hasta el 31 de mayo inclusive tenés tiempo para presentar tus propuestas</h3> */}
            <h3>a las 76.477 personas que con su voto decidieron</h3>
            <h3>los 66 proyectos en los que vamos a invertir $ 110.000.000<br/></h3>
            <h3>del Presupuesto Participativo de Vicente López en 2020.</h3>
            <Link
              // to='/formulario-propuesta'
              to='/proyectos'
              className="boton-azul boton-blanco">
              {/* Mandá tu propuesta */}
              Ver Proyectos
            </Link>
            <div className="btn-container">
            <div className="boton-azul boton-blanco">
              <a href="https://forosvecinales.blob.core.windows.net/informes/Escrutinio-2019.xlsx">Ver Resultados</a>
            </div>
            </div>
          </div>
        </div>
        <div className="row cont">
          <div className="col-md-4">
            <div
              className="que-son img-responsive  ">
            </div>
            <h2
              className="text-center">
                ¿Qué es?
            </h2>
            <p className="que-son-cont">
            El Presupuesto Participativo es una iniciativa que permite a cada uno de los vecinos de los 9 barrios del municipio proponer, debatir y decidir a través del voto en qué utilizar una parte del presupuesto municipal de inversión.
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="que-propongo img-responsive  ">
            </div>
            <h2 className="text-center">¿Qué puedo proponer?</h2>
            <p className="que-propongo-cont">
            Estamos evaluando todas las propuestas que recibimos de los vecinos. 
            Las propuestas factibles se convertirán en proyectos que serán sometidos a una votación
             desde el lunes 16 hasta el domingo 29 de septiembre de 2019. Puede votar cualquier mayor de 16 años que viva o trabaje en Vicente López en las urnas habilitadas en los 9 barrios de Vicente López. Los proyectos ganadores serán ejecutados en 2020.
           {/*  Ideas para mejorar tu barrio, tu institución o asociación en temas de espacio público, seguridad, tránsito, salud, educación, cultura y deportes. 
            * Podés subir propuestas desde donde quieras haciendo click <Link to='https://forosvecinales.vicentelopez.gov.ar/proyectos' className="">acá</Link> y participar de las reuniones de vecinos para conocer mejor del presupuesto participativo! */
            /* Las propuestas pueden involucrar equipamiento o infraestructura pero no pueden incluir gastos en recursos humanos. ¡Podés subir propuestas desde el 19 de marzo hasta el 31 de mayo y participar de las <Link to="https://forosvecinales.vicentelopez.gov.ar/s/herramientas">reuniones de vecinos</Link> para conocer mejor del presupuesto participativo! */}
            </p>

          </div>

          <div className="col-md-4">
            <div
              className="como-sigo img-responsive  ">
            </div>
            <h2 className="text-center">
              ¿Cómo sigo los proyectos?
            </h2>
            <p className="donde-voto-cont">
            Podés seguir de forma fácil la evolución de los proyectos ganadores del presupuesto participativo de 2017 y 2018 y conocer su ejecución entrando acá: <Link to='/proyectos?stage=seguimiento' className="">Seguimiento proyectos</Link>
            </p>
          </div>

        </div>

        {/* <div
          className='row'>
          <div className='cont-boton-azul'>
            <Link to='/s/acerca-de' className="boton-azul">
                    Más información
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  )
}
