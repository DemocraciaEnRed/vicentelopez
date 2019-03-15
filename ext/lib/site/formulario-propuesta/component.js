import React, { Component } from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import Tags from 'lib/admin/admin-topics-form/tag-autocomplete/component'
import Attrs from 'lib/admin/admin-topics-form/attrs/component'
import { browserHistory } from 'react-router'
import userConnector from 'lib/site/connectors/user'
import { Link } from 'react-router'

// const PROPOSALS_FORUM_NAME = 'propuestas'

class FormularioPropuesta extends Component {
  constructor (props) {
    super(props)
    this.state = {
      forum: null,
      topic: null,
      mode: null,
      nombre: '',
      domicilio: '',
      documento: '',
      telefono: '',
      email: '',
      titulo: '',
      barrio: '',
      problema: '',
      solucion: '',
      beneficios: '',
      tags: null,
      adminComment: '',
      adminCommentReference: '',
      state: ''
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
    if (this.props.params.id) {
      this.setState({ mode: 'edit' })
      topicStore.findOne(this.props.params.id)
        .then((topic) => {
          this.setState({
            titulo: topic.mediaTitle,
            nombre: topic.attrs.nombre,
            domicilio: topic.attrs.domicilio,
            documento: topic.attrs.documento,
            telefono: topic.attrs.telefono,
            email: topic.attrs.email,
            barrio: topic.attrs.barrio,
            problema: topic.attrs.problema,
            solucion: topic.attrs.solucion,
            beneficios: topic.attrs.beneficios,
            tags: topic.tags,
            state: topic.attrs.state,
            adminComment: topic.attrs['admin-comment'],
            adminCommentReference: topic.attrs['admin-comment-reference']
          })
        })
        .catch((err) => console.log(err))
    } else {
      this.setState({ mode: 'new' })
    }

    forumStore.findOneByName('proyectos').then((forum) => {
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
    if (this.state.forum.privileges && this.state.forum.privileges.canChangeTopics && this.state.mode === 'edit') {
      formData['attrs.admin-comment'] = this.state.adminComment
      formData['attrs.admin-comment-referencia'] = this.state.adminCommentReference
      formData['attrs.state'] = this.state.state
    }
    if (this.state.mode === 'new') {
      this.crearPropuesta(formData)
    } else {
      this.editarPropuesta(formData)
    }
  }

  crearPropuesta = (formData) => {
    window.fetch(`/api/v2/topics`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.status === 200) {
          browserHistory.push('/propuestas?sort=newest')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  editarPropuesta (formData) {
    window.fetch(`/api/v2/topics/${this.props.params.id}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = `/propuestas/topic/${this.props.params.id}`
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentWillUpdate (props, state) {
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
          <h1 className='text-center'>Presupuesto Participativo 2019</h1>
          <p>Envianos tus propuestas para que sean presentadas en la votación de este año.</p>
        </div>
        {/* <alert className='alert alert-info cronograma'>
          <Link style={{ display: 'inline' }} to='/s/acerca-de?scroll=cronograma'>
            La etapa de envío de propuestas ya ha sido cerrada. ¡Muchas gracias por participar!
          </Link>
        </alert> */}
        <form className='wrapper' onSubmit={this.handleSubmit}>
          <div className="bar-section">
            <p className="section-title">Tus datos personales</p>
            <p className="section-subtitle">* todos estos datos son confidenciales</p>
          </div>
          <input type='hidden' name='forum' value={forum.id} />
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
              Domicilio *
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
              DNI *
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
              Teléfono *
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
              Email *
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
           <div className="bar-section">
            <p className="section-title">Acerca de la propuesta</p>
            <p className="section-subtitle">* todos estos datos son requeridos</p>
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='titulo'>
              Título
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
              className='form-control special-height'
              required
              name='barrio'
              value={this.state['barrio']}
              onChange={this.handleInputChange}>
              <option value=''>Seleccione un barrio</option>
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
          <div className='tags-autocomplete'>
            <label className='required'>
                Etiquetas
            </label>
            <span className='help-text'>Mencioná acá los Temas vinculados a tu idea. Por ejemplo, "Solidaridad", "Transporte" o "Ambiente".
              <br/>
              Escribí cada una y pulsá ENTER o TAB para que se convierta en una etiqueta.
            </span>
            {
              this.state.mode === 'edit' && this.state.tags &&
                  <Tags
                    tags={this.state.tags}
                    forum={forum.id} />
            }
            {
              this.state.mode === 'new' &&
                  <Tags
                    tags={this.state.tags}
                    forum={forum.id} />
            }
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='problema'>
              Problema o necesidad existente
            </label>
            <span className='help-text requerido'>Requerido</span>
            <textarea
              className='form-control'
              required
              rows='6'
              max='5000'
              name='problema'
              value={this.state['problema']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='solucion' >
              Propuesta para solucionar el problema
            </label>
            <span className='help-text requerido'>Requerido</span>
            <textarea
              className='form-control'
              required
              rows='6'
              max='5000'
              name='solucion'
              value={this.state['solucion']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='beneficios'>
              Beneficios que brindará el proyecto al barrio
            </label>
            <span className='help-text requerido'>Requerido</span>
            <textarea
              className='form-control'
              required
              rows='6'
              max='5000'
              name='beneficios'
              value={this.state['beneficios']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>
          {this.state.forum.privileges && this.state.forum.privileges.canChangeTopics && this.state.mode === 'edit' && (
            <div className='form-group'>
              <label htmlFor='state'>Estado</label>
              <span className='help-text requerido'>Agregar una descripción del estado del proyecto</span>
              <select
                className='form-control'
                name='state'
                value={this.state['state']}
                onChange={this.handleInputChange}>
                <option value='pendiente'>Pendiente</option>
                <option value='factible'>Factible</option>
                <option value='no-factible'>No factible</option>
                <option value='integrado'>Integrada</option>
              </select>
            </div>
          )}
          {this.state.forum.privileges && this.state.forum.privileges.canChangeTopics && this.state.mode === 'edit' && (
            <div className='form-group'>
              <label htmlFor='adminComment'>Comentario del moderador:</label>
              <span className='help-text requerido'>Escribir aquí un comentario en el caso que se cambie el estado a "factible", "rechazado" o "integrado"</span>
              <textarea
                className='form-control'
                rows='6'
                max='5000'
                name='adminComment'
                value={this.state['adminComment']}
                onChange={this.handleInputChange}>
              </textarea>
            </div>
          )}
          {this.state.forum.privileges && this.state.forum.privileges.canChangeTopics && this.state.mode === 'edit' && (
            <div className='form-group'>
              <label htmlFor='adminCommentReference'>Link a la propuesta definitiva:</label>
              <span className='help-text requerido'>Escribir aquí el link al proyecto vinculado, en caso que se cambie el estado a "integrado"</span>
              <input
                type='text'
                className='form-control'
                name='adminCommentReference'
                value={this.state['adminCommentReference']}
                onChange={this.handleInputChange} />
            </div>
          )}
          <div className='submit-div'>
            <button type='submit' className='submit-btn'>
              {this.state.mode === 'new' ? 'Enviar tu propuesta' : 'Guardar propuesta'}
            </button>
          </div>

        </form>
      </div>
    )
  }
}

export default userConnector(FormularioPropuesta)
