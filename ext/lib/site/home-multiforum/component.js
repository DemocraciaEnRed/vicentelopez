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
      topics: null,
      forums: null
    }
  }
  componentWillMount () {
    if (!config.multiForum && !config.defaultForum) {
      window.location = urlBuilder.for('forums.new')
    }

    let name = this.props.params.forum

    if (!name && !config.multiForum) {
      name = config.defaultForum
    }

    var u = new window.URLSearchParams(window.location.search)
    let query = {limit: 10, page: 1}

    forumStore.findAll().then((forums) => {
      this.setState({
        forums
      })
    })
    .catch((err) => {
      if (err.status === 404) return browserHistory.push('/404')
      if (err.status === 401) return browserHistory.push('/401')
      throw err
    })
  }

  render () {
    console.log('this.state.forums homemultiforum', this.state.forums)
    return (
      <div className='ext-home-multiforum'>
        <BannerForoVecinal />
        <ThumbsVoto />
        <Carrusel />
        <section
          className='seccion-barrios container'>
            <div
              className='row'>

                <div
                  className='col-xs-10 offset-xs-1 col-md-8 offset-md-2 cont-barrio'>
                    <div
                      className='barrio-verde'>

                        <h2>BARRIOS</h2>
                    </div>
                </div>
              </div>
        </section>
        <Barrios forums={this.state.forums}/>
        <Footer />
      </div>
    )
  }
}
