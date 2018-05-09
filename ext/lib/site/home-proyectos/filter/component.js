import React, { Component } from 'react'

const barrios = [
  { 'name': 'Carapachay', 'value': 'carapachay' },
  { 'name': 'Florida Este', 'value': 'florida-este' },
  { 'name': 'Florida Oeste', 'value': 'florida-oeste' },
  { 'name': 'La Lucila', 'value': 'la-lucila' },
  { 'name': 'Munro', 'value': 'munro' },
  { 'name': 'Olivos', 'value': 'olivos' },
  { 'name': 'Vicente López', 'value': 'vicente-lopez' },
  { 'name': 'Villa Adelina', 'value': 'villa-adelina' },
  { 'name': 'Villa Martelli', 'value': 'villa-martelli' }
]

const estados = [
  { 'name': 'En preparación', 'value': 'en-preparacion' },
  { 'name': 'Contratación', 'value': 'contratacion' },
  { 'name': 'En ejecución', 'value': 'en-ejecucion' },
  { 'name': 'Ejecutado', 'value': 'ejecutado' }
]

const anos = ['2015', '2016', '2017']

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeDropdown: null,
      barrio: [],
      estado: [],
      ano: []
    }
  }

  handleDropdown = (id) => (e) => {
    // Show or hide the options div
    e.preventDefault()
    this.setState({
      activeDropdown: this.state.activeDropdown === id ? null : id
    })
  }

  handleFilter = (filter) => (e) => {
    // If the value is not included in the filter array, add it
    if (!this.state[filter].includes(e.target.value)) {
      this.setState({
        [filter]: [...this.state[filter], e.target.value]
      })
    // If it's already included erase it
    } else {
      this.setState({
        [filter]: [...this.state[filter]].filter((item) => item !== e.target.value)
      })
    }
  }

  clearFilter = (filter) => (e) => {
    // Clear all selected items from a filter
    this.setState({
      activeDropdown: null,
      [filter]: []
    })
  }

  render () {
    return (
      <nav className='filters-nav'>
        <div className='button-container'>
          <button className='dropdown-button' onClick={this.handleDropdown('barrio')}>
            <div>
              <span className={`button-label ${this.state.barrio.length > 0 ? 'active' : ''}`}>Barrio</span>
              {this.state.barrio.length > 0 &&
                <span className='badge'>{this.state.barrio.length}</span>
              }
            </div>
            <span className='caret-down'>▾</span>
          </button>
          {this.state.activeDropdown === 'barrio' &&
            <div className='dropdown-options'>
              <div className='options-container'>
                {barrios.map((b, i) => (
                  <label className='option-label' key={i}>
                    <input
                      type='checkbox'
                      value={b.value}
                      onChange={this.handleFilter('barrio')}
                      checked={this.state.barrio.includes(b.value)} />
                    <span className='checkbox-label'>{b.name}</span>
                  </label>
                ))}
              </div>
              <button className='clear-filters' onClick={this.clearFilter('barrio')}>
                <span>Borrar filtros</span>
              </button>
            </div>
          }
        </div>
        <div className='button-container'>
          <button className='dropdown-button' onClick={this.handleDropdown('estado')}>
            <div>
              <span className={`button-label ${this.state.estado.length > 0 ? 'active' : ''}`}>Estado</span>
              {this.state.estado.length > 0 &&
                <span className='badge'>{this.state.estado.length}</span>
              }
            </div>
            <span className='caret-down'>▾</span>
          </button>
          {this.state.activeDropdown === 'estado' &&
          <div className='dropdown-options'>
            <div className='options-container'>
              {estados.map((e, i) => (
                <label className='option-label' key={i}>
                  <input
                    type='checkbox'
                    value={e.value}
                    onChange={this.handleFilter('estado')}
                    checked={this.state.estado.includes(e.value)} />
                  <span className='checkbox-label'>{e.name}</span>
                </label>
              ))}
            </div>
            <button className='clear-filters' onClick={this.clearFilter('estado')}>
              <span>Borrar filtros</span>
            </button>
          </div>
          }
        </div>
        <div className='button-container'>
          <button className='dropdown-button' onClick={this.handleDropdown('ano')}>
            <div>
              <span className={`button-label ${this.state.ano.length > 0 ? 'active' : ''}`}>Año</span>
              {this.state.ano.length > 0 &&
                <span className='badge'>{this.state.ano.length}</span>
              }
            </div>
            <span className='caret-down'>▾</span>
          </button>
          {this.state.activeDropdown === 'ano' &&
          <div className='dropdown-options'>
            <div className='options-container'>
              {anos.map((a, i) => (
                <label className='option-label' key={i}>
                  <input
                    type='checkbox'
                    value={a}
                    onChange={this.handleFilter('ano')}
                    checked={this.state.ano.includes(a)} />
                  <span className='checkbox-label'>{a}</span>
                </label>
              ))}
            </div>
            <button className='clear-filters' onClick={this.clearFilter('ano')}>
              <span>Borrar filtros</span>
            </button>
          </div>
          }
        </div>
      </nav>
    )
  }
}
