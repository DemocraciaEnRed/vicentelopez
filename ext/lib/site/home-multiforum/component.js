import React, { Component } from 'react'
import {Link} from 'react-router'
import config from 'lib/config'
import Footer from 'ext/lib/site/footer/component'
import Barrios from 'ext/lib/site/barrios/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Carrusel from 'ext/lib/site/carrusel/component'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'

export default class HomeMultiforumOverride extends Component {
  constructor(props){
    super(props)
    this.state = {
      forums: null
    }
  }

  componentWillMount () {
    forumStore.findAll().then((forums) => {
      this.setState({ forums: forums })
    })
  }

  render () {
    const { topics, forums } = this.state
    return (
      <div className='ext-home-multiforum'>
        <BannerForoVecinal />
        <ThumbsVoto />
        <div className='carrusel-seccion container-fluid'>
          <div className='row'>
            <div
              className='col-xs-10 offset-xs-1 col-md-8 offset-md-2 cont-barrio'>
              <div className='titulo-verde' >
                <h2>Proyectos</h2>
              </div>
            </div>
          </div>
          <Carrusel />
        </div>
        <section className='seccion-barrios container'>
          <div className='row'>
            <div className='col-xs-10 offset-xs-1 col-md-8 offset-md-2 cont-barrio'>
              <div className='barrio-verde'>
                <h2>BARRIOS</h2>
              </div>
            </div>
          </div>
        </section>
        <Barrios forums={forums}/>
        <Footer />
      </div>
    )
  }
}
