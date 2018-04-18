import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'

const estados = {
  'factible': 'Factible',
  'no-factible': 'No factible'
}

export default ({ topic, onVote }) => (
  <div className='ext-topic-card ideas-topic-card'>
    <div className='topic-card-info'>
      <div className='topic-creation'>
        <span>{topic.attrs.nombre}</span>
        <span
          className={`date ${(topic.attrs.state === 'factible' || topic.attrs.state === 'no-factible') && 'space'}`}>
          {moment(topic.createdAt).format('D/M/YY')}
        </span>
        { 
          (topic.attrs.state === 'factible' || topic.attrs.state === 'no-factible') &&
            (<span className='estado'>{estados[topic.attrs.state]}</span>)
        }
      </div>
      <h1 className='topic-card-title'>
        <Link to={`/propuestas/topic/${topic.id}`}>
          {topic.mediaTitle}
        </Link>
        <p className='topic-card-description'>
          <Link to={`/propuestas/topic/${topic.id}`}>
            {createClauses(topic)}
          </Link>
        </p>
      </h1>
      {
        topic.tags && topic.tags.length > 0 && (
          <div className='topic-card-tags'>
            {topic.tags.slice(0, 12).map((tag, i) => (
              <a href={ `${window.location.origin + '/propuestas?tags=' + tag}`} key={`${tag}-${i}`} className='badge badge-default'>{tag}</a>

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
          disabled={!topic.privileges.canVote}
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
