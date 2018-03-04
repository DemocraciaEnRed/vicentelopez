import React, { Component } from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import Tags from 'lib/admin/admin-topics-form/tag-autocomplete/component'
import Attrs from 'lib/admin/admin-topics-form/attrs/component'

const PROPOSALS_FORUM_NAME = 'propuestas'

export default class Create extends Component {
  constructor () {
    super()

    this.state = {
      forum: null,
      topic: null,
      mediaTitle: '',
      body: '',
      tags: '',
      clauses: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (evt) {
    evt.preventDefault()
    const { target: { value, name } } = evt

    this.setState({ [name]: value })
  }

  componentWillMount () {
    forumStore.findOneByName(PROPOSALS_FORUM_NAME).then((forum) => {
      this.setState({ forum })
    }).catch((err) => { console.error(err) })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { mediaTitle, clauses, forum } = this.state

    const formData = {
      mediaTitle,
      clauses,
      forum: forum.id,
    }

    window.fetch(`/api/v2/topics`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render () {
    const { forum } = this.state

    if (!forum) return null

    return (
      <div className='form-propuesta'>
        <div className='propuesta-header'>
          <h1 className='text-center'>Presupuesto Participativo 2018</h1>
          <p>Envianos tus propuestas para que sean presentadas en la votación de este año.</p>
        </div>
        <form className='wrapper' onSubmit={this.handleSubmit}>
          <input type='hidden' name='forum' value={forum.id} />
          <div className='form-group'>
            <label className='required' htmlFor='nombre'>
              Apellido
            </label>
            <input
              className='form-control'
              type='text'
              max='128'
              name='nombre'
              value={this.state['nombre']}
              onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='domicilio'>
              Domicilio
            </label>
            <input
              className='form-control'
              type='text'
              max='200'
              name='domicilio'
              value={this.state['domicilio']}
              onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='documento'>
              DNI
            </label>
            <input
              className='form-control'
              type='text'
              max='50'
              name='documento'
              value={this.state['documento']}
              onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='telefono'>
              Teléfono
            </label>
            <input
              className='form-control'
              type='text'
              max='50'
              name='telefono'
              value={this.state['telefono']}
              onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='email'>
              Email
            </label>
            <input
              className='form-control'
              type='text'
              max='128'
              name='email'
              value={this.state['email']}
              onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='titulo'>
              Titulo
            </label>
            <input
              className='form-control'
              type='text'
              max='128'
              name='titulo'
              value={this.state['titulo']}
              onChange={this.handleInputChange} />
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='barrio'>
              Barrio
            </label>
            <select
              className='form-control'
              name='barrio'
              value={this.state['barrio']}
              onChange={this.handleInputChange}>
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
          <div className='tags-autocomplete'>
            <label className='required'>
              Etiquetas
            </label>
            <Tags
              tags={this.topic && this.topic.tags && this.topic.tags}
              initialTags={forum.initialTags}
              forum={forum.id} />
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='problema'>
              Problema o necesidad existente
            </label>
            <textarea
              className='form-control'
              rows='6'
              max='1000'
              name='problema'
              value={this.state['problema']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='solucion'>
              Propuesta para solucionar el problema
            </label>
            <textarea
              className='form-control'
              rows='6'
              max='1000'
              name='solucion'
              value={this.state['solucion']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='beneficios'>
              Beneficios que brindará el proyecto al barrio
            </label>
            <textarea
              className='form-control'
              rows='6'
              max='1000'
              name='beneficios'
              value={this.state['beneficios']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>

          <div>
            <button type='submit'
              name='formSend'
              onChange={this.handleInputChange}
              value={this.formSend}>
              Enviar
            </button>
          </div>

        </form>
      </div>
    )
  }
}
