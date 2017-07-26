import React from 'react'

export default function Barrios ({ forums }) {
  return (
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
  )
}
