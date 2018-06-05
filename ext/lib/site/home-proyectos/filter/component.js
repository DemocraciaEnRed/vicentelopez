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
  { 'name': 'Ganador', 'value': 'ganador' },
  { 'name': 'No ganador', 'value': 'no-ganador' }
]

const anos = ['2017', '2018']

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeDropdown: null
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

  // Send filter to parent component
  handleFilter = (filter) => (e) => {
    this.props.handleFilter(filter, e.target.value)
  }

  // Close dropdown if clicked outside
  handleClick = (e) => {
    if ((!ReactDOM.findDOMNode(this).contains(e.target) || e.target.id === 'filter') && this.state.activeDropdown !== null) {
      this.setState({
        activeDropdown: null
      })
    }
  }

  // Clear all selected items from a filter
  clearFilter = (filter) => (e) => {
    this.props.clearFilter(filter)
  }

  render () {
    return (
      <nav className='filters-nav' id='filter'>
        <div className='button-container'>
          <button className='dropdown-button' onClick={this.handleDropdown('barrio')}>
            <div>
              <span className={`button-label ${this.props.barrio.length > 0 ? 'active' : ''}`}>Barrio</span>
              {this.props.barrio.length > 0 &&
                <span className='badge'>{this.props.barrio.length}</span>
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
                      checked={this.props.barrio.includes(b.value)} />
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
              <span className={`button-label ${this.props.state.length > 0 ? 'active' : ''}`}>Estado</span>
              {this.props.state.length > 0 &&
                <span className='badge'>{this.props.state.length}</span>
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
                    checked={this.props.state.includes(s.value)} />
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
              <span className={`button-label ${this.props.ano.length > 0 ? 'active' : ''}`}>Año</span>
              {this.props.ano.length > 0 &&
                <span className='badge'>{this.props.ano.length}</span>
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
                    checked={this.props.ano.includes(a)} />
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
