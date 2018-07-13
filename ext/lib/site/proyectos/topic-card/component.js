import React from 'react'
import { browserHistory, Link } from 'react-router'
import urlBuilder from 'lib/url-builder'

const barrios = [
  {
    'name': 'carapachay',
    'title': 'Carapachay'
  },
  {
    'name': 'florida-este',
    'title': 'Florida Este'
  },
  {
    'name': 'florida-oeste',
    'title': 'Florida Oeste'
  },
  {
    'name': 'la-lucila',
    'title': 'La Lucila'
  },
  {
    'name': 'olivos',
    'title': 'Olivos'
  },
  {
    'name': 'munro',
    'title': 'Munro'
  },
  {
    'name': 'vicente-lopez',
    'title': 'Vicente Lopez'
  },
  {
    'name': 'villa-adelina',
    'title': 'Villa Adelina'
  },
  {
    'name': 'villa-martelli',
    'title': 'Villa Martelli'
  }
]

const states = [
  { 'name': 'No ganador', 'value': 'no-ganador' },
  { 'name': 'En preparación', 'value': 'preparacion' },
  { 'name': 'En proceso de compra', 'value': 'compra' },
  { 'name': 'En ejecución', 'value': 'ejecucion' },
  { 'name': 'Finalizado', 'value': 'finalizado' }
]

export default ({ topic, forum }) => {
  const topicUrl = `${window.location.origin}${topic.url}`
  const twitterDesc = encodeURIComponent(`Mirá el proyecto que quiero para mi barrio ${topicUrl}`)
  const linkTopic = () => { browserHistory.push(`/proyectos/topic/${topic.id}`) }
  return (
    <div className='ext-topic-card' onClick={linkTopic}>
      <div
        className='portada topic-card-cover'
        style={{ backgroundImage: `url(${topic.coverUrl ? topic.coverUrl : 'ext/lib/site/VialCosteroVteLopezImgBanner.jpg'})` }}>
        {topic.attrs && topic.attrs.budget && topic.attrs.budget !== 0 &&
          <p className='budget'>{prettyPrice(topic.attrs.budget)}</p>
        }
        {topic.attrs && topic.attrs.state && topic.attrs.anio !== '2019' && (
          <p className='winner'>{states.find((st) => st.value === topic.attrs.state).name}</p>
        )}
      </div>
      <div className='topic-card-info'>
        <div className='topic-card-body'>
          <h4 className='topic-card-title'>
            {topic.mediaTitle.length > 70
              ? topic.mediaTitle.substring(0, 70).concat('...')
              : topic.mediaTitle
            }
          </h4>
          <h5 className='topic-card-forum'>
            {barrios.find((barrio) => barrio.name === topic.attrs.barrio).title}
          </h5>
          {topic.attrs && topic.attrs.description && (
            <p className='topic-card-description'>
              {topic.attrs.description.length > 100
                ? topic.attrs.description.substring(0, 100).concat('...')
                : topic.attrs.description
              }
            </p>
          )}
        </div>
        <div className='topic-card-footer'>
          <div className='social-links'>
            <div className='facebook-icon'></div>
            <div className='twitter-icon'></div>
            <div className='wp'></div>
            <div className='linkclipboard-icon'></div>
          </div>
          <div className='topic-tags'>
            {
              topic.tags && topic.tags.map((tag, i) => <a onClick={linkTags('proyectos', tag, topic.attrs.anio)} key={i}>#{tag}</a>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function linkTags (forum, tag, anio) {
  const currentAnio = '2019'
  const url = anio === currentAnio ? `/${forum}?tag=${tag}` : `/${forum}?tag=${tag}&stage=seguimiento`
  return (e) => {
    e.stopPropagation()
    window.location = url
  }
}

function prettyPrice (number) {
  if (!number) number = 1
  return `$${prettyDecimals(number)}`
}

function prettyDecimals (number) {
  if (typeof number === 'number') number = String(number)
  if (typeof number !== 'string') return ''
  if (number.length <= 3) return number

  number = number.split('').reverse().join('').match(/[0-9]{1,3}/g)

  return (number || [])
    .join('.')
    .split('')
    .reverse()
    .join('')
}

function handleLinkClick (evt) {
  const link = evt.currentTarget
  evt.preventDefault()
  window.open(link.getAttribute('href'), '_blank')
}
