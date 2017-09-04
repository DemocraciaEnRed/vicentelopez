import React from 'react'
import { browserHistory, Link } from 'react-router'
import urlBuilder from 'lib/url-builder'

export default ({ topic, forum }) => {
  const topicUrl = `${window.location.origin}${topic.url}`
  const twitterDesc = encodeURIComponent(`Mirá el proyecto que quiero para mi barrio ${topicUrl}`)
  const linkTopic = () => { browserHistory.push(`/${forum.name}/topic/${topic.id}`) }
  return (
    <div className='ext-topic-card' onClick={linkTopic}>
      <div
        className='portada topic-card-cover'
        style={{ backgroundImage: `url(${topic.coverUrl})` }}>
          {topic.attrs && topic.attrs.budget && (
            <p className='budget'>{prettyPrice(topic.attrs.budget)}</p>
          )}
      </div>
      <div className='topic-card-info'>
        <div className='topic-card-body'>
          <h4 className='topic-card-title'>
            {topic.mediaTitle}
          </h4>
          <h5 className='topic-card-forum'>
            {forum.title}
          </h5>
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
            {
              topic.tags && topic.tags.map((tag, i) => <a onClick={linkTags(forum.name, tag)} key={i}>#{tag}</a>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function linkTags (forum, tag) {
  return (e) => {
    e.stopPropagation()
    window.location = `/${forum}?tag=${tag}`
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
