import { prop } from 'component-dom/lib/attributes'
import React from 'react'

export default function GenericBanner(props) {
  return (
    <div className="row festejando">
      <div className="container">
          <h2 className="festejando-title">
            {props.title}
            </h2>
          <h2 className="festejando-p">{props.subtitle}</h2>
          
      </div>
    </div>
  )
}