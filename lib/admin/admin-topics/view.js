/**
 * Module dependencies.
 */
import React from 'react'
import { render as ReactRender } from 'react-dom'
import debug from 'debug'
import t from 't-component'
import List from 'democracyos-list.js'
import moment from 'moment'
import confirm from 'democracyos-confirmation'
import ReactPaginate from 'react-paginate'
import urlBuilder from 'lib/url-builder'
import View from '../../view/view'
import topicStore from '../../stores/topic-store/topic-store'
import { getQueryVariable } from '../../utils'
import template from './template.jade'
import ExportUpdate from './export-update/component'

const log = debug('democracyos:admin-topics')

/**
 * Creates a list view of topics
 */

export default class TopicsListView extends View {

  constructor (topics, forum = null, pagination, uniqAttrs) {
    function toTitleCase (str) {
      return str.replace(
          /\w\S*/g,
          function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
    }
    super(template, {
      topics: topics.filter((t) => t.privileges.canEdit || t.privileges.canDelete),
      moment,
      forum,
      urlBuilder,
      uniqAttrs,
      toTitleCase
    })

    this.forum = forum
    this.pagination = pagination
  }

  switchOn () {
    this.bind('click', '.buscar-tema', this.bound('onbuscarclick'))
    this.bind('keypress', 'input[name=busqueda]', this.bound('onbuscarkeypress'))
    this.bind('click', '.btn.delete-topic', this.bound('ondeletetopicclick'))
    this.list = new List('topics-wrapper', { valueNames: ['topic-title', 'topic-id', 'topic-date'] })
    ReactRender((
      <ExportUpdate
        forum={this.forum} />
    ), this.el[0].querySelector('.export-update'))
    const pages = this.pagination.count / this.pagination.limit
    const currentPage = (+getQueryVariable('page') || 1) - 1
    ReactRender((
      <ReactPaginate
        forcePage={currentPage}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel='<'
        nextLabel='>'
        onPageChange={this.handlePageClick}
        breakLabel={<a href="">...</a>}
        breakClassName={"break-me"}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />
    ), this.el[0].querySelector('.topics-pagination'))
  }

  handlePageClick (e) {
    const { origin, pathname } = window.location
    const search = getQueryVariable('search')
    const searchQuery = search ? `search=${search}&` : ''
    window.location = `${origin}${pathname}?${searchQuery}page=${(e.selected + 1)}`
  }

  ondeletetopicclick (ev) {
    ev.preventDefault()
    const el = ev.delegateTarget.parentElement
    const topicId = el.getAttribute('data-topicid')
    if(!topicId) debugger

    const _t = (s) => t(`admin-topics-form.delete-topic.confirmation.${s}`)

    const onconfirmdelete = (ok) => {
      if (!ok) return

      topicStore.destroy(topicId)
        .catch((err) => {
          log('Found error %o', err)
        })
    }

    confirm(_t('title'), _t('body'))
      .cancel(_t('cancel'))
      .ok(_t('ok'))
      .modal()
      .closable()
      .effect('slide')
      .show(onconfirmdelete)
  }

  onbuscarclick (ev){
    let query = {}

    let textInput = this.el[0].querySelector('input[name=busqueda]')
    if (textInput.value) query.search = textInput.value

    let anioSelect = this.el[0].querySelector('select[name=anio]')
    if (anioSelect.value) query.anio = anioSelect.value

    let barrioSelect = this.el[0].querySelector('select[name=barrio]')
    if (barrioSelect.value) query.barrio = barrioSelect.value

    let stateSelect = this.el[0].querySelector('select[name=state]')
    if (stateSelect.value) query.state = stateSelect.value

    let queryStr = Object.keys(query).map(k => `${k}=${encodeURIComponent(query[k])}`).join('&')
    const { origin, pathname } = window.location
    window.location = `${origin}${pathname}?${queryStr}`
  }

  onbuscarkeypress(ev){
    if (ev.keyCode == 13)
      this.onbuscarclick()
  }
}
