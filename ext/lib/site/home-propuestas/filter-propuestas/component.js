import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { findAllTags } from 'lib/middlewares/tag-middlewares/tag-middlewares'

let barrios;

const states = [
  { 'name': 'Pendiente', 'value': 'pendiente' },
  { 'name': 'Factible', 'value': 'factible' },
  { 'name': 'No factible', 'value': 'no-factible' },
  { 'name': 'Integrado', 'value': 'integrado' },
]

const anios = ['2018', '2019', '2020', '2021']

let tags = []

export default class FilterPropuestas extends Component {
  constructor (props) {
    super(props)

    barrios = props.barrios

    this.state = {
      activeDropdown: null,
      clearedFilters: []
    }

    this.getTags()
  }

  componentWillMount () {
    document.addEventListener('click', this.handleClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClick, false)
  }

  getTags = () => {
    let res = {}
    findAllTags(res, () => {
      let barriosKeys = barrios.map((b) => b.value)
      let tagsNoBarrio = res.tags.filter((t) => ! barriosKeys.includes(t.hash))
      tags = tagsNoBarrio.map((t) => t.name)
    })
  }

  // Close dropdown if clicked outside
  handleClick = (e) => {
    if ((!ReactDOM.findDOMNode(this).contains(e.target) || e.target.id === 'filter') && this.state.activeDropdown !== null) {
      this.setState({
        activeDropdown: null
      })
    }
  }

  handleDropdown = (id) => (e) => {
    // Show or hide the options div
    e.preventDefault()
    this.setState({
      activeDropdown: this.state.activeDropdown === id ? null : id
    })
  }

  // Send filter to parent component
  // onClick en una opción; filter=state/barrio/etc.
  handleFilter = (filter) => (e) => {
    // key de la opción
    const value = e.target.value
    const isCleared = this.state.clearedFilters.includes(filter)
    if (isCleared) {
      this.setState({
        clearedFilters: this.state.clearedFilters.filter((it) => it !== filter)
      }, this.props.handleDefaultFilter(filter, value))
    } else if (this.props[filter].length === 1 && this.props[filter].includes(value)) {
      this.setState({
        clearedFilters: this.state.clearedFilters.concat(filter)
      }, this.props.handleFilter(filter, value))
    } else {
      this.setState({
        clearedFilters: this.state.clearedFilters.filter((it) => it !== filter)
      }, this.props.handleFilter(filter, value))
    }
  }

  // Clear all selected items from a filter
  clearFilter = (filter) => (e) => {
    this.props.clearFilter(filter)
    if (!this.state.clearedFilters.includes(filter)){
      this.setState({
        clearedFilters: this.state.clearedFilters.concat(filter)
      })
    }
  }

  render () {
    return (
      <nav id='filter-propuestas'>
        <div className='filters-nav center'>

          <FilterBox
            name='barrio'
            title='Barrio'
            allOptions={barrios}
            activeOptions={this.props.barrio}

            activeDropdown={this.state.activeDropdown}
            clearedFilters={this.state.clearedFilters}
            handleDropdown={this.handleDropdown}
            handleFilter={this.handleFilter}
            clearFilter={this.clearFilter}
            />

          <FilterBox
            name='state'
            title='Estado'
            allOptions={states}
            activeOptions={this.props.state}

            activeDropdown={this.state.activeDropdown}
            clearedFilters={this.state.clearedFilters}
            handleDropdown={this.handleDropdown}
            handleFilter={this.handleFilter}
            clearFilter={this.clearFilter}
            />

          <FilterBox
            name='anio'
            title='Año'
            allOptions={anios}
            activeOptions={this.props.anio}

            activeDropdown={this.state.activeDropdown}
            clearedFilters={this.state.clearedFilters}
            handleDropdown={this.handleDropdown}
            handleFilter={this.handleFilter}
            clearFilter={this.clearFilter}
            />

          <FilterBox
            name='tag'
            title='Tema'
            allOptions={tags}
            activeOptions={this.props.tag}

            activeDropdown={this.state.activeDropdown}
            clearedFilters={this.state.clearedFilters}
            handleDropdown={this.handleDropdown}
            handleFilter={this.handleFilter}
            clearFilter={this.clearFilter}
            />

        </div>
      </nav>
    )
  }
}

class FilterBox extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      name, title, allOptions, activeOptions,
      activeDropdown, clearedFilters,
      handleDropdown, handleFilter, clearFilter
    } = this.props

    const hasSelection = !clearedFilters.includes(name)

    return (
      <div className={`button-container ${ name }`}>

        <button className='dropdown-button' onClick={ handleDropdown(name) }>
          <div>
            <span className={`button-label ${ (activeOptions.length > 0 && hasSelection) ? 'active' : '' }`}>
              { title }
            </span>
            { activeOptions.length > 0 && (
              <span className='badge'>
                { activeOptions.length }
              </span>
            ) }
          </div>
          <span className='caret-down'>▾</span>
        </button>

        { activeDropdown === name &&
          <div className='dropdown-options'>
            <div className='options-container'>
              { allOptions.map((a, i) => (
                <label className='option-label' key={ i }>
                  <input
                    type='checkbox'
                    value={ a.value || a }
                    onChange={ handleFilter(name) }
                    checked={ hasSelection && activeOptions.includes(a.value || a) } />
                  <span className='checkbox-label'>{ a.name || a }</span>
                </label>
              )) }
            </div>
            <button className='clear-filters' onClick={ clearFilter(name) }>
              <span>Borrar filtros</span>
            </button>
          </div>
        }

      </div>
    )
  }
}
