import React, { Component } from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import Tags from 'lib/admin/admin-topics-form/tag-autocomplete/component'
import Attrs from 'lib/admin/admin-topics-form/attrs/component'
import { browserHistory } from 'react-router'
import userConnector from 'lib/site/connectors/user'

const PROPOSALS_FORUM_NAME = 'propuestas'

class FormularioPropuesta extends Component {
  constructor () {
    super()

    this.state = {
      forum: null,
      topic: null,
      nombre: '',
      domicilio: '',
      documento: '',
      telefono: '',
      email: '',
      titulo: '',
      barrio: '',
      problema: '',
      solucion: '',
      beneficios: ''
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

  handleSubmit (e) {
    e.preventDefault()

    const formData = {
      forum: this.state.forum.id,
      mediaTitle: this.state.titulo,
      'attrs.nombre': this.state.nombre,
      'attrs.domicilio': this.state.domicilio,
      'attrs.documento': this.state.documento,
      'attrs.telefono': this.state.telefono,
      'attrs.email': this.state.email,
      'attrs.barrio': this.state.barrio,
      'attrs.problema': this.state.problema,
      'attrs.solucion': this.state.solucion,
      'attrs.beneficios': this.state.beneficios,
      tags: e.target.elements.tags.value.split(',')
    }

    window.fetch(`/api/v2/topics`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res.status)
      if (res.status === 200) {
        browserHistory.push('/propuestas?sort=new')
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  componentWillUpdate (props) {
    if (this.props.user.state.rejected) {
      browserHistory.push('/signin?ref=/formulario-propuesta')
    }
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
          <span className='form-section-label'>
            Datos personales
          </span>
          <div className='form-group'>
            <label className='required' htmlFor='nombre'>
              Nombre y apellido
            </label>
            <input
              className='form-control'
              required
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
              required
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
              required
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
              required
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
              required
              type='text'
              max='128'
              name='email'
              value={this.state['email']}
              onChange={this.handleInputChange} />
          </div>
          <span className='form-section-label'>
            Propuesta
          </span>
          <div className='form-group'>
            <label className='required' htmlFor='titulo'>
              Titulo
            </label>
            <input
              className='form-control'
              required
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
              required
              name='barrio'
              value={this.state['barrio']}
              onChange={this.handleInputChange}>
              <option value=''>Seleccione un barrio</option>
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
              required
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
              required
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
              required
              rows='6'
              max='1000'
              name='beneficios'
              value={this.state['beneficios']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>

          <div className='submit-div'>
            <button type='submit' className='submit-btn'>
              Enviar tu propuesta
            </button>
          </div>

        </form>
      </div>
    )
  }
}

export default userConnector(FormularioPropuesta)