import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import DonutChart from 'ext/lib/site/graphics/component'
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
        <Anchor id='container'>

          <div className='ext-datos'>
            <p className="text">
              El presupuesto participativo de Vicente López se viene haciendo de manera ininterrumpida desde el 2012. Aquí encontrarás información y datos históricos de todas las ediciones de Foros Vecinales.
            </p>

            <article className="seccion-datos">
              <h3>Evolución del Presupuesto Participativo 2012 - 2018</h3>
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
                      <th>2017 - 2018</th>
                      <th>2018 - 2019</th>

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
                      <td>65 MM</td>
                      <td>75 MM</td>

                    </tr>
                    <tr>
                      <td>Propuestas Presentadas</td>
                      <td>86</td>
                      <td>165</td>
                      <td>277</td>
                      <td>465</td>
                      <td>348</td>
                      <td>350</td>
                      <td>524</td>

                    </tr>
                    <tr>
                      <td>Proyectos Factibles</td>
                      <td>65</td>
                      <td>104</td>
                      <td>153</td>
                      <td>152</td>
                      <td>148</td>
                      <td>145</td>
                      <td>198</td>
                    </tr>
                    <tr>
                      <td>Proyectos Ganadores</td>
                      <td>50</td>
                      <td>69</td>
                      <td>69</td>
                      <td>63</td>
                      <td>81</td>
                      <td>74</td>
                      <td>47</td>

                    </tr>
                    <tr>
                      <td>Cantidad de Participantes</td>
                      <td>1.178</td>
                      <td>6.691</td>
                      <td>10.068</td>
                      <td>18.880</td>
                      <td>26.537</td>
                      <td>45.010</td>
                      <td>69.201</td>

                    </tr>
                    <tr>
                      <td>Proporción de Participantes</td>
                      <td>1 cada 156</td>
                      <td>1 cada 31</td>
                      <td>1 cada 20</td>
                      <td>1 cada 11</td>
                      <td>1 cada 8</td>
                      <td>1 cada 5</td>
                      <td>1 cada 3</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                    <td colSpan={8}>Presupuesto asignado 2018 - 2019: $75 millones</td>
                    </tr>
                  </tfoot>
                </table>
              </figure>
            </article>

            <article className="seccion-datos">
              <h3>Evolución de la participación</h3>
              <figure className="graph-box">
                <div className="graph-img">
                  <img src="/ext/lib/site/static-pages/evolucion-participacion1.png" alt=""/>
                </div>
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
              <h4>ARCHIVOS</h4>
              <div className='btns-descargas btns-historial'>
                <Link href='/s/documentos'>
                  <button className='boton-azul'>
                    Visualizador de archivos
                  </button>
                </Link>
              </div>
              <h4>DESCARGAS</h4>
              <div className='btns-descargas'>
                <a href='https://forosvecinales.blob.core.windows.net/informes/proyectos-2013-2019_tipo-cantidad-inversion.xlsx' className='boton-azul'>Proyectos 2013-2019 por tipo (cantidad e inversión)</a>
                <a href='https://forosvecinales.blob.core.windows.net/informes/informacion_participacion.xlsx' className='boton-azul'>Información sobre participación 2018</a>
                <a href='https://forosvecinales.blob.core.windows.net/informes/resultados-escrutinio-2017.xlsx' className='boton-azul'>Resultados de la votación 2017</a>
                <a href='https://forosvecinales.blob.core.windows.net/informes/resultados-escrutinio-2018.xlsx' className='boton-azul'>Resultados de la votación 2018</a>
                <a href='https://forosvecinales.blob.core.windows.net/informes/Escrutinio-2019.xlsx' className='boton-azul'>Resultados de la votación 2019</a>
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
