import React from 'react'




export default function BannerForoVecinal (props) {

  return (
    <section className="container-fluid banner-fv ">
      <div className="banner">

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
