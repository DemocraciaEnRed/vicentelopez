import React from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Carrusel from 'ext/lib/site/carrusel/component'

export default function Page () {
  return (
    <div>
      <BannerForoVecinal title="Los foros en datos"/>
      <div className='ext-datos container'>

        <section className="intro">

          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
        </section>
        <section className="progreso-proyectos">
          <h3>Proyectos por año</h3>
          <div className="graph-box">
            <img className="graph" src="../ext/lib/site/static-pages/progreso-proyectos.svg" alt=""/>
            <img className="graph-ref" src="../ext/lib/site/static-pages/progreso-proyectos-ref.svg" alt=""/>
          </div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
        </section>
        <section className="progreso-proyectos-por-tipo">
          <h3>Cantidad de proyectos por año por tipo</h3>
          <div className="graph-box">
            <img className="graph" src="../ext/lib/site/static-pages/progreso-proyectos-por-tipo.svg" alt=""/>
            <img className="graph-ref" src="../ext/lib/site/static-pages/progreso-proyectos-por-tipo-ref.svg" alt=""/>
          </div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
        </section>
        <section className="distribucion-proyectos">
          <h3>Distribución de proyectos por tipo</h3>
          <div className="graph-box">
            [[ACA VIENE UN CARROUSEL MUY BONITO]]
          </div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
        </section>
        <section className="evolucion-participacion">
          <h3>Evolución de la participación</h3>
          <div className="graph-box">
            <img className="graph" src="../ext/lib/site/static-pages/evolucion-participacion.svg" alt=""/>
          </div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
        </section>


      </div>
          <Carrusel />
          <Footer />
    </div>
  )
}
