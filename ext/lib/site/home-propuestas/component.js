import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import userConnector from 'lib/site/connectors/user'
import tagsConnector from 'lib/site/connectors/tags'
import TopicCard from './topic-card/component'

const filters = {
  new: {
    text: 'Más Nuevas',
    sort: '-createdAt',
    filter: (topic) => topic.status === 'open',
    emptyMsg: 'No se encontraron propuestas.'
  },
  pop: {
    text: 'Más Populares',
    sort: '-action.count',
    filter: (topic) => topic.status === 'open',
    emptyMsg: 'No se encontraron propuestas.'
  }
  /*,
  closed: {
    text: 'Archivadas',
    sort: '-action.count',
    filter: (topic) => topic.status === 'closed',
    emptyMsg: 'No se encontraron propuestas.'
  } */
}

const filter = (key, items = []) => items.filter(filters[key].filter)

const ListTools = ({ onChangeFilter, activeFilter }) => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-8 list-tools'>
        <div className='topics-filter'>
          {Object.keys(filters).map((key) => (
            <button
              key={key}
              className={`btn btn-secondary btn-sm ${activeFilter === key ? 'active' : ''}`}
              onClick={() => onChangeFilter(key)}>
              {filters[key].text}
            </button>
          ))}
        </div>
        <a
          href='/formulario-propuesta'
          className='boton-azul btn propuesta'>
          Mandá tu propuesta
        </a>
      </div>
      <span className='alert-duedate'>*Tenés tiempo hasta el 31 de mayo inclusive.</span>
    </div>
  </div>
)

class HomePropuestas extends Component {
  constructor () {
    super()

    this.state = {
      page: 1,
      noMore: false,
      forum: null,
      topics: null,
      tags: null,
      filter: 'pop',
      barrio: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (evt) {
    evt.preventDefault()
    const { value, name } = evt.target
    this.setState({
      [name]: value,
      page: 1
    }, () => this.changeTopics())
  }

  changeTopics () {
    this.fetchTopics(this.state.page)
      .then((res) => {
        this.setState(
          { topics: res
          }
        )
      })
      .catch((err) => { console.error(err) })
  }

  componentDidMount () {
    const u = new window.URLSearchParams(window.location.search)
    if (u.get('sort') === 'new') this.setState({ filter: 'new' })
    forumStore.findOneByName('propuestas')
      .then((forum) => {
        console.log(forum)
        const tags = window.fetch(`/api/v2/topics/tags?forum=${forum.id}`)
          .then((res) => res.json())

        return Promise.all([
          forum,
          this.fetchTopics(this.state.page),
          tags
        ])
      })
      .then(([forum, topics, tags]) => {
        this.setState({
          forum,
          topics: filter(this.state.filter, topics),
          tags: tags.results.tags.filter((tag) => tag.count > 1)
            .map((tag) => tag.tag)
        })
      })
      .catch((err) => { throw err })
  }

  fetchTopics = (page) => {
    const query = {
      sort: this.state.filter === 'new' ? 'newest' : 'popular',
      barrio: this.state.barrio
    }

    const u = new window.URLSearchParams(window.location.search)
    if (u.has('tag')) query.tag = u.get('tag')
    return window.fetch(`/ext/api/propuestas?barrio=${query.barrio}&sort=${query.sort}`)

      .then((res) => res.json())
      .then((res) => res.results.topics)
  }

  paginateForward = () => {
    const page = this.state.page + 1

    this.fetchTopics(page)
      .then((topics) => {
        this.setState({
          topics: this.state.topics.concat(topics),
          noMore: topics.length === 0 || topics.length < 20,
          page
        })
      })
      .catch((err) => { console.error(err) })
  }

  handleFilterChange = (key) => {
    this.setState({ filter: key }, () => {
      this.fetchTopics(1)
        .then((topics) => {
          this.setState({
            topics,
            noMore: topics.length === 0 || topics.length < 20,
            page: 1
          })
        }, () => console.log('pase'))
        .catch((err) => { console.error(err) })
    })
  }

  handleVote = (id) => {
    const { user } = this.props

    if (user.state.rejected) {
      return browserHistory.push({
        pathname: '/signin',
        query: { ref: window.location.pathname }
      })
    }

    topicStore.vote(id, 'apoyo-idea').then((res) => {
      const topics = this.state.topics
      const index = topics.findIndex((t) => t.id === id)
      topics[index] = res
      this.setState({ topics })
    }).catch((err) => { throw err })
  }

  render () {
    const { forum, topics, tags } = this.state

    return (
      <div className='ext-home-ideas'>
        <ListTools
          activeFilter={this.state.filter}
          onChangeFilter={this.handleFilterChange} />
        <div className='container topics-container'>
          <div className='row'>
            <div className='col-md-4 push-md-8 etiquetas'>
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
            </div></div>
          <div className='row'>
            <div className='col-md-4 push-md-8 etiquetas'>
              <h3>Temas</h3>
              {forum && <TagsList tags={tags} forumName={forum.name} without={forum.initialTags} />}
            </div>
            <div className='col-md-8 pull-md-4'>
              {topics && topics.length === 0 && (
                <div className='empty-msg'>
                  <div className='alert alert-success' role='alert'>
                    {filters[this.state.filter].emptyMsg}
                  </div>
                </div>
              )}
              {topics && topics.map((topic) => (
                <TopicCard
                  onVote={this.handleVote}
                  key={topic.id}
                  forum={forum}
                  topic={topic} />
              ))}
              {!this.state.noMore && (
                <div className='more-topics'>
                  <button onClick={this.paginateForward}>Ver Más</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const TagsList = tagsConnector(({ tags, forumName, without }) => {
  const u = new window.URLSearchParams(window.location.search)
  if (without) tags = tags.filter((t) => !~without.indexOf(t))

  return tags && tags.length > 0 && (
    <div className='forum-tags'>
      {tags.map((tag, i) => {
        let active = ''
        let url = `${window.location.origin}/${forumName}?tag=${tag}`

        if (u.has('tag') && u.get('tag') === tag) {
          active = 'active'
          url = `${window.location.origin}/${forumName}`
        }

        return (
          <a
            className={`badge badge-default ${active}`}
            href={url}
            key={`${tag}-${i}`}>
            {tag}
          </a>
        )
      })}
    </div>
  )
})

export default userConnector(HomePropuestas)
