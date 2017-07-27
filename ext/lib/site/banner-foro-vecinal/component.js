import React from 'react'

export default function BannerForoVecinal (props) {
  return (
    <section className="container-fluid banner-fv ">
      <div className="banner">
        <video playsInline autoPlay muted loop>
          <source src="ext/lib/site/banner-foro-vecinal/banner.webm" type="video/webm" />
          <source src="ext/lib/site/banner-foro-vecinal/banner.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className='contenedor'>
          <div
            className='fondo-titulo'>
              <h1 className=''>{props.title}</h1>
          </div>
      </div>
    </section>
  )
}

BannerForoVecinal.defaultProps = {
  title: 'Foros vecinales'
}
