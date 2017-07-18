import React from 'react'
import { browserHistory } from 'react-router'

export default ({ topic, forum }) => {
  console.log(topic, forum)
  const topicUrl = `${window.location.origin}${topic.url}`
  const twitterDesc = encodeURIComponent(`Mirá el proyecto que quiero para mi barrio ${topicUrl}`)
  return (
    <div className='ext-topic-card' onClick={linkTopic(topic, forum)}>
      <div
        className='portada topic-card-cover'
        style={{ backgroundImage: `url(${topic.coverUrl})` }}>
          {topic.attrs && topic.attrs.budget && (
            <p className='budget'>{prettyPrice(topic.attrs.budget)}</p>
          )}
      </div>
      <div className='topic-card-info'>
        <div className='topic-card-body'>
          <h1 className='topic-card-title'>
            {topic.mediaTitle}
          </h1>
          {topic.attrs && topic.attrs.description && (
            <p className='topic-card-description'>
              {topic.attrs.description}
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
            {topic.tags && topic.tags.map((t) => `#${t}`).join(' ')}
          </div>
        </div>
      </div>
    </div>
  )
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

function linkTopic(topic, forum) {
  return () => { browserHistory.push(`/${forum.name}/${topic.id}`) }
}
