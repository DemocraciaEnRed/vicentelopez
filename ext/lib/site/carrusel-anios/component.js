import React, { Component } from 'react'
import Flickity from 'flickity'

export default class CarruselAnios extends Component{
  constructor(props){
    super(props)
    this.flkty = null
  }

  componentDidMount (v) {
    const carouselgraph = this.refs.carouselgraph;
    const options = {
        initialIndex:1,
        pageDots: false,
        contain: true
    }
    this.flkty = new Flickity(carouselgraph, options)
  }

  render() {
    return (
      <div className='carousel-distribucion-proyectos'>
        <div ref='carouselgraph' >
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2012.svg" />
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2013.svg" />
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2014.svg" />
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2015.svg" />
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2016.svg" />
          </div>
        </div>
        <img className="refe" src="../ext/lib/site/static-pages/refes.svg" alt=""/>
      </div>
    )
  }
}
