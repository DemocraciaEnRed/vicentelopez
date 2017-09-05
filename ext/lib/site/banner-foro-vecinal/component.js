import React from 'react'

export default function BannerForoVecinal (props) {

  return (
    <section className="container-fluid banner-fv ">
      <div className="banner">
      {
        Math.random(1) > 0.5 ? (
          window.innerWidth >= 630 &&
            <video playsInline autoPlay muted loop>
              <source src="https://cldup.com/b5-PScfd-V.webm" type="video/webm" />
              <source src="https://cldup.com/pQZlAEpzw0.mp4" type="video/mp4" />
            </video>
        ) : (
          window.innerWidth >= 630 &&
            <video playsInline autoPlay muted loop>
              <source src="https://cldup.com/0Cy2GaQ-cR.webm" type="video/webm" />
              <source src="https://cldup.com/w4RSGFJStA.mp4" type="video/mp4" />
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
