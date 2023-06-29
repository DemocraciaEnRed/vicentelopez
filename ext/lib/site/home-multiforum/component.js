import React, { Component } from 'react'
import {Link} from 'react-router'
import config from 'lib/config'
import Footer from 'ext/lib/site/footer/component'
import Barrios from 'ext/lib/site/barrios/component'
import ForosEnDatos from 'ext/lib/site/foros-en-datos/component'
import ThumbsAcerca from 'ext/lib/site/thumbs-acerca/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import ProyectosFactibles from 'ext/lib/site/proyectosFactibles/component'
import ProyectosGanadores from 'ext/lib/site/proyectosGanadores/component'
import EncuentrosProximos from 'ext/lib/site/encuentrosProximos/component'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import textStore from 'lib/stores/text-store'
import Banner400Proyectos from 'ext/lib/site/banner-400-proyectos/component'

export default class HomeMultiforumOverride extends Component {
  constructor (props) {
    super(props)

    this.state = {
      forum: null,
      texts: {}
    }
  }

  componentWillMount () {
    textStore.findAllDict().then((textsDict) => {
      this.setState({
        texts: textsDict
      })
    }).catch((err) => {
      this.state = {
        texts: {}
      }
    })

    forumStore.findOneByName('proyectos').then((forum) => {
      this.setState({ forum })
    }).catch((err) => { console.error(err) })
  }

  componentDidMount () {
    this.goTop()
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    const forum = this.state.forum
    return (
      <div className='ext-home-multiforum'>
        <Anchor id='container'>
          <BannerForoVecinal title="Presupuesto participativo" texts={this.state.texts} />
          {forum && <ThumbsVoto
            texts={this.state.texts}
            forum={forum} />}
          <ThumbsAcerca texts={this.state.texts}/>
          {forum && forum.config.mostrarInfoEncuentros && <EncuentrosProximos /> }
          {forum && forum.config.filterYear && forum.config.preVotacion && <ProyectosFactibles /> }
          {forum && forum.config.filterYear && forum.config.votacionFinalizada && <ProyectosGanadores /> }
          {/* <Barrios /> */}
          <ForosEnDatos />
          {/* <Banner400Proyectos/> */} 
          <Jump goTop={this.goTop} />
          <Footer />
        </Anchor>
      </div>
    )
  }
}
