import React, { Component } from 'react'
import forumStore from 'lib/stores/forum-store/forum-store'
import ForumTagsSearch from 'lib/admin/admin-topics-form/tag-autocomplete/component'
import Attrs from 'lib/admin/admin-topics-form/attrs/component'

const PROPOSALS_FORUM_NAME = 'anteproyectos'

export default class Create extends Component {
  constructor () {
    super()

    this.state = {
      forum: null,
      title: '',
      body: '',
      tags: '',
      topic: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (evt) {
    evt.preventDefault()
    const { target } = evt
    const { value, name } = target

    this.setState({ [name]: value })
  }

  componentWillMount () {
    forumStore.findOneByName(PROPOSALS_FORUM_NAME).then((forum) => {
      this.setState({ forum })
    }).catch((err) => { console.error(err) })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { title, body } = this.state

    const formData = {
      title,
      body,
      tag: '59665fe8724f61003327eb2f'
    }

    window.fetch(`/ext/api/proposals`, {
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
      <div className='wrapper'>
        <h1 className='text-center'>Crear anteproyecto</h1>
        <form className='form-control' onSubmit={this.handleSubmit}>
          <Attrs forum={forum} />
          <div >Tags</div >
          <div className='tags-autocomplete'>
            <ForumTagsSearch
              tags={this.topic && this.topic.tags && this.topic.tags}
              initialTags={forum.initialTags}
              forum={forum.id} />
          </div>
          <div>
            <div>
              <label className='required' htmlFor='' />
              <div>
                <input type='hidden'
                  name='tag'
                  value={this.state.tag} />
              </div>
            </div>
            <div >
              <label className='required' htmlFor='' />
              <input type='hidden' name='forum' value={forum.id} />
            </div>
            <div className='form-group kind-string'>
              <label className='required' htmlFor=''>Título</label>
              <input className='form-control'
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleInputChange} />
            </div>
            <div className='form-group kind-string'>
              <label className='required' htmlFor=''>Cuerpo</label>
              <textarea className='form-control' rows='6'
                name='body'
                value={this.state.body}
                onChange={this.handleInputChange} />
            </div>
            <div>
              <button type='submit'
                name='formSend'
                onChange={this.handleInputChange}
                value={this.formSend}>
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
