import React, { Component } from 'react'
import config from 'lib/config'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import textStore from 'lib/stores/text-store'
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
      tags: [],
      adminComment: '',
      adminCommentReference: '',
      state: '',
      availableTags: [],
      selectedTag: '',
      acceptedTerms: false,
      tag: '',
      texts: '',
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
    textStore.findAllDict().then((textsDict) => {
      this.setState({
        texts: textsDict
      })
    }).catch((err) => {
      this.state = {
        texts: {}
      }
    })
    this.getTags()
    if (this.props.params.id) {
      this.setState({ mode: 'edit' })
      topicStore.findOne(this.props.params.id)
        .then((topic) => {
          this.setState({
            titulo: topic.mediaTitle,
            nombre: topic.attrs.nombre,
            domicilio: topic.attrs.domicilio,
            tag: topic.tag,
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
            adminCommentReference: topic.attrs['admin-comment-reference'],
            acceptedTerms: true
          })
        })
        .catch((err) => console.log(err))
    } else {
      this.setState({ mode: 'new' })
    }

    forumStore.findOneByName('proyectos').then((forum) => {
      if (forum.config.propuestasAbiertas) {
        this.setState({ forum })
        return
      }
      window.location = '/'
    }).catch((err) => { console.error(err) })
  }

  handleSubmit (e) {
    e.preventDefault()
    let formData = {
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
      tags: this.state.tags
    }
    if (this.state.forum.privileges && this.state.forum.privileges.canChangeTopics && this.state.mode === 'edit') {
      formData['attrs.admin-comment'] = this.state.adminComment
      formData['attrs.admin-comment-referencia'] = this.state.adminCommentReference
      formData['attrs.state'] = this.state.state
    }
    if (this.state.mode === 'new') {
      this.crearPropuesta(formData)
    } else {
      formData.tag = this.state.tag.id
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
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          window.location.href = `/propuestas/topic/${res.results.topic.id}`
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getTags = () => {
    let theTags = [
      'ACCESIBILIDAD',
      'ADULTOS MAYORES',
      'MEDIO AMBIENTE',
      'ANIMALES',
      'BARRIOS VULNERABLES',
      'BASURA',
      'CIUDADANÍA',
      'CULTURA',
      'DEPORTE',
      'DISCAPACIDAD',
      'EDUCACIÓN',
      'EMPLEO',
      'ESPACIO PÚBLICO',
      'ESPACIOS VERDES',
      'HABITAT',
      'ILUMINACIÓN',
      'INFRAESTRUCTURA',
      'JÓVENES',
      'OFICIOS',
      'NIÑEZ',
      'RAMPAS',
      'RECICLAJE',
      'SALUD',
      'SEGURIDAD',
      'SEMÁFOROS',
      'SEÑALIZACIÓN',
      'SUSTENTABILIDAD',
      'TRANSPORTE',
      'VEREDAS',
      'CARAPACHAY',
      'LA LUCILA',
      'MUNRO',
      'OLIVOS',
      'VICENTE LOPEZ',
      'VILLA ADELINA',
      'VILLA MARTELLI',
      'FLORIDA ESTE',
      'FLORIDA OESTE',
    ]
    // fetch(`/api/v2/all-tags`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     let theTags = res.map(t => {
    //       return t.name
    //     })
    //     theTags = theTags.filter(t => {
    //       return t !== 'Default'
    //     })
    //     this.setState({ availableTags: theTags })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    this.setState({ availableTags: theTags })
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

  toggleTag = (tag) => (e) => {
    // If is inside state.tags, remove from there
    this.setState((state) => {
      let theTags = state.tags
      if(theTags.includes(tag)){
        return { tags: theTags.filter(t => t !== tag)}
      }
         theTags.push(tag)
      return { tags: theTags }
    }, function () {
    console.log(this.state.tags);
})
    return;
  }

  showWholeForm = ()  => {
    this.setState({
      acceptedTerms: true
    })
  }

  hasErrors = () => {
    if (this.state.nombre === '') return true
    if (this.state.domicilio === '') return true
    if (this.state.documento === '') return true
    if (this.state.telefono === '') return true
    if (this.state.email === '') return true
    if (this.state.titulo === '') return true
    if (this.state.barrio === '') return true
    if (this.state.problema === '') return true
    if (this.state.solucion === '') return true
    if (this.state.beneficios === '') return true
    return false;

  }

  hasErrorsField = (field) => {
    if(this.state[field] === '') return true
    return false;
  }

  handleCheckboxInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentWillUpdate (props, state) {
    if (this.props.user.state.rejected) {
      browserHistory.push('/signin?ref=/formulario-propuesta')
    }
  }

  render () {
    const { forum, texts } = this.state

    if (!forum) return null
    if(forum && forum.config.propuestasAbiertas || (this.state.forum.privileges && this.state.forum.privileges.canChangeTopics)) {
      return (
      <div className='form-propuesta'>
        <div className='propuesta-header'>
          <h1 className='text-center'>PRESUPUESTO PARTICIPATIVO </h1>
          <p>¡Acá podes presentar tu propuesta para el presupuesto participativo!</p>
          {//<p>¡Gracias a todos y todas por participar!</p>
          }
        </div>
        {/* FORMULARIO GOES BEHIND THIS */}
        <form className='wrapper' onSubmit={this.handleSubmit}>
          <p className="more-info">Si querés conocer más sobre el proceso y qué propuestas podés presentar, hacé click <Link
              to='/s/acerca-de'
              className="">
              AQUÍ
            </Link></p>
          <div className="bar-section">
            <p className="section-title">Tus datos personales</p>
            <p className="section-subtitle">Todos estos datos son confidenciales</p>
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
              maxLength='128'
              name='nombre'
              value={this.state['nombre']}
              placeholder=""
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
              maxLength='200'
              name='domicilio'
              placeholder=""
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
              maxLength='50'
              name='documento'
              placeholder=""
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
              maxLength='50'
              name='telefono'
              placeholder=""
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
              maxLength='128'
              name='email'
              placeholder=""
              value={this.state['email']}
              onChange={this.handleInputChange} />
          </div>
           <div className="bar-section">
            <p className="section-title">Acerca de la propuesta</p>
            </div>
            <div className="upload-info-container">
              <p className="important">Requisitos para que las propuestas sean factibles:</p>
              {texts && <div dangerouslySetInnerHTML={{__html:texts['propuestas-reglamento-text']}}/>}
              {/* <ul>
                <li>Serán factibles las propuestas de obras o equipamiento para entidades sin fines de lucro (polideportivos, sociedades de fomento,  centros de jubilados, espacios públicos, escuelas de gestión pública, centros de salud    municipales, etc).</li>
                <li>Serán factibles campañas o talleres sobre un tema específico cuya ejecución sólo sea durante el 2023.</li>
                <li>No serán factibles las propuestas que impliquen un gasto corriente (recursos humanos que incrementen la planta municipal).</li>
                <li>Cada propuesta se debe presentar para un solo barrio. (No se puede presentar una propuesta para todo el Municipio)</li>
                <li>El presupuesto máximo de la propuesta no puede superar los $ 6.000.000.</li>
              </ul> */}
              <hr />
            { !this.state.acceptedTerms ?
              <section>
              <p className="pre-fake-checkbox"><b>Para comenzar a completar el formulario, debe aceptar los términos y condiciones</b></p>
               <div onClick={this.showWholeForm} className='fake-checkbox'>
                Acepto los términos y condiciones
              </div>
              </section> :
              <p className="acepted-terms"><b>¡Gracias por aceptar los términos y condiciones!</b></p>

            }
          </div>
          {this.state.acceptedTerms &&
          <section>
          <div className='form-group'>
            <label className='required' htmlFor='titulo'>
              Título
            </label>
            <p className="help-text">Elegí un título que ayude a reconocer fácilmente el proyecto (Max. 220 caracteres)</p>
            <input
              className='form-control'
              required
              type='text'
              maxLength='220'
              name='titulo'
              value={this.state['titulo']}
              onChange={this.handleInputChange} />
              {
                this.state['titulo'].length > 220 && <p class="text-danger">¡El título es muy largo! Por favor, elija un título mas corto!</p>
              }
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='barrio'>
              Barrio
            </label>
            <p className="help-text">¿En que barrio impacta el proyecto?</p>
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
            <p className='help-text'>Elegí los temas relacionados a tu propuesta </p>
            {
              this.state.mode === 'edit' && this.state.tags &&
                <ul className="tags">
                {
                  this.state.availableTags.map((t, index) => {
                    return (
                      <li key={index}><span onClick={this.toggleTag(t)} value={t} className={this.state.tags.includes(t) ? 'tag active' : 'tag'}>{t}</span></li>
                    )
                  })
                }
                </ul>
            }
            {
              this.state.mode === 'new' &&
                <ul className="tags">
                {
                  this.state.availableTags.map((t, index) => {
                    return (
                      <li key={index}><span onClick={this.toggleTag(t)} value={t} className={this.state.tags.includes(t) ? 'tag active' : 'tag'}>{t}</span></li>
                    )
                  })
                }
                </ul>
            }
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='problema'>
              Problema o necesidad existente
            </label>
            <p className='help-text'>¿Qué problemas querés resolver? ¿a quiénes afecta? ¿Cómo?</p>
            <textarea
              className='form-control'
              required
              rows='6'
              maxLength='5000'
              name='problema'
              value={this.state['problema']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='solucion' >
              La propuesta de solución
            </label>
            <p className='help-text'>Describí la propuesta y cómo va a solucionar el problema</p>
            <textarea
              className='form-control'
              required
              rows='6'
              maxLength='5000'
              name='solucion'
              value={this.state['solucion']}
              onChange={this.handleInputChange}>
            </textarea>
          </div>
          <div className='form-group'>
            <label className='required' htmlFor='beneficios'>
              Beneficios que brindará el proyecto al barrio
            </label>
            <p className='help-text'>¿Como ayuda este proyecto al barrio? ¿Quiénes se benefician?</p>
            <textarea
              className='form-control'
              required
              rows='6'
              maxLength='5000'
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
                className='form-control special-height'
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
          <p className="small-banner">La propuesta será revisada por el equipo de la Municipalidad y notificará su factilibilidad a la brevedad. Si la propuesta es factible pasará a la etapa de votación.</p>
          {
             this.hasErrors() &&
             <div className="error-box">
             <ul>
                  {this.hasErrorsField('nombre') && <li className="error-li">El campo "Nombre y apellido" del representante no puede quedar vacío</li> }
                  {this.hasErrorsField('domicilio') && <li className="error-li">El campo "Domicilio" del representante no puede quedar vacío</li> }
                  {this.hasErrorsField('documento') && <li className="error-li">El campo "Documento" del representante no puede quedar vacío</li> }
                  {this.hasErrorsField('telefono') && <li className="error-li">El campo "Telefono" del representante no puede quedar vacío</li> }
                  {this.hasErrorsField('email') && <li className="error-li">El campo "Email" del representante no puede quedar vacío</li> }
                  {this.hasErrorsField('titulo') && <li className="error-li">El campo "Título" de la propuesta no puede quedar vacío</li> }
                  {this.hasErrorsField('barrio') && <li className="error-li">El campo "Barrio" de la propuesta no puede quedar vacío</li> }
                  {this.hasErrorsField('problema') && <li className="error-li">El campo "Problema" de la propuesta no puede quedar vacío</li> }
                  {this.hasErrorsField('solucion') && <li className="error-li">El campo "Solución" de la propuesta no puede quedar vacío</li> }
                  {this.hasErrorsField('beneficios') && <li className="error-li">El campo "Beneficios" de la propuesta no puede quedar vacío</li> }
             </ul>
             </div>
          }
          <div className='submit-div'>
            { !this.hasErrors() &&
              <button type='submit' className='submit-btn'>
                {this.state.mode === 'new' ? 'Enviar la propuesta' : 'Guardar la propuesta'}
              </button>
            }
          </div>
          {/* <p className="more-info add-color">¡Luego de mandarla, podes volver a editarla!</p> */}
          </section>
          }
        </form>
      </div>
    )

    } return (
      <div className='form-propuesta'>
        <div className='propuesta-header'>
          <h1 className='text-center'>PRESUPUESTO PARTICIPATIVO 2020</h1>
          {/* <p>¡Acá vas a poder subir tu propuesta para el presupuesto participativo!</p> */}
          <p>¡Gracias a todos y todas por participar!</p>
        </div>
        {/* ALERT PARA FIN DE ETAPA */}
        <alert className='alert alert-info cronograma'>
          <Link style={{ display: 'inline' }} to='/s/acerca-de?scroll=cronograma'>
            La etapa de envío de propuestas ya ha sido cerrada. ¡Muchas gracias por participar!
          </Link>
        </alert>
     </div>
    )
  }
}

export default userConnector(FormularioPropuesta)
