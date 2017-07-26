import React from 'react'

export default function Barrios ({ forums }) {
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
            //        <div key={i} className='contenedor-boton'>
                      <a key={i} href={`/${forum.name}`}
                        className={`boton-azul btn ${forum.name === window.location.pathname.replace('/', '') ? 'active' : ''}`}>
                          { forum.title }
                      </a>
              //      </div>
                  )
                })
              }
          </div>
      </div>
    </section>
  )
}
