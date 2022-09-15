import { element } from 'prop-types'
import t from 't-component'
import 'whatwg-fetch'
import Quill from 'quill'
import FormView from '../../form-view/form-view'
import aboutstore from '../../stores/about-store/about-store'
import forumStore from '../../stores/forum-store/forum-store'

import confirm from '../../modals/confirm'
import error from '../../modals/error'

import template from './template.jade'
import { number } from 'yargs'


function createElementFromHTML(htmlString) {
  var div = document.createElement('div')
  div.innerHTML = htmlString.trim()
  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild
}

export default class AboutUs extends FormView {
  constructor () {
    let options = {
      form: { action: `/api/v2/about` }
    }
    super(template, options)
    this.options = options

    aboutstore.findAll().then(this.loadAbout.bind(this))
    forumStore.findOneByName('proyectos').then(this.loadSettings.bind(this))
  }

  loadAbout (faqs) {
    let el = this.find('.panel-group')
    let templatePanel = this.find('.template-panel-group')
    let panelElement = this.find(`.template`)

    faqs.forEach((faq, idx) => {
      const self = this
      let question = faq.question
      let answer = faq.answer

      let panel = createElementFromHTML(templatePanel.html())
      panel.classList.remove('template')
      let panelHead = panel.querySelector('.panel-heading')
      let header = panel.querySelector('.panel-title')
      let collapsePanel = panel.querySelector('.panel-collapsable')
      let body = panel.querySelector('.panel-body')
      let editIcon = panel.querySelector('.glyphicon-edit')
      let deleteIcon = panel.querySelector('.glyphicon-trash')

      panelHead.setAttribute('id', `heading${idx}`)
      header.innerHTML = '+ ' + question
      collapsePanel.setAttribute('id', `collapse${idx}`)
      collapsePanel.classList.add('hidden')
      body.innerHTML = answer

      editIcon.setAttribute('id', `edit-icon${idx}`)
      editIcon.addEventListener('click', function () {
        self.addItemToEdit(faq)
      })

      deleteIcon.setAttribute('id', `delete-icon${idx}`)
      deleteIcon.addEventListener('click', function () {
        self.deleteItem(faq)
      })

      panelHead.addEventListener('click', function () {
        self.showBody(this.id)
      })

      el.append(panel)
    })
    panelElement.addClass('hidden')
  }

  loadSettings (forum) {
    this.forum = forum
  }

  reloadAbout (faqs) {
    let el = this.find('.panel-group')
    let panelElement = this.find(`.template`)
    panelElement.removeClass('hidden')
    el.empty()
    this.loadAbout(faqs)
  }

  editor () {
    let toolbarOptions = [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'link'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }]]
    let options = {
      modules: { toolbar: toolbarOptions },
      theme: 'snow'
    }
    let container = document.getElementById('editAnswer')
    this.editorWy = new Quill(container, options)
  }

  addItemToEdit (element) {
    let question = document.getElementById('question')
    let answer = document.querySelector('.ql-editor')
    question.value = element.question
    answer.innerHTML = element.answer
    let form = document.getElementById('editForm')
    form.setAttribute('action', `/api/v2/about/${element.id}`)
    form.setAttribute('method', 'put')

    var headerOffset = 64
    var elementPosition = form.getBoundingClientRect().top
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  saveItem () {
    const self = this
    let save = this.find('.btn-success')
    let textArea = this.find('#answer')
    let form = this.find('form')
    let question = document.getElementById('question')

    save.on('click', function () {
      if (!question.value) return
      let forumInput = document.querySelector('input[name="forum"]')
      forumInput && forumInput.parentNode.removeChild(forumInput)
      // forumInput && forumInput.remove()
      form.append(`<input type="hidden" name="forum" value="${self.forum.id}" /> `)
      let answer = self.editorWy.container.firstChild.innerHTML
      textArea.attr('value', answer)
    })
  }

  deleteItem (item) {
    confirm({
      text: (`¿seguro queres borrar esta pregunta?`)
    }).accepts(() => {
      fetch(`/api/v2/about/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ forum: this.forum.id })
      }).then(() => { aboutstore.findAll().then(this.reloadAbout.bind(this)).then(this.setDefault()) })
    })
  }

  cancelEdit () {
    const self = this
    let cancel = this.find('.btn-danger')
    cancel.on('click', () => self.setDefault())
  }

  showBody (id) {
    let idHead = id.split('heading')[1]
    let bodyToShow = document.getElementById(`collapse${idHead}`)
    let bodyToHidden = document.querySelectorAll('.panel-collapsable')
    bodyToHidden.forEach((panelBody) => {
      if (panelBody.classList.contains('hidden')) return
      if (panelBody.id.split('collapse')[1] === idHead) return
      panelBody.classList.add('hidden')
    })
    bodyToShow.classList.toggle('hidden')
  }

  setDefault () {
    let textArea = this.find('#answer')
    let forumInput = document.querySelector('input[name="forum"]')
    let form = this.find('form')
    let question = document.getElementById('question')

    this.editorWy.setText('')
    forumInput && forumInput.parentNode.removeChild(forumInput)
    form.attr('action', this.options.form.action)
    form.attr('method', 'post')
    question.value = ''
    textArea.attr('value', '')
  }

  switchOn () {
    this.editor()
    this.saveItem()
    this.cancelEdit()
    this.on('success', this.onsuccess.bind(this))
    this.on('error', this.onerror.bind(this))
  }

  switchOff () {
    this.off()
  }

  onsuccess () {
    this.messages(['Los textos se han guardado exitósamente'], 'success')
    aboutstore.findAll()
      .then(this.reloadAbout.bind(this))
      .then(this.setDefault())
    window.scrollTo(0, 0)

    setTimeout(() => { this.removeMessages() }, 3000)
  }

  onerror () {
    this.messages([t('common.internal-error')])
  }
}
