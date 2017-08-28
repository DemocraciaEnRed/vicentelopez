import React from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import {Link} from 'react-router'

export default function DatosPorForo (props) {
  return (
    <section className='seccion-datos-por-foro'>
      <div className='div-presupuesto'>
          <h3>Presupuesto asignado: ${props.forum.extra.presupuesto}</h3>
      </div>
      <div className='div-boleta'>
        <a href="#">
            <div className="icon-boleta"></div>
            DESCARGAR BOLETA
          </a>
      </div>
    </section>
    )
}