import React from 'react'
import { Link } from 'react-router'

export default function ThumbsVoto(props) {
  return (
    <section className="thumbs-voto info-landing">
      <div className="container-fluid">
        <div className="row cont fondo-azul">
          <div className="subtitulo">
            <h2>{ props.texts['home-subtitle'] }</h2>
            {/*<h3>Hasta el 31 de mayo inclusive tenés tiempo para presentar tus propuestas</h3> */}
            <h3>{ props.texts['home-subtitle-text'] }</h3>
            <div className="btn-container">
              {//<div className="boton-azul boton-blanco">
              //  <a href="https://celeste.blob.core.windows.net/pp-vicentelopez/informes/Escrutinio-2019.xlsx">Ver Resultados</a>
              //</div>
              }
              {props.enablePropuestas && <Link
                to='/formulario-propuesta'
                className="boton-azul boton-blanco">
                Mandá tu propuesta
              </Link>
              }
              {/*<Link
                to='/proyectos'
                className="boton-azul boton-blanco">
                Ver Proyectos
              </Link>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
