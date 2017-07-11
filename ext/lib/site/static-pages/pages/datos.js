import React from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Carrusel from 'ext/lib/site/carrusel/component'
<<<<<<< HEAD
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'
=======
>>>>>>> Agrega página estática de Datos.

export default function Page () {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <BannerForoVecinal title="Los foros en datos"/>
      <div className='ext-datos container'>

        <section className="intro">
          <div className="text=box">
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
          </div>
        </section>
        <section className="progreso-proyectos">
          <h3>Proyectos por año</h3>
          <div className="flexBox">
            <div className="graph-box">
              <img className="graph" src="../ext/lib/site/static-pages/progreso-proyectos.svg" alt=""/>
              <img className="graph-ref" src="../ext/lib/site/static-pages/progreso-proyectos-ref.svg" alt=""/>
            </div>
            <div className="text-box">
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
            </div>
        </div>
        </section>
        <section className="progreso-proyectos-por-tipo">
          <h3>Cantidad de proyectos por año por tipo</h3>
          <div className="flexBox">

          <div className="graph-box">
            <img className="graph" src="../ext/lib/site/static-pages/progreso-proyectos-por-tipo.svg" alt=""/>
            <img className="graph-ref" src="../ext/lib/site/static-pages/progreso-proyectos-por-tipo-ref.svg" alt=""/>
          </div>
          <div className="text-box">

          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
          </div>

          </div>

        </section>
        <section className="distribucion-proyectos">
          <h3>Distribución de proyectos por tipo</h3>
          <div className="flexBox">

          <div className="graph-box">
          <CarruselAnios />
          </div>
          <div className="text-box">

          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
          </div>

          </div>

        </section>
        <section className="evolucion-participacion">
          <h3>Evolución de la participación</h3>
          <div className="flexBox">

          <div className="graph-box">
            <img className="graph" src="../ext/lib/site/static-pages/evolucion-participacion.svg" alt=""/>
          </div>
          <div className="text-box">

          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
          </div>

          </div>

        </section>


=======
      <BannerForoVecinal />
=======
      <BannerForoVecinal title="Los foros en datos"/>
>>>>>>> Corrige acerca de y datos.
      <div className='ext-datos container'>

        <div className="filas">
          <div className="fila">
            <div className="cols col-1">
              <div>
                <div className="thumbs">
                  <div className="que-son"></div>
                </div>
                <h2>¿Qué son?</h2>
              </div>
            </div>
            <div className="cols col-2">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum eget leo ut ullamcorper. Integer vitae erat nisl. Sed hendrerit egestas aliquet. Pellentesque maximus ullamcorper ligula, sit amet dignissim nunc rhoncus eget. Suspendisse imperdiet nisl quis dictum porta. Sed sit amet mi vitae felis bibendum pretium nec ac ligula. In dignissim at neque sed ullamcorper. Nunc massa mauris, congue vel felis quis, facilisis commodo mi. Ut bibendum nunc at eros interdum, sit amet iaculis magna aliquam.
              </div>
            </div>
          </div>
          <div className="fila">
            <div className="cols col-1">
              <div>
                <div className="thumbs">
                  <div className="como-voto"></div>
                </div>
              </div>
              <h2>¿Cómo voto?</h2>
            </div>
            <div className="cols col-2">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum eget leo ut ullamcorper. Integer vitae erat nisl. Sed hendrerit egestas aliquet. Pellentesque maximus ullamcorper ligula, sit amet dignissim nunc rhoncus eget. Suspendisse imperdiet nisl quis dictum porta. Sed sit amet mi vitae felis bibendum pretium nec ac ligula. In dignissim at neque sed ullamcorper. Nunc massa mauris, congue vel felis quis, facilisis commodo mi. Ut bibendum nunc at eros interdum, sit amet iaculis magna aliquam.
              </div>
            </div>
          </div>
          <div className="fila">
            <div className="cols col-1">
              <div className="thumbs">
                <div className="donde-voto"></div>
              </div>
              <h2>¿Dónde voto?</h2>
            </div>
            <div className="cols col-2">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum eget leo ut ullamcorper. Integer vitae erat nisl. Sed hendrerit egestas aliquet. Pellentesque maximus ullamcorper ligula, sit amet dignissim nunc rhoncus eget. Suspendisse imperdiet nisl quis dictum porta. Sed sit amet mi vitae felis bibendum pretium nec ac ligula. In dignissim at neque sed ullamcorper. Nunc massa mauris, congue vel felis quis, facilisis commodo mi. Ut bibendum nunc at eros interdum, sit amet iaculis magna aliquam.
              </div>
            </div>
          </div>
          <div className="fila no-bg">
            <div className="map-box">
              <div className='mapa'></div>
            </div>

          </div>
        </div>
>>>>>>> Agrega página estática de Datos.
      </div>
          <Carrusel />
          <Footer />
    </div>
  )
}
