import React from 'react'

export default function Barrios ({ forums }) {
  // ordeno los botones alfabéticamente, dejando primero "Todos los proyectos"
  forums && forums.sort(function (a,b) {
    var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
    return (titleA == "todos los proyectos") ? -1 : (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0
  })
  console.log(forums)
  return (
    <section className='seccion-barrios container'>
      <div className="fondo-titulo">
        <h2 className='title'>Barrios</h2>
      </div>
      <div className='seccion-barrios-proyectos container'>
      <div className='seccion-botones'>
        {
          forums && forums.map((forum, i) => {
            return (
              <a key={i} href={`/${forum.name}`}
                className={`boton-azul btn ${forum.name === window.location.pathname.replace('/', '') ? 'active' : ''}`}>
                  { forum.title }
              </a>
            )
          })
        }
      </div>
      </div>
    </section>
  )
}