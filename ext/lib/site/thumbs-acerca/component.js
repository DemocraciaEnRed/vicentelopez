import React from 'react'
import { Link } from 'react-router'

export default function ThumbsVoto(props) {
  let
    styleIcono1 = { backgroundImage: `url(${props.texts['home-icono1-imagen']})` },
    styleIcono2 = { backgroundImage: `url(${props.texts['home-icono2-imagen']})` },
    styleIcono3 = { backgroundImage: `url(${props.texts['home-icono3-imagen']})` };
  return (
    <section className="thumbs-acerca info-landing">
        <div className="row">
          <div className="col-md-6 offset-md-3 ">
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
            <iframe src="https://player.vimeo.com/video/624747283?h=90f9549df7&color=c9ff23&title=0&byline=0&portrait=0" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      <div className="container-fluid">
        <div className="row cont">
          <div className="col-md-4">
            <div
              className="que-son img-responsive"
              style={styleIcono1}>
            </div>
            <h2
              className="text-center">
              { props.texts['home-icono1-titulo']}
            </h2>
            <p className="que-son-cont">
              { props.texts['home-icono1-texto']}
            </p>
          </div>

          <div className="col-md-4">
            <div
              className="que-propongo img-responsive"
              style={styleIcono2}>
            </div>
            <h2 className="text-center">{ props.texts['home-icono2-titulo']}</h2>
            <p className="que-propongo-cont">
              { props.texts['home-icono2-texto']}
            </p>

          </div>

          <div className="col-md-4">
            <div
              className="como-sigo img-responsive"
              style={styleIcono3}>
            </div>
            <h2 className="text-center">
              { props.texts['home-icono3-titulo']}
            </h2>
            <p className="donde-voto-cont">
              { props.texts['home-icono3-texto']} <Link to='/proyectos?stage=seguimiento' className="">Seguimiento proyectos</Link>
            </p>
          </div>

        </div>

        {/* <div
          className='row'>
          <div className='cont-boton-azul'>
            <Link to='/s/acerca-de' className="boton-azul">
                    Más información
            </Link>
          </div>
        </div> */}
      </div>
    
    </section>
  )
}
