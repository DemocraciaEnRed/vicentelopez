import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Barrios extends Component {
  constructor () {
    super()
    this.barrios = [
      {
        'name': 'carapachay',
        'title': 'Carapachay'
      },
      {
        'name': 'florida-este',
        'title': 'Florida Este'
      },
      {
        'name': 'florida-oeste',
        'title': 'Florida Oeste'
      },
      {
        'name': 'la-lucila',
        'title': 'La Lucila'
      },
      {
        'name': 'munro',
        'title': 'Munro'
      },
      {
        'name': 'olivos',
        'title': 'Olivos'
      },
      {
        'name': 'vicente-lopez',
        'title': 'Vicente Lopez'
      },
      {
        'name': 'villa-adelina',
        'title': 'Villa Adelina'
      },
      {
        'name': 'villa-martelli',
        'title': 'Villa Martelli'
      }
    ]
  }

  render () {
    return (
      <section className='seccion-barrios container'>
        <div className='fondo-titulo'>
          <h2 className='title'>Barrios</h2>
        </div>
        <div className='seccion-barrios-proyectos container'>
          <div className='seccion-botones'>
            <Link to={`/proyectos`} className={`boton-azul btn`}>
              Todos los proyectos
            </Link>
            {this.barrios.map((barrio, i) => (
              <Link key={i} to={`/proyectos?barrio=${barrio.name}`}
                className={`boton-azul btn`}>
                { barrio.title }
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }
}
