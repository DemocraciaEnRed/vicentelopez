import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import CarruselAnios from 'ext/lib/site/carrusel-anios/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'

export default class Page extends Component {
  componentDidMount () {
    Anchor.goTo('container')
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div>
        <BannerForoVecinal title="Los foros en datos"/>
        <Anchor id='container'>

          <div className='ext-datos'>
            <p className="text">
              El presupuesto participativo de Vicente López se viene haciendo de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de Foros Vecinales.
            </p>
            
            <article className="seccion-datos">
              <h3>Cantidad de proyectos por año</h3>
              <figure className="graph-box">
                <div className="graph-img">
                  <img src="/ext/lib/site/static-pages/progreso-proyectos.svg" alt=""/>
                </div>
                <figcaption>
                  <p>Evolución de cantidad de proyectos presentados, aprobados y ejecutados año a año.</p>
                  <img className="graph-ref" src="/ext/lib/site/static-pages/progreso-proyectos-ref.png" alt=""/>
                </figcaption>
              </figure>
            </article>

            <article className="seccion-datos">
            <h3>Cantidad de proyectos por año por categoría</h3>
              <figure className="graph-box">
                <div className="graph-img">
                  <img src="/ext/lib/site/static-pages/progreso-proyectos-por-tipo.svg" alt=""/>
                </div>
                <figcaption>
                  <p>Evolución en el tiempo de cantidad de proyectos por categoría (cultura, deporte, educación, fiscalizacion, gobierno, planeamiento, salud, seguridad y tránsito).</p>
                  <img className="graph-ref" src="/ext/lib/site/static-pages/progreso-proyectos-por-tipo-ref.svg" alt=""/>
                </figcaption>
              </figure>
            </article>

            <article className="seccion-datos">
              <h3>Distribución de proyectos por categoría</h3>
              <figure className="graph-box">
                <CarruselAnios />
                <figcaption>
                  <p>Visualización por año de la distribución de proyectos por categoría (cultura, deporte, educación, fiscalizacion, gobierno, planeamiento, salud, seguridad y tránsito).</p>
                </figcaption>
              </figure>
            </article>

            <article className="seccion-datos">
              <h3>Evolución de la participación</h3>
              <figure className="graph-box">
                <div className="graph-img">
                  <img src="/ext/lib/site/static-pages/evolucion-participacion.svg" alt=""/>
                </div>
                <figcaption>
                  <p>Evolución de ciudadanos (porcentaje de la población de Vicente López) que han participado en los foros vecinales de Vicente López.</p>
                </figcaption>
              </figure>
            </article>

            <article className="seccion-datos">
              <h3>Evolución del Presupuesto Participativo 2012 - 2017</h3>
              <figure className="graph-box">
                <table className="tabla-presupuestoparticipativo">
                  <tbody>
                    <tr>
                      <td>Edición</td>
                      <td>2012 - 2013</td>
                      <td>2013 - 2014</td>
                      <td>2014 - 2015</td>
                      <td>2015 - 2016</td>
                      <td>2016 - 2017</td>
                    </tr>
                    <tr>
                      <td>Presupuesto Asignado</td>
                      <td>10 MM</td>
                      <td>15 MM</td>
                      <td>20 MM</td>
                      <td>30 MM</td>
                      <td>45 MM</td>
                    </tr>
                    <tr>
                      <td>Propuestas Presentadas</td>
                      <td>86</td>
                      <td>165</td>
                      <td>277</td>
                      <td>465</td>
                      <td>348</td>
                    </tr>
                    <tr>
                      <td>Proyectos Factibles</td>
                      <td>65</td>
                      <td>104</td>
                      <td>153</td>
                      <td>152</td>
                      <td>148</td>
                    </tr>
                    <tr>
                      <td>Proyectos Ganadores</td>
                      <td>50</td>
                      <td>69</td>
                      <td>69</td>
                      <td>63</td>
                      <td>81</td>
                    </tr>
                    <tr>
                      <td>Cantidad de Participantes</td>
                      <td>1.178</td>
                      <td>6.691</td>
                      <td>10.068</td>
                      <td>18.880</td>
                      <td>26.537</td>
                    </tr>
                    <tr>
                      <td>Proporción de Participantes</td>
                      <td>1 cada 156</td>
                      <td>1 cada 31</td>
                      <td>1 cada 20</td>
                      <td>1 cada 11</td>
                      <td>1 cada 8</td>
                    </tr>
                  </tbody>
                </table>
              </figure>
            </article>

            <div className='descargas'>
              <h4>DESCARGAS</h4>
              <div className="btns-descargas">
                <a target='_blank' href='https://rosariociudaddemocracyos.blob.core.windows.net/assets/proyectos-2012-2017-por-tipo.xlsx' className='boton-azul'>Proyectos 2012-2017 por tipo (cantidad e inversión)</a>
                <a target='_blank' href='https://rosariociudaddemocracyos.blob.core.windows.net/assets/informacion-sobre-participantes.xlsx' className='boton-azul'>Información sobre participación</a>
              </div>
            </div>
          </div>
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
