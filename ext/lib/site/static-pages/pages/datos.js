import React from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'

export default function Page () {
  document.body.scrollTop = 0
  return (
    <div>
      <BannerForoVecinal title="Los foros en datos"/>
      <div className='ext-datos'>
        <div className="text">
          El presupuesto participativo de Vicente López se viene haciendo de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de Foros Vecinales.
        </div>
        <h3>Proyectos por año</h3>
        <div className="graph-box">
          <img className="graph" src="../ext/lib/site/static-pages/progreso-proyectos.svg" alt=""/>
          <img className="graph-ref" src="../ext/lib/site/static-pages/progreso-proyectos-ref.svg" alt=""/>
        </div>
        <div className="text">
          Evolución de cantidad de proyectos presentados, aprobados y ejecutados año a año.
        </div>

        <h3>Cantidad de proyectos por año por categoría</h3>
        <div className="graph-box">
          <img className="graph" src="../ext/lib/site/static-pages/progreso-proyectos-por-tipo.svg" alt=""/>
          <img className="graph-ref" src="../ext/lib/site/static-pages/progreso-proyectos-por-tipo-ref.svg" alt=""/>
        </div>
        <div className="text">
          Evolución en el tiempo de cantidad de proyectos por categoría (cultura, deporte, educación, fiscalizacion, gobierno, planeamiento, salud, seguridad y tránsito).
        </div>

        <h3>Distribución de proyectos por categoría</h3>
        <div className="graph-box">
          <CarruselAnios />
        </div>
        <div className="text">
          Visualización por año de la distribución de proyectos por categoría (cultura, deporte, educación, fiscalizacion, gobierno, planeamiento, salud, seguridad y tránsito).
        </div>


        <h3>Evolución de la participación</h3>
        <div className="graph-box">
          <img className="graph" src="../ext/lib/site/static-pages/evolucion-participacion.svg" alt=""/>
        </div>
        <div className="text">
          Evolución de ciudadanos (porcentaje de la población de Vicente López) que han participado en los foros vecinales de Vicente López.
        </div>
      </div>
      <Proyectos />
      <Footer />
    </div>
  )
}
