import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Proyectos from 'ext/lib/site/proyectos/component'
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
              <h3>Evolución del Presupuesto Participativo 2012 - 2017</h3>
              <figure className="graph-box">
                <table className="tabla-presupuestoparticipativo">
                  <thead>
                    <tr>
                      <th>Edición</th>
                      <th>2012 - 2013</th>
                      <th>2013 - 2014</th>
                      <th>2014 - 2015</th>
                      <th>2015 - 2016</th>
                      <th>2016 - 2017</th>
                    </tr>
                  </thead>
                  <tbody>
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

            <article className="seccion-datos">
              <h3>Evolución de la participación</h3>
              <figure className="graph-box">
                <div className="graph-img">
                  <img src="/ext/lib/site/static-pages/evolucion-participacion.svg" alt=""/>
                </div>
                <figcaption>
                  <p className="caption">Evolución de ciudadanos (porcentaje de la población de Vicente López) que han participado en los foros vecinales de Vicente López.</p>
                </figcaption>
              </figure>
            </article>

            <article className="seccion-datos infogram">
              <h3>Distribución de proyectos por área temática por año</h3>
              <figure className="graph-box">
              {
                window.matchMedia("(min-width: 550px)").matches ?
                (
                  <iframe src="//e.infogram.com/0e934508-19f4-4faa-a5b9-5ab8ce664e72?src=embed" title="Distribución de proyectos por área temática por año" width="550" height="594" scrolling="no" frameBorder="0">
                  </iframe>
                ) : (
                  <iframe src="//e.infogram.com/0e934508-19f4-4faa-a5b9-5ab8ce664e72?src=embed" title="Distribución de proyectos por área temática por año" width="360" height="594" scrolling="no" frameBorder="0">
                  </iframe>
                )
              }
              </figure>
            </article>

            <article className="seccion-datos infogram">
              <h3>Distribución de inversión por área de gobierno por año</h3>
              <figure className="graph-box">
              {
                window.matchMedia("(min-width: 550px)").matches ?
                (
                  <iframe src="//e.infogram.com/7a29f42e-fcde-4b83-95d4-9958ed232335?src=embed" title="Distribución de inversión por área temática por año" width="550" height="676" scrolling="no" frameBorder="0">
                  </iframe>
                ) : (
                  <iframe src="//e.infogram.com/7a29f42e-fcde-4b83-95d4-9958ed232335?src=embed" title="Distribución de inversión por área temática por año" width="360" height="676" scrolling="no" frameBorder="0">
                  </iframe>
                )
              }
              </figure>
            </article>

            <article className="seccion-datos infogram">
              <h3>Ejecución del Presupuesto Participativo 2016-2017</h3>
              <figure className="graph-box">
              {
                window.matchMedia("(min-width: 550px)").matches ?
                (
                  <iframe src="//e.infogram.com/dd7e5f37-0ef2-4392-9171-13c6d97ca489?src=embed" title="Ejecución del Presupuesto Participativo 2016-2017" width="550" height="578" scrolling="no" frameBorder="0">
                  </iframe>
                ) : (
                  <iframe src="//e.infogram.com/dd7e5f37-0ef2-4392-9171-13c6d97ca489?src=embed" title="Ejecución del Presupuesto Participativo 2016-2017" width="360" height="578" scrolling="no" frameBorder="0">
                  </iframe>
                )
              }
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
