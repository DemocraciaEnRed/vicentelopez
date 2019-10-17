import React, { Component } from 'react'
import {Link} from 'react-router'
import config from 'lib/config'
import Footer from 'ext/lib/site/footer/component'
import Barrios from 'ext/lib/site/barrios/component'
import ForosEnDatos from 'ext/lib/site/foros-en-datos/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Proyectos from 'ext/lib/site/proyectos/component'
// import ProyectosFactibles from 'ext/lib/site/proyectosFactibles/component'
import ProyectosGanadores from 'ext/lib/site/proyectosGanadores/component'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'

export default class HomeMultiforumOverride extends Component {
  componentDidMount () {
    this.goTop()
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div className='ext-home-multiforum'>
        <Anchor id='container'>
          <BannerForoVecinal title="Presupuesto participativo"/>
          <ThumbsVoto />
          {/* <Proyectos /> */}
          {/* <ProyectosFactibles /> */}
          <ProyectosGanadores />
          {/* <Barrios /> */}
          <ForosEnDatos />
          <Jump goTop={this.goTop} />
          <Footer />
        </Anchor>
      </div>
    )
  }
}
