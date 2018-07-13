import React, { Component } from 'react'
import { Link } from 'react-router'

const states = [
  { 'name': 'estimado', 'value': 'preparacion' },
  { 'name': 'asignado', 'value': 'compra' },
  { 'name': 'asignado', 'value': 'ejecucion' },
  { 'name': 'ejecutado', 'value': 'finalizado' }
]

export default class Content extends Component {
  render () {
    function createClauses (clauses) {
      return {
        __html: clauses
          .sort(function (a, b) {
            return a.position > b.position ? 1 : -1
          })
          .map(function (clause) {
            return clause.markup
          })
          .join('')
          .replace(/<a/g, '<a rel="noopener noreferer" target="_blank"')
      }
    }
    return (
      <div className='entry-content topic-article-content'>
        { this.props.topicState !== 'factible' && this.props.topicState !== 'no-ganador' && (
          <div className='topic-article-content proyecto-ganador'>
            <div className='box-header'>
              <span>Proyecto ganador</span>
            </div>
            <div className='box-content'>
              <div className='box-content-item'>
                <span className='box-content-title'>Presupuesto {states.find((st) => st.value === this.props.presupuesto).name}:</span>
                <span className='box-content-title'>{this.props.budget}</span>
              </div>
              <div className='box-content-item'>
                <span className='box-content-title'>Cantidad de votos:</span>
                <span className='box-content-info'>{this.props.votos}</span>
              </div>
            </div>
            <div className='box-footer'>
              <span className='hashtag'>#ForosVecinalesVteLopez</span>
            </div>
            <Link
              to='/s/datos'
              className='ver-resu'>
                  Ver los resultados de la votación aquí
            </Link>
          </div>
        )
        }

        <div
          className='clauses'
          dangerouslySetInnerHTML={createClauses(this.props.clauses)} />
      </div>
    )
  }
}
