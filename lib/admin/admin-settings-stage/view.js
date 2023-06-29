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
    forumStore.findOneByName('proyectos').then(this.loadSettings.bind(this)).then(this.filterFill.bind(this))
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
          el.hasClass('pseudo-radio') && v === true && el[0].parentNode.parentNode.classList.add('active')
        }
      })
    }
    this.onShow()
  }

  switchOn () {
    this.votationState()
    this.createEventYear()
    this.disableEnterForm()
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

  disableEnterForm(){
    let form = document.querySelector('form')
    form.onkeydown = (e)=>{
      let key = e.charCode || e.keyCode || 0;     
      if (key == 13) {
        e.preventDefault();
      }
    }
  }

  onLinkState () {
    let votationState = this.find(".form[data-type='descubrible']")
    votationState.forEach(element => {
      let linkText = this.find('.'+ element.dataset.link)

      !element.checked && linkText.addClass('hidden')

      element.addEventListener('change', function (params) {
        linkText.toggleClass('hidden')
      })
  
    })

  }

  createEventYear(){
    this.filterYear = document.querySelector("input[data-name='filterYear']")
    this.inputNumber = document.querySelector(".comboboxChips input")
    this.comboboxChips = document.querySelector(".comboboxChips")
    this.comboboxChips.addEventListener('click', ()=>{
      this.inputNumber.focus()
    })
    this.inputNumber.addEventListener('keyup',(event)=>this.inputFilters(event))
  }

  filterFill(){
    
    
    this.comboboxChips.innerHTML=''
    if(this.filterYear.value.length>0){this.filterYear.value.split(',').forEach(year => {
      let div = document.createElement("div")
      let remove = document.createElement("span")
      div.classList.add('chip')
      remove.classList.add('glyphicon')
      remove.classList.add('glyphicon-remove')
      remove.addEventListener('click', (event)=>this.deleteFilter(year))
      div.append(year)
      div.append(remove)
      this.comboboxChips.append(div, this.inputNumber)
    })}else{this.comboboxChips.append(this.inputNumber)}
  }

  inputFilters (event) {
    console.log(event.target.dataset);
    if(event.keyCode === 188 || event.keyCode === 13){
      if(event.target.value > 1900 && event.target.value < 9999){
        let arrayFilter = this.filterYear.value.length > 0 ? this.filterYear.value.split(',') : []
        if (!arrayFilter.includes(event.target.value)) arrayFilter.push(event.target.value)
        this.filterYear.value = arrayFilter.sort().toString()
        this.filterFill()
        event.target.value=''
        event.target.focus()
      }
    }else if(event.keyCode === 8 && (!event.target.dataset.oldval || event.target.dataset.oldval.length < 1) ){
      let filterYeararray = this.filterYear.value.split(',')
      this.deleteFilter(filterYeararray.pop())
      event.target.focus()   
    }
    event.target.setAttribute('data-oldVal', event.target.value)
  }

  deleteFilter(yearToDelete){
    let filterYearfiltred = this.filterYear.value.split(',').filter(year => year !== yearToDelete)
    this.filterYear.value = filterYearfiltred
    this.filterFill()
  }

  votationState () {
    let votationState = document.querySelectorAll('.pseudo-radio')
    votationState.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        if (!event.target.checked) event.target.checked = true
        event.target.parentNode.parentNode.classList.add('active')
        votationState.forEach((toChange) => {
          if (toChange.id === event.target.id) return
          toChange.parentNode.parentNode.classList.remove('active')
          toChange.checked = false
        })
      })
    })
  }
}
