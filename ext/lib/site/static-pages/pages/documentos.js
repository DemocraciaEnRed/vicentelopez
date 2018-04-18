import React, { Component } from 'react'
import Footer from 'ext/lib/site/footer/component'

export default class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anio: '2012',
      barrio: 'Villa Marteli',
      archivo: 'Minutas'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  };

  changeFile = (archivo) => () => {
    this.setState({
      archivo: archivo
    }, () => console.log(this.state.archivo))
  }

    changeAnio = (anio) => () => {
      this.setState({
        anio: anio
      }, () => console.log(this.state.anio))
    }

    handleInputChange (evt) {
      evt.preventDefault()
      const { target: { value, name } } = evt

      this.setState({ [name]: value })
      console.log(this.state.barrio)
    }

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
              <select
                className='form-control'
                required
                name='barrio'
                value={this.state['barrio']}
                onChange={this.handleInputChange}>
                <option value=''>Barrio</option>
                <option value='villa-martelli'>Villa Marteli</option>
                <option value='villa-adelina'>Villa Adelina</option>
                <option value='vicente-lopez'>Vicente Lopez</option>
                <option value='olivos'>Olivos</option>
                <option value='munro'>Munro</option>
                <option value='la-lucila'>La Lucila</option>
                <option value='florida-oeste'>Florida Oeste</option>
                <option value='florida-este'>Florida Este</option>
                <option value='carapachay'>Carapachay</option>
              </select>

            </div>
            <div className='timeline-line'></div>
            <div className='timeline'>
              <button className={`pointer ${this.state.anio === '2012' ? 'active' : ''}`} onClick={this.changeAnio('2012')} ></button>
              <button className={`pointer ${this.state.anio === '2013' ? 'active' : ''}`} onClick={this.changeAnio('2013')} ></button>
              <button className={`pointer ${this.state.anio === '2014' ? 'active' : ''}`} onClick={this.changeAnio('2014')} ></button>
              <button className={`pointer ${this.state.anio === '2015' ? 'active' : ''}`} onClick={this.changeAnio('2015')} ></button>
              <button className={`pointer ${this.state.anio === '2016' ? 'active' : ''}`} onClick={this.changeAnio('2016')} ></button>
              <button className={`pointer ${this.state.anio === '2017' ? 'active' : ''}`} onClick={this.changeAnio('2017')} ></button>
              <button className={`pointer ${this.state.anio === '2018' ? 'active' : ''}`} onClick={this.changeAnio('2018')} ></button>
            </div>
            <div className='timeline pointer-date-timeline'>
              <button className={`pointer-date ${this.state.anio === '2012' ? 'active' : ''}`} onClick={this.changeAnio('2012')} >2012</button>
              <button className={`pointer-date ${this.state.anio === '2013' ? 'active' : ''}`} onClick={this.changeAnio('2013')} >2013</button>
              <button className={`pointer-date ${this.state.anio === '2014' ? 'active' : ''}`} onClick={this.changeAnio('2014')} >2014</button>
              <button className={`pointer-date ${this.state.anio === '2015' ? 'active' : ''}`} onClick={this.changeAnio('2015')} >2015</button>
              <button className={`pointer-date ${this.state.anio === '2016' ? 'active' : ''}`} onClick={this.changeAnio('2016')} >2016</button>
              <button className={`pointer-date ${this.state.anio === '2017' ? 'active' : ''}`} onClick={this.changeAnio('2017')} >2017</button>
              <button className={`pointer-date ${this.state.anio === '2018' ? 'active' : ''}`} onClick={this.changeAnio('2018')} >2018</button>
            </div>

            <div className='card'>
              <div className='navbar-seccion'>
                <button className={`seccion ${this.state.archivo === 'Minutas' ? 'active' : ''}`}
                  onClick={this.changeFile('Minutas')}>Minutas</button>
                <button className={`seccion ${this.state.archivo === 'Boletas' ? 'active' : ''}`}
                  onClick={this.changeFile('Boletas')}>Boletas</button>
                <button className={`seccion ${this.state.archivo === 'Proyectos' ? 'active' : ''}`}
                  onClick={this.changeFile('Proyectos')}>Proyectos</button>
              </div>
              <div className='visualizador'></div>
            </div>
          </div>

          <Footer />
        </div>
      )
    }
}
