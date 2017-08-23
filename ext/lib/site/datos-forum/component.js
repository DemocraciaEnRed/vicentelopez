import React from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import {Link} from 'react-router'

export default function DatosPorForo (props) {
  //console.log(props.forum)
  //console.log(props.forum.extra)


  return (
    <section className='seccion-datos-por-foro'>
      <div className='presupuesto-asignado'>
          <h3>Presupuesto asignado $[Presupuesto]</h3>
      </div>
      <div className='div-boleta'>
        <a href="#">
            <img src="assets/DownloadFile.svg" />
            DESCARGAR BOLETA
          </a>
      </div>
    </section>
    )
}