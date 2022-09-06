/* global fetch */
import t from 't-component'
import 'whatwg-fetch'
import FormView from '../../form-view/form-view'
import forumStore from '../../stores/forum-store/forum-store'
import template from './template.jade'

export default class AdminSettings extends FormView {
  constructor (forum) {
    var options = {
      form: { action: `/api/forum/${forum.id}/config` }
    }
    super(template, options)
    this.options = options
    forumStore.findOneByName('proyectos').then(this.loadSettings.bind(this))
  }

  loadSettings (forum) {
    this.forum = forum
    let stageSettings = forum.config

    if (!stageSettings || !Object.keys(stageSettings).length) {
      ;
    } else {
      Object.entries(stageSettings).forEach(([k, v]) => {
        let el = this.find(`.form[data-name='${k}']`)
        if (el) {
          el.attr('name', k)
          el.value(v || '')
        }
      })
    }
    this.onShow()
  }

  switchOn () {
    this.on('success', this.onsuccess.bind(this))
    this.on('error', this.onerror.bind(this))
  }

  onShow () {
    this.onLinkState()
  }

  switchOff () {
    this.off()
  }

  onsuccess () {
    this.messages(['Los cambios se han guardado exitósamente'], 'success')
    forumStore.findOneByName('proyectos').then(this.loadSettings.bind(this)).then(this.onShow())
    window.scrollTo(0, 0)
  }

  onerror () {
    this.messages([t('common.internal-error')])
  }

  onLinkState () {
    let votationState = this.find(".form[data-name='votacionesAbiertas']")
    let linkText = this.find('.linkVotation')

    !votationState[0].checked && linkText.addClass('hidden')

    votationState.on('change', function (params) {
      linkText.toggleClass('hidden')
    })
  }
}
