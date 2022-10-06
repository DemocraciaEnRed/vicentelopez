/* global fetch */
import t from 't-component'
import 'whatwg-fetch'
import FormView from '../../form-view/form-view'
import textStore from '../../stores/text-store'
import template from './template.jade'

export default class ContenidoPortadaView extends FormView {
  constructor () {
    super(template)
    textStore.findAll().then(this.loadTexts.bind(this))
  }

  loadTexts (texts) {
    this.texts = texts
    if (!texts || !texts.length){
      ;
    }else{
      texts.forEach((text) => {
        let el = this.find(`.form-control[data-name='${text.name}']`)
        if (el){
          // ponemos de "name" los ids de los textos
          el.attr('name', text._id)
          el.value(text.text || '')
        }
      })
    }
  }

  textId(textName){
    if (this.texts)
      this.texts.forEach((text) => {
        if(text.name == textName)
          return text._id
      })
  }

  switchOn () {
    this.on('success', this.onsuccess.bind(this))
    this.on('error', this.onerror.bind(this))
  }

  switchOff () {
    this.off()
  }

  onsuccess () {
    this.messages(['Los textos se han guardado exitosamente'], 'success')
    textStore.findAll(true).then(this.loadTexts.bind(this))
    window.scrollTo(0,0);
  }

  onerror () {
    this.messages([t('common.internal-error')])
  }
}
