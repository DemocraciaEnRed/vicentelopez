import React from 'react'

export default function DatosPorForo (props) {
  return (
    <section className='seccion-datos-por-foro'>
      <div className='div-presupuesto'>
        <h3>Presupuesto asignado: ${props.forum.extra.presupuesto}</h3>
      </div>
      <div className='div-boleta'>
        <a target='_blank' href={`${props.forum.extra.boleta}`}>
          <div className='icon-boleta' />
          DESCARGAR BOLETA
        </a>
      </div>
    </section>
  )
}
