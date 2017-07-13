import React from 'react'




export default function BannerForoVecinal (props) {

  return (
    <section className="container-fluid seccion-general ">
      <div className="banner">

      </div>
      <div
        className='contenedor row'>
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
