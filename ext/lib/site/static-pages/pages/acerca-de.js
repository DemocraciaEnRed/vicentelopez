import React from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'

export default function Page () {
  return (
    <div>
      <BannerForoVecinal />
      <div className='ext-acerca-de container'>
        <div className="filas">
          <div className="fila con-icono">
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
                Son espacios de participación ciudadana donde los vecinos deciden en que invertir parte del presupuesto municipal. Todos los años desde hace 5 años se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
              </div>
            </div>
          </div>
          <div className="fila con-icono">
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
                Cualquier mayor de 16 años que viva o trabaje en vicente lopez podrá votar desde el XXX hasta el XXX en todas las urnas habilitadas.
              </div>
            </div>
          </div>
          <div className="fila con-icono">
            <div className="cols col-1">
              <div className="thumbs">
                <div className="donde-voto"></div>
              </div>
              <h2>¿Dónde voto?</h2>
            </div>
            <div className="cols col-2">
              <div>
                Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente Lopez: Munro , Florida Oeste , Carapachay, La Lucila, Olivos , Villa Martilli, Florida Este, Vicente Lopez y Villa Adelina.
              </div>
            </div>
          </div>
          <div className="fila">
            <h3>Cómo se distribuye el dinero por barrio:</h3>
            <p>La partida de este año (presupuesto 2018) se repartió en parte de manera igualitaria en los 9 barrios ( $31.5 millones) y en parte ( $33.5 millones) teniendo en cuenta la cantidad de habitantes de cada barrio para lo cual se establecieron 3 franjas: hasta 20 mil, de 20 a 40 mil y más de 40 mil habitantes.</p>
          </div>
          <div className="fila">
            <h3>Cómo funcionan los foros vecinales:</h3>
            <p>Vecinos y funcionarios municipales se encontraron en reuniones programadas. Los vecinos hicieron sus propuestas para el barrio y junto a los funcionarios del área elaboraron los proyectos.</p>
          </div>
          <div className="fila no-bg">
            <div className="map-box">
              <div className='mapa'>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DEX8V6qaMQy-8NYKNPhsLH_xQnY" width="640" height="480"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
