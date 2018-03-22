import React, { Component } from 'react'
import Footer from 'ext/lib/site/footer/component'

export default class Page extends Component {
  render () {
    return (
      <div>
        <section className='banner-static'>
          <div className='banner gradient'>
            <h1>Título de la sección</h1>
            <h2>Descripción del contenido dentro de la sección</h2>
          </div>
        </section>
        <div className='documentos-body'>
          <div className='select-barrio'>
            <p>Seleccioná el barrio que quieras visualizar</p>

            <div className='dropdown'>
              <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown'>
              Barrio
              </button>
              <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <a className='dropdown-item' href='#'>Action</a>
                <a className='dropdown-item' href='#'>Another action</a>
                <a className='dropdown-item' href='#'>Something else here</a>
              </div>
            </div>

          </div>
          <div className='timeline'>
            <div className='timeline-line'> 2008 </div>
          </div>

          <div className='card'>
            <div className='navbar-seccion'>
              <div className='seccion'>Minutas</div>
              <div className='seccion'>Boletas</div>
              <div className='seccion'>Proyectos</div>
            </div>
            <div className='visualizador'></div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
