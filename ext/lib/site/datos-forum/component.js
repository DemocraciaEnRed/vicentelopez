import React from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import {Link} from 'react-router'

export default function DatosPorForo (props) {
  //console.log(props.forum)
  //console.log(props.forum.extra)


  return (
    <section className='seccion-datos-por-foro'>
      <div className='datos-wrapper'>
        <div className='recuadro-datos-foro'>
          <p>El presupuesto asignado a [Barrio] es de [Presupuesto]</p>
          <a className="boton-azul btn" href="#">DESCARGAR BOLETA</a>
        </div>
      </div>
    </section>
    )
}