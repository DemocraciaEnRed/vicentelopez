import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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

const states = [
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
      state: [],
      ano: []
    }
  }

  componentWillMount () {
    document.addEventListener('click', this.handleClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClick, false)
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
      }, () => this.sendFilters())
    // If it's already included erase it
    } else {
      this.setState({
        [filter]: [...this.state[filter]].filter((item) => item !== e.target.value)
      }, () => this.sendFilters())
    }
  }

  // Close dropdown if clicked outside
  handleClick = (e) => {
    if ((!ReactDOM.findDOMNode(this).contains(e.target)  || e.target.id === 'filter') && this.state.activeDropdown !== null) {
      this.setState({
        activeDropdown: null
      })
    }
  }

  // Clear all selected items from a filter
  clearFilter = (filter) => (e) => {
    this.setState({
      activeDropdown: null,
      [filter]: []
    }, () => this.sendFilters())
  }

  // Expose filters to parent funtions
  sendFilters = () => {
    this.props.handleFilters({
      ano: this.state.ano,
      barrio: this.state.barrio,
      state: this.state.state
    })
  }

  render () {
    return (
      <nav className='filters-nav' id='filter'>
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
          <button className='dropdown-button' onClick={this.handleDropdown('state')}>
            <div>
              <span className={`button-label ${this.state.state.length > 0 ? 'active' : ''}`}>Estado</span>
              {this.state.state.length > 0 &&
                <span className='badge'>{this.state.state.length}</span>
              }
            </div>
            <span className='caret-down'>▾</span>
          </button>
          {this.state.activeDropdown === 'state' &&
          <div className='dropdown-options'>
            <div className='options-container'>
              {states.map((s, i) => (
                <label className='option-label' key={i}>
                  <input
                    type='checkbox'
                    value={s.value}
                    onChange={this.handleFilter('state')}
                    checked={this.state.state.includes(s.value)} />
                  <span className='checkbox-label'>{s.name}</span>
                </label>
              ))}
            </div>
            <button className='clear-filters' onClick={this.clearFilter('state')}>
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
