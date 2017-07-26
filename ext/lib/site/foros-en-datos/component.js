import React from 'react'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'
import {Link} from 'react-router'



export default function ForosEnDatos () {
  return (
      <section className='seccion-foros-datos container'>
        <h2 className='title'>Los foros en datos</h2>
        <h3>Distribución de proyectos por tipo</h3>
        <div className="flexBox">
          <div className="graph-box">
            <CarruselAnios />
          </div>
          <div className="text-box">
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas aliquet luctus. Curabitur vestibulum lorem quis porta interdum. Fusce ullamcorper lectus tortor, nec sagittis odio fringilla ac. Curabitur rutrum libero ac urna pretium, in bibendum neque tincidunt. Suspendisse vitae elementum sapien. Donec et libero ut ipsum vestibulum imperdiet. Mauris commodo orci nisi, id ultricies magna blandit at. Curabitur in lectus eu enim tincidunt dignissim quis vitae velit. Donec vehicula risus arcu. Etiam laoreet nibh lacinia rutrum euismod. Vivamus eget velit magna. Proin faucibus leo nec volutpat ullamcorper. In hac habitasse platea dictumst. Duis quis sem efficitur, semper leo at, gravida nunc. Sed condimentum non mi ut porta.</div>
          </div>
        </div>
        <div className='cont-boton-azul'>
            <Link to='/s/datos' className="boton-azul">
                Ver más datos
            </Link>
        </div>
      </section>
  )
}
