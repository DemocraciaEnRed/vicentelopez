import React from 'react'

export default function BannerForoVecinal (props) {

  return (
    <section className="container-fluid banner-fv ">
      <div className="banner">
      {
        window.innerWidth >= 630 &&
          <video playsInline autoPlay muted loop>
            <source src="https://rosariociudaddemocracyos.blob.core.windows.net/assets/vicentelopez-banner.webm" type="video/webm" />
            <source src="https://rosariociudaddemocracyos.blob.core.windows.net/assets/vicentelopez-banner.mp4" type="video/mp4" />
          </video>
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
