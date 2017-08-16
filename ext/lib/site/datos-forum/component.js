import React from 'react'
import checkReservedNames from 'lib/forum/check-reserved-names'
import forumStore from 'lib/stores/forum-store/forum-store'

export default function DatosPorForo (props) {
  //console.log(props.forum)
  //console.log(props.forum.extra)


  return (
    <section className='seccion-datos-por-foro'>
      <div className='datos-wrapper'>
        <div className='recuadro-datos-foro'>
          <h2>Datos del Barrio</h2>
          <p>Primer dato</p>
          <p>Segundo dato</p>
        </div>
      </div>
    </section>
    )
}