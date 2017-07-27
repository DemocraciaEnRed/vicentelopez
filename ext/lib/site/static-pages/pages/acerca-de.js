import React from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'

export default function Page () {
  return (
    <div>
      <BannerForoVecinal />
      <div className='ext-acerca-de container'>
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
