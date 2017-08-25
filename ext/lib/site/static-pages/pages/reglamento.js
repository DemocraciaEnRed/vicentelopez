import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'

export default class Page extends Component {
  componentDidMount () {
    Anchor.goTo('container')
  }

  goTop () {
    Anchor.goTo('container')
  }

    render () {
    return (
      <div className='ext-terminos-y-condiciones'>
        <section className="banner-tyc ">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Reglamento Electoral</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='container'>
            <p>Acá va texto</p>
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
