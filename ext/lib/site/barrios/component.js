import React from 'react'

export default function Barrios ({ forums }) {
  return (
      <section className='seccion-barrios-proyectos container'>
          <div className='row seccion-botones'>
              {
                forums && forums.map((forum) => {
                  return (
                    <div
                      className='contenedor-boton'>
                      <a href={`/${forum.name}`}>
                        <button
                          type="button"
                          className={`boton-azul btn ${forum.name === window.location.pathname.replace('/', '') ? 'active' : ''}`}>
                          <h3>{ forum.title }</h3>
                        </button>
                      </a>
                    </div>
                  )
                })
              }
          </div>
      </section>
  )
}
