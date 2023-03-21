import t from 't-component'
import 'whatwg-fetch'
import Sortable from 'sortable-dnd'
import Richtext from 'lib/richtext/richtext'
import FormView from '../../form-view/form-view'
import dataFilesStore from '../../stores/data-file-store/data-files-store'
import forumStore from '../../stores/forum-store/forum-store'

import confirm from '../../modals/confirm'

import template from './template.jade'

function createElementFromHTML (htmlString) {
  let div = document.createElement('div')
  div.innerHTML = htmlString.trim()
  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild
}

export default class Datafile extends FormView {
  constructor () {
    let options = {
      form: { action: `/api/v2/data-file` }
    }
    super(template, options)
    this.options = options

    dataFilesStore.findAll().then(this.loadDataFile.bind(this))
    forumStore.findOneByName('proyectos').then(this.loadSettings.bind(this))
  }

  loadDomElements(){
    this.items = [...document.querySelectorAll('.form-control')].map(el=>el.name)
    
    this.items.forEach(item => this[item] = document.getElementById(item))
    
    this.panelGroup = this.find('.panel-group-data')
    this.panelElement = this.find(`.template`)
    this.alert = document.querySelector('.alertText')


    this.sorter = this.find('.createSortable')
    this.saveSort = this.find('.save-order')
    this.cancelSort = this.find('.cancel-order')


  }

  loadDataFile (files) {
    let templatePanel = this.find('.template-panel-group')

    files.forEach((file, idx) => {
      const self = this
      let title = file.title

      let panel = createElementFromHTML(templatePanel.html())
      panel.classList.remove('template')
      let panelHead = panel.querySelector('.panel-heading')
      let header = panel.querySelector('.panel-title')
      let editIcon = panel.querySelector('.glyphicon-edit')
      let deleteIcon = panel.querySelector('.glyphicon-trash')

      panelHead.setAttribute('id', `heading${idx}`)
      header.innerHTML = '+ ' + title

      editIcon.setAttribute('id', `edit-icon${idx}`)
      editIcon.addEventListener('click', () => {
        this.addItemToEdit(file)
      })

      deleteIcon.setAttribute('id', `delete-icon${idx}`)
      deleteIcon.addEventListener('click', () => {
        this.deleteItem(file)
      })

      panel.classList.add('list')
      panel.setAttribute('id', file.id)

      self.panelGroup.append(panel)
    })
    this.panelElement.addClass('hidden')
    this.iconSort = this.find('.glyphicon-sort')

  }

  loadSettings (forum) {
    this.forum = forum
  }

  reLoadDataFile (files) {
    this.panelElement.removeClass('hidden')
    this.panelGroup.empty()
    this.loadDataFile(files)
  }



  addItemToEdit (element) {
    let form = document.getElementById('editForm')
 
    this.alert.parentNode.classList.remove('hidden')
    this.alert.innerHTML = ` Estás editando "${element.title}", si querés crear uno presioná cancelar`
    
    this.items.forEach(item => this[item].value = element[item])
    
    form.setAttribute('action', `/api/v2/data-file/${element.id}`)
    form.setAttribute('method', 'put')

    let headerOffset = 64
    let elementPosition = form.getBoundingClientRect().top
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  saveItem () {
    const self = this
    let save = this.find('.btn-success')
    this.formEditor = this.find('form')
    this.title = document.getElementById('title')

    save.on('click', function () {
      if (!self.title.value) return
      let forumInput = document.querySelector('input[name="forum"]')
      forumInput && forumInput.parentNode.removeChild(forumInput)
      self.formEditor.append(`<input type="hidden" name="forum" value="${self.forum.id}" /> `)
    })
  }

  deleteItem (item) {
    confirm({
      text: (`¿seguro queres borrar esta tarjeta?`)
    }).accepts(() => {
      fetch(`/api/v2/data-file/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ forum: this.forum.id })
      }).then(() => { dataFilesStore.findAll().then(this.reLoadDataFile.bind(this)).then(this.setDefault()) })
    })
  }

  cancelEdit () {
    const self = this
    let cancel = this.find('.btn-danger')
    cancel.on('click', () => self.setDefault())
  }



  setDefault () {
    let forumInput = document.querySelector('input[name="forum"]')

    forumInput && forumInput.parentNode.removeChild(forumInput)
    this.formEditor.attr('action', this.options.form.action)
    !this.alert.parentNode.classList.contains('hidden') && this.alert.parentNode.classList.add('hidden')
    this.formEditor.attr('method', 'post')

    this.items.forEach(item => this[item].value = '')
    
  }

  cancelSortable () {
    this.cancelSort.on('click', () => {
      this.list.options.disabled = true
      this.sorter.removeClass('hidden')
      this.cancelSort.addClass('hidden')
      this.saveSort.addClass('hidden')
      this.iconSort.addClass('hidden')
      dataFilesStore.findAll().then(this.reLoadDataFile.bind(this))
    })
  }

  sortSave () {
    this.saveSort.on('click', () => {
      let list = Array.from(document.querySelectorAll('.list'))
      let data = list.map((file, idx) => {
        return {
          'id': file.id,
          'order': idx
        }
      })
      fetch(`/api/v2/data-file-update-order`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ forum: this.forum.id, data })
      }).then(
        this.list.options.disabled = true,
        this.sorter.removeClass('hidden'),
        this.cancelSort.addClass('hidden'),
        this.saveSort.addClass('hidden'),
        this.iconSort.addClass('hidden'),
        this.messages(['El orden se ha guardado exitósamente'], 'success')
      )
    })
  }

  createSortTable () {
    this.sorter.on('click', () => {
      this.list.options.disabled = false
      this.sorter.addClass('hidden')
      this.cancelSort.removeClass('hidden')
      this.saveSort.removeClass('hidden')
      this.iconSort.removeClass('hidden')
      this.cancelSortable()
      this.sortSave()
    })
  }

  switchOn () {
    this.loadDomElements()
    this.list = new Sortable(document.querySelector('.panel-group-data'), { disabled: true })
    this.createSortTable()
    this.saveItem()
    this.cancelEdit()
    this.on('success', this.onsuccess.bind(this))
    this.on('error', this.onerror.bind(this))
  }

  switchOff () {
    this.off()
  }

  onsuccess () {
    this.messages(['Los textos se han guardado exitosamente'], 'success')
    dataFilesStore.findAll()
      .then(this.reLoadDataFile.bind(this))
      .then(this.setDefault())
    window.scrollTo(0, 0)

    setTimeout(() => { this.removeMessages() }, 3000)
  }

  onerror () {
    this.messages([t('common.internal-error')])
  }
}
