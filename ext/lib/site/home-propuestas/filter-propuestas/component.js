import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Badges from './badges/component'

export default class FilterPropuestas extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeDropdown: null,
      clearedFilters: []
    }
  }

  componentWillMount () {
    document.addEventListener('click', this.handleClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClick, false)
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
    this.setState({ activeDropdown: null })
    if (!this.state.clearedFilters.includes(filter)){
      this.setState({
        clearedFilters: this.state.clearedFilters.concat(filter)
      })
    }
  }

  render () {
    const {
      barrios, barrio,
      states, state,
      anios, anio,
      tags, tag,
      handleRemoveBadge
    } = this.props

    let allActiveOpts = []
    // explicando un poco las operaciones que siguen:
    // - los "..." expanden el array que devuelve el map, sino pushearía un
    //   array adentro de un array, y no sus elementos
    // - el .map(.find().name) hace la conversión de keys a values
    //   p.ej. barrio contiene keys, y para mostrar su formato para humanos hay
    //   que buscar la key dentro de barrios
    if (barrio.length)
      allActiveOpts.push(
        ...barrio.sort().map(i => ({ value: i, name: barrios.find(j => j.value==i).name }))
      )
    if (state.length)
    allActiveOpts.push(
        ...state.sort().map(i => {if (states.some(el=>el.value === i)) return ({ value: i, name: states.find(j => j.value==i).name })}).filter(notUndefined => notUndefined !== undefined)
      )
    if (anio.length)
      allActiveOpts.push(...anio.sort().map(i => ({ value: i, name: i })))
    if (tag.length)
      allActiveOpts.push(
        ...tag.sort().map(i => ({ value: i, name: tags.find(j => j.value == i).name }))
      )
    return (
      <nav id='filter-propuestas'>
        <div className='filters-nav center'>
          <FilterBox
            name='barrio'
            title='Barrio'
            allOptions={barrios}
            activeOptions={barrio}

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
            activeOptions={state}

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
            activeOptions={anio}

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
            activeOptions={tag}

            activeDropdown={this.state.activeDropdown}
            clearedFilters={this.state.clearedFilters}
            handleDropdown={this.handleDropdown}
            handleFilter={this.handleFilter}
            clearFilter={this.clearFilter}
            />
        </div>

        {allActiveOpts.length != 0 &&
          <Badges options={allActiveOpts} handleRemove={handleRemoveBadge} />
        }

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
                { activeOptions.includes('factible') ? activeOptions.length - 5 : activeOptions.length }
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
              <span>Ver todos</span>
            </button>
          </div>
        }

      </div>
    )
  }
}
