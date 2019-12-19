import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import DonutChart from 'ext/lib/site/graphics/donut-chart/component'
import LineChart from 'ext/lib/site/graphics/line-chart/component'
import Banner400Proyectos from '../../banner-400-proyectos/component.js'
const distribucionProyectosData = require('./distribucion-proyectos.json')
const ejecucionProyectosData = require('./ejecucion-proyectos.json')

export default class Page extends Component {
  componentDidMount () {
    this.goTop()
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div>
        <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>El presupuesto participativo en datos</h1>
            </div>
          </div>
        </section>
        <Banner400Proyectos/>
        <br/>
        <br/>
        <Anchor id='container'>

          <div className='ext-datos'>
            <p className="text">
              El presupuesto participativo de Vicente López se viene haciendo de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de Foros Vecinales.
            </p>

            <article className="seccion-datos">
              <h3>Evolución del Presupuesto Participativo 2012 - 2020</h3>
              <figure className="graph-box">
                <div className="table-scroller">
                  <table className="tabla-presupuestoparticipativo">
                  <thead>
                    <tr>
                      <th className="sticky-col">Edición</th>
                      <th>2012 - 2013</th>
                      <th>2013 - 2014</th>
                      <th>2014 - 2015</th>
                      <th>2015 - 2016</th>
                      <th>2016 - 2017</th>
                      <th>2017 - 2018</th>
                      <th>2018 - 2019</th>
                      <th>2019 - 2020</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="sticky-col">Presupuesto Asignado</td>
                      <td>10 MM</td>
                      <td>15 MM</td>
                      <td>20 MM</td>
                      <td>30 MM</td>
                      <td>45 MM</td>
                      <td>65 MM</td>
                      <td>75 MM</td>
                      <td>108 MM</td>
                    </tr>
                    <tr>
                      <td className="sticky-col">Propuestas Presentadas</td>
                      <td>86</td>
                      <td>165</td>
                      <td>277</td>
                      <td>465</td>
                      <td>348</td>
                      <td>350</td>
                      <td>524</td>
                      <td>507</td>
                    </tr>
                    <tr>
                      <td className="sticky-col">Proyectos Factibles</td>
                      <td>65</td>
                      <td>104</td>
                      <td>153</td>
                      <td>152</td>
                      <td>148</td>
                      <td>145</td>
                      <td>198</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td className="sticky-col">Proyectos Ganadores</td>
                      <td>50</td>
                      <td>69</td>
                      <td>69</td>
                      <td>63</td>
                      <td>81</td>
                      <td>74</td>
                      <td>47</td>
                      <td>66</td>
                    </tr>
                    <tr>
                      <td className="sticky-col">Cantidad de Participantes</td>
                      <td>1.178</td>
                      <td>6.691</td>
                      <td>10.068</td>
                      <td>18.880</td>
                      <td>26.537</td>
                      <td>45.010</td>
                      <td>69.201</td>
                      <td>78.310</td>
                    </tr>
                    <tr>
                      <td className="sticky-col">Proporción de Participantes</td>
                      <td>1 cada 156</td>
                      <td>1 cada 31</td>
                      <td>1 cada 20</td>
                      <td>1 cada 11</td>
                      <td>1 cada 8</td>
                      <td>1 cada 5</td>
                      <td>1 cada 3</td>
                      <td>1 cada 3</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                    <td colSpan={9}>Presupuesto asignado 2019 - 2020: $108 millones</td>
                    </tr>
                  </tfoot>
                </table>
                </div>
              </figure>
            </article>

            <article className="seccion-datos">
              <h3>Evolución de la participación</h3>
              <figure className="graph-box">
                <div className="graph-img">
                  <LineChart />
{/*                   <img src="/ext/lib/site/static-pages/evolucion-participacion1.png" alt=""/>
 */}                </div>
                <figcaption>
                  <p className="caption">Evolución de ciudadanos (porcentaje de la población de Vicente López) que han participado en los foros vecinales de Vicente López.</p>
                </figcaption>
              </figure>
            </article>

            <article className="seccion-datos infogram">
              <DonutChart data={distribucionProyectosData} title="Distribución de proyectos por área temática por año"/>
            </article>

            <article className="seccion-datos infogram">
              <DonutChart data={ejecucionProyectosData} title="Ejecución % del Presupuesto por área temática por año"/>
            </article>

            <div className='descargas'>
              <h4>HISTORIAL DE DOCUMENTOS DE PRESUPUESTO PARTICIPATIVO</h4>
              <div className='btns-descargas btns-historial'>
                <Link href='/s/documentos'>
                  <button className='boton-azul'>
                    Visualizar historial de documentos
                  </button>
                </Link>
              </div>
              <h4>DATOS ABIERTOS</h4>
              <div className='btns-descargas'>
                <div className='descargas-info'>
                  <h5>Proyectos 2013-2019 por tipo (cantidad e inversión)</h5>
                  <p>Datos históricos de la cantidad de proyectos e inversión presupuestaria segmentado por temática.</p>
                  <span className='descarga-fecha'>Publicado: 22 de Noviembre de 2019</span>
                  <a href='https://forosvecinales.blob.core.windows.net/informes/proyectos-2013-2019_tipo-cantidad-inversion.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms"/><g id="Icons"><g><rect height="2" width="16" x="8" y="23"/><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5"/></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Información sobre participación 2018</h5>
                  <p>Datos de la cantidad de participantes, votantes por barrio y ratio con datos de población desde 2012 a 2018.</p>
                  <span className='descarga-fecha'>Publicado: Diciembre de 2018</span>
                  <a href='https://forosvecinales.blob.core.windows.net/informes/informacion_participacion.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms"/><g id="Icons"><g><rect height="2" width="16" x="8" y="23"/><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5"/></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2017</h5>
                  <p>Detalle de los proyectos ganadores en la votación de 2017. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.</p>
                  <span className='descarga-fecha'>Publicado: Octubre de 2017</span>
                  <a href='https://forosvecinales.blob.core.windows.net/informes/resultados-escrutinio-2017.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms"/><g id="Icons"><g><rect height="2" width="16" x="8" y="23"/><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5"/></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2018</h5>
                  <p>Detalle de los proyectos ganadores y no ganadores en la votación de 2018. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.</p>
                  <span className='descarga-fecha'>Publicado: Octubre de 2018</span>
                  <a href='https://forosvecinales.blob.core.windows.net/informes/resultados-escrutinio-2018.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms"/><g id="Icons"><g><rect height="2" width="16" x="8" y="23"/><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5"/></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2019</h5>
                  <p>Detalle de los proyectos ganadores y no ganadores en la votación de 2019. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado. </p>
                  <span className='descarga-fecha'>Publicado: Noviembre de 2019</span>
                  <a href='https://forosvecinales.blob.core.windows.net/informes/Escrutinio-2019.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms"/><g id="Icons"><g><rect height="2" width="16" x="8" y="23"/><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5"/></g></g></svg>
                  </a>
                </div>
              </div>
              <h4>PORTAL DE DATOS ABIERTOS DE VICENTE LOPEZ</h4>
              <div className='portal-vl btns-descargas'>
                <div className='portal-vl-datos'>
                <div className='portal-vl-datos-num'>
                  <span className='num'>+ 16</span>
                  <img src="/ext/lib/site/static-pages/icon-bar.svg" alt=""/>
                  <span className='leyenda'>Colecciones</span>
                </div>
                <div className='portal-vl-datos-num'>
                  <span className='num'>+ 227</span>
                  <img src="/ext/lib/site/static-pages/icon-folder.svg" alt=""/>
                  <span className='leyenda'>Data Sets</span>
                </div>
                <Link href='http://vicentelopezdevo.opendata.junar.com/home'>
                  <button className='boton-azul'>
                    Ir al portal de datos abiertos
                  </button>
                </Link>
                <p>La Municipalidad de Vicente López, en el marco de la Política de transparencia, participación y colaboración ciudadana, ha incorporado una plataforma de datos abiertos. La misma cuenta con una sección exclusiva del presupuesto participativo.</p>
                </div>
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
