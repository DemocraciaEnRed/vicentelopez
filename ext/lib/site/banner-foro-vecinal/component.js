import React from 'react'
import config from 'lib/config'

export default function BannerForoVecinal (props) {
  let { adminTexts } = config.store
  let random  = Math.random(1) > 0.5 ? "1":"2";
  let source = `home-video${random}`;
  //DRY: dont repeat yourself
  return (
    <section className='container-fluid banner-fv'>
      <div className='blue-background'></div>
      <div className='banner'>
      {
        window.innerWidth >= 630 &&
          <video playsInline autoPlay muted loop>
            <source src={ adminTexts[`${source}-webm`] } type='video/webm' />
            <source src={ adminTexts[`${source}-mp4`] }  type='video/mp4' />
          </video>
      }

      </div>
      <div className='contenedor'>
        <div className='fondo-titulo'>
          <h2 className='title'>{props.title}</h2>
        </div>
      </div>
    </section>
  )
}

BannerForoVecinal.defaultProps = {
  title: 'Presupuesto participativo'
}
