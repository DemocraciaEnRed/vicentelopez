import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'

export default ({ topic, onVote }) => (
  <div className='ext-topic-card ideas-topic-card'>
    <div className='topic-card-info'>
      <div className='topic-creation'>
        <div
          className='avatar'
          style={{
            backgroundImage: `url(${topic.owner.avatar})`
          }}></div>
        <span>{topic.attrs.nombre}</span>
        <span className='date'>
          {moment(topic.createdAt).format('D/M/YY')}
        </span>
      </div>
      <h1 className='topic-card-title'>
        <Link to={topic.url}>
          {topic.mediaTitle}
        </Link>
        <p className='topic-card-description'>
          <Link to={topic.url}>
            {createClauses(topic)}
          </Link>
        </p>
      </h1>
      {
        topic.tags && topic.tags.length > 0 && (
          <div className='topic-card-tags'>
            {topic.tags.slice(0, 12).map((tag) => (
              <a href={ `${window.location.origin + '/propuestas?tag=' + tag}`} key={tag} className='badge badge-default'>{tag}</a>

            ))}
          </div>
        )
      }
    </div>
    <div className='topic-card-footer'>
      <div className='participants'>
        {topic.action.count}
        &nbsp;
        <span className='icon-like' />
      </div>
      {topic.voted && (
        <button disabled className='btn btn-primary'>
          Te gusta
        </button>
      )}
      {!topic.voted && (
        <button
          onClick={() => onVote(topic.id)}
          className='btn btn-primary'>
          Me gusta
        </button>
      )}
    </div>
  </div>
)

function createClauses ({ attrs, clauses }) {
  let div = document.createElement('div')
  let content
  if (!attrs) {
    content = clauses
      .sort(function (a, b) {
        return a.position > b.position ? 1 : -1
      })
      .map(function (clause) {
        return clause.markup
      })
      .join('')
  } else {
    const { problema, solucion, beneficios } = attrs
    content = `${problema} ${solucion} ${beneficios}`
  }
  div.innerHTML = content
  return div.textContent.replace(/\r?\n|\r/g, '').slice(0, 140) + '...'
}
