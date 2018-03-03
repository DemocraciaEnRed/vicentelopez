import React from 'react'

export default function Barrios ({ forums }) {
  const validButtons = ["villa-martelli", "villa-adelina", "vicente-lopez", "olivos", "munro", "la-lucila", "florida-oeste", "florida-este", "carapachay", "proyectos"]
  forums = forums.filter(f => validButtons.includes(f.name))
  // ordena los botones alfabéticamente, dejando primero "Todos los proyectos"
  forums && forums.sort((a, b) => {
    const titleA = a.title.toLowerCase()
    const titleB = b.title.toLowerCase()

    return titleA === 'todos los proyectos'
      ? -1 : (titleA < titleB)
        ? -1 : (titleA > titleB)
          ? 1 : 0
  })

  return (
    <section className='seccion-barrios container'>
      <div className='fondo-titulo'>
        <h2 className='title'>Barrios</h2>
      </div>
      <div className='seccion-barrios-proyectos container'>
        <div className='seccion-botones'>
          {forums && forums.map((forum, i) => (
            <a key={i} href={`/${forum.name}`}
              className={`boton-azul btn ${forum.name === window.location.pathname.replace('/', '') ? 'active' : ''}`}>
              { forum.title }
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
