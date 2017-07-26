import React, { Component } from 'react'
import Flickity from 'flickity'

export default class CarruselAnios extends Component{
  constructor(props){
    super(props)
    this.flkty = null
  }

  componentDidMount () {
    const carouselgraph = this.refs.carouselgraph;
    const options = {
        initialIndex: 0,
        accessibility: true,
        pageDots: false,
        wrapAround: true,
        contain: true
    }

    this.flkty = new Flickity(carouselgraph, options)
  }

  render(){
    return (
      <div className='carousel-distribucion-proyectos'>
        <div ref='carouselgraph' >
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2012.svg" alt=""/>
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2013.svg" alt=""/>
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2014.svg" alt=""/>
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2015.svg" alt=""/>
          </div>
          <div className="carousel-cell">
            <img className="graph" src="../ext/lib/site/static-pages/2016.svg" alt=""/>
          </div>
        </div>
        <img className="refe" src="../ext/lib/site/static-pages/refes.svg" alt=""/>
      </div>
    )
  }
}
