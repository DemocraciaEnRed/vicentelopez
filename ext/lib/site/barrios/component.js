import React from 'react'




export default function Barrios ({ forums }) {
//
// const barrios = [
//   {label: 'carapachay', code: 'carapachay'}
//   {label: 'munro', code: 'munro'}
//   {label: 'florida este', code: 'florida este'}
//   {label: 'florida oeste', code: 'florida oeste'}
//   {label: 'la lucila', code: 'la lucila'}
//   {label: 'olivos', code: 'olivos'}
//   {label: 'vicente lopez', code: 'vicente lopez'}
//   {label: 'villa adelina', code: 'villa adelina'}
//   {label: 'villa martelli', code: 'villa martelli'}
// ]
console.log('forums', forums)
  return (
      <section className='seccion-barrios-proyectos container'>
          <div className='row seccion-botones'>
              {
                forums && forums.map((forum) => {
                  console.log(forum.name, window.location.pathname, window.location.pathname.replace('/', ''), forum.name === window.location.pathname.replace('/', ''))
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
