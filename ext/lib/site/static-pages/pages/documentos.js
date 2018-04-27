import React, { Component } from 'react'
import Footer from 'ext/lib/site/footer/component'
import PdfViewer from 'ext/lib/site/pdfviewer/component'
const years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018']

export default class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anio: '2016',
      barrio: 'villa-adelina',
      archivo: 'proyectos'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  changeFile = (archivo) => () => {
    this.setState({
      archivo: archivo
    })
  }

  changeAnio = (anio) => () => {
    this.setState({
      anio: anio
    })
  }

  handleInputChange (evt) {
    evt.preventDefault()
    const { target: { value, name } } = evt
    this.setState({ [name]: value })
  }

  render () {
    return (
      <div>
        <section className='banner-static'>
          <div className='banner gradient'>
            <h1>Historial de documentos</h1>
            <h2>Aquí encontrarás las minutas, boletas y proyectos de todas las ediciones de Foros Vecinales</h2>
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
              <option value='villa-martelli'>Villa Martelli</option>
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
            {years.map((currentYear, index) => {
              return <button className={`pointer ${this.state.anio === currentYear ? 'active' : ''}`} key={index} onClick={this.changeAnio(currentYear)} ></button>
            })}
          </div>
          <div className='timeline pointer-date-timeline'>
            {years.map((currentYear, index) => {
              return <button className={`pointer-date ${this.state.anio === currentYear ? 'active' : ''}`} key={index} onClick={this.changeAnio(currentYear)} >
                {currentYear}
              </button>
            })}
          </div>

          <div className='card'>
            <div className='navbar-seccion'>
              <button className={`seccion ${this.state.archivo === 'minuta' ? 'active' : ''}`}
                onClick={this.changeFile('minuta')}>Minutas</button>
              <button className={`seccion ${this.state.archivo === 'boleta' ? 'active' : ''}`}
                onClick={this.changeFile('boleta')}>Boletas</button>
              <button className={`seccion ${this.state.archivo === 'proyectos' ? 'active' : ''}`}
                onClick={this.changeFile('proyectos')}>Proyectos</button>
            </div>
            <div className='visualizador'>
              <div className='responsive-wrapper'>
                {
                  (
                    (this.state.archivo === 'boleta' && this.state.anio === '2012') ||
                      (this.state.archivo === 'proyectos' && this.state.anio === '2012') ||
                      (this.state.anio === '2018')
                  )
                    ? (
                      <div className='empty-msg'>
                        <div className='alert alert-success' role='alert'>
                            No se encuentra el archivo disponible
                        </div>
                      </div>
                    )
                    : (
                      <div className='pdf-wrapper'>  
                        <PdfViewer
                          barrio={this.state.barrio}
                          anio={this.state.anio}
                          archivo={this.state.archivo}
                        />
                      </div>
                    )
                }
              </div>
            </div>{
              !(
                (this.state.archivo === 'boleta' && this.state.anio === '2012') ||
                  (this.state.archivo === 'proyectos' && this.state.anio === '2012') ||
                  (this.state.anio === '2018')
              ) &&
              <a href={`https://s3.amazonaws.com/forosvecinales/visualizador/${this.state.archivo}_${this.state.barrio}_${this.state.anio}.pdf`} className='boton-azul boton-dwl' target='_blank' download>
                <div className='icon-boleta'/>
                Descargar
              </a>
            }  
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}