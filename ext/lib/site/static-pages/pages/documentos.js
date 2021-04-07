import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
import PdfViewer from 'ext/lib/site/pdfviewer/component'
const years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

export default class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anio: '2019',
      barrio: 'villa-adelina',
      archivo: 'boleta'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    const u = new window.URLSearchParams(window.location.search)
    if (u.has('anio')) this.setState({ anio: u.get('anio') })
    if (u.has('barrio')) this.setState({ barrio: u.get('barrio') })
    if (u.has('archivo')) this.setState({ archivo: u.get('archivo') })
    document.body.scrollTop = 0
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
            <h2>Aquí encontrarás las minutas, boletas y proyectos de todas las ediciones de Presupuesto Participativo</h2>
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

          <div className='visualizador-wrapper'>
            <div className='navbar-seccion'>
              <button className={`seccion ${this.state.archivo === 'minuta' ? 'active' : ''}`}
                style={this.state.anio >= 2018 ? {display:'none'} : {}}
                onClick={this.changeFile('minuta')}>Minutas</button>
              <button className={`seccion ${this.state.archivo === 'boleta' ? 'active' : ''}`}
                onClick={this.changeFile('boleta')}>Boletas</button>
              <button className={`seccion ${this.state.archivo === 'proyectos' ? 'active' : ''}`}
                onClick={this.changeFile('proyectos')}>Proyectos</button>
            </div>
            <div className='visualizador'>
              <div className='responsive-wrapper'>
                {
                  (this.state.anio === '2012' && this.state.archivo !== 'minuta') ? (
                      <div className='empty-msg'>
                        <div className='alert alert-success' role='alert'>
                          {this.state.archivo === 'boleta' ? 'En 2012 no hubo votación, los proyectos se seleccionaron por consenso en las reuniones informativas de cada barrio.' : 'En 2012 no se ejecutaron proyectos del Presupuesto Participativo en Vicente López por ser el primer año de implementación en el que se eligieron proyectos.'}
                        </div>
                      </div>
                    ) : ((this.state.anio === '2018' || this.state.anio === '2019') && this.state.archivo !== 'boleta') ? (
                      <div className='empty-msg'>
                        {
                          this.state.archivo === 'proyectos' ? (
                            <Link className='alert alert-success' to='/proyectos'>Mirá los proyectos de {this.state.anio === '2018' ? '2018' : '2019'}</Link>
                          ) : (
                            <div className='alert alert-success' role='alert'>
                              {(this.state.anio === '2019') ? 'Todavía no hay minutas para este año.' : (this.state.anio === '2018' ? 'No hubo minutas este año.' : null)}
                            </div>
                          )
                        }
                      </div>
                    ) : (
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
              !((this.state.anio === '2012' && this.state.archivo !== 'minuta') || (this.state.anio === '2018' && this.state.archivo !== 'boleta')) && (
                <a href={`https://celeste.blob.core.windows.net/pp-vicentelopez/historial-documentos/${this.state.archivo}_${this.state.barrio}_${this.state.anio}.pdf`} className='boton-azul boton-dwl' target='_blank' download>
                  <div className='icon-boleta'/>
                  Descargar
                </a>
              )
            }
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
