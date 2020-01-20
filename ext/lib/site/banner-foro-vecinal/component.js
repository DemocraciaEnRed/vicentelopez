import React from 'react'

export default function BannerForoVecinal (props) {
  return (
    <section className='container-fluid banner-fv'>
            <div className='blue-background'></div>

      <div className='banner'>
        {
        Math.random(1) > 0.5 ? (
          window.innerWidth >= 630 &&
            <video playsInline autoPlay muted loop>
              <source src='{props.texts && props.texts['home-video1-webm']}' type='video/webm' />
              <source src='{props.texts && props.texts['home-video1-mp4']}' type='video/mp4' />
            </video>
        ) : (
          window.innerWidth >= 630 &&
            <video playsInline autoPlay muted loop>
              <source src='{props.texts && props.texts['home-video2-webm']}' type='video/webm' />
              <source src='{props.texts && props.texts['home-video2-mp4']}' type='video/mp4' />
            </video>
        )
        }
      </div>
      <div className='contenedor'>
        <div className='fondo-titulo'>
          <h1>{props.title}</h1>
        </div>
      </div>
    </section>
  )
}

BannerForoVecinal.defaultProps = {
  title: 'Foros vecinales'
}
