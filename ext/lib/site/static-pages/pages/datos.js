import React, { Component } from 'react'
import Footer from 'ext/lib/site/footer/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'

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
              <h1>Los foros en datos</h1>
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
                    </tr>
                    <tr>
                      <td>Propuestas Presentadas</td>
                      <td>86</td>
                      <td>165</td>
                      <td>277</td>
                      <td>465</td>
                      <td>348</td>
                      <td>350</td>
                    </tr>
                    <tr>
                      <td>Proyectos Factibles</td>
                      <td>65</td>
                      <td>104</td>
                      <td>153</td>
                      <td>152</td>
                      <td>148</td>
                      <td>145</td>
                    </tr>
                    <tr>
                      <td>Proyectos Ganadores</td>
                      <td>50</td>
                      <td>69</td>
                      <td>69</td>
                      <td>63</td>
                      <td>81</td>
                      <td>74</td>
                    </tr>
                    <tr>
                      <td>Cantidad de Participantes</td>
                      <td>1.178</td>
                      <td>6.691</td>
                      <td>10.068</td>
                      <td>18.880</td>
                      <td>26.537</td>
                      <td>45.010</td>
                    </tr>
                    <tr>
                      <td>Proporción de Participantes</td>
                      <td>1 cada 156</td>
                      <td>1 cada 31</td>
                      <td>1 cada 20</td>
                      <td>1 cada 11</td>
                      <td>1 cada 8</td>
                      <td>1 cada 5</td>
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
                <iframe
                  src="https://e.infogram.com/11f7f34e-4534-4569-80c2-7dc10920f923?src=embed"
                  title="Distribución de proyectos por área temática por año"
                  width={window.matchMedia('(min-width: 550px)').matches ? '550' : '360'}
                  height={window.matchMedia('(min-width: 550px)').matches ? '594' : '360'}
                  scrolling="no"
                  frameBorder="0" />
              </figure>
            </article>

            <article className="seccion-datos infogram">
              <h3 className='h3-tittle-spacing'>Ejecución % del Presupuesto por área temática por año</h3>
              <figure className="graph-box">
                <iframe
                  src="https://e.infogram.com/58c318ca-86b9-4d29-8793-8dc412551f54?src=embed"
                  title="Distribución de proyectos por área temática por año"
                  width={window.matchMedia('(min-width: 550px)').matches ? '550' : '360'}
                  height={window.matchMedia('(min-width: 550px)').matches ? '594' : '360'}
                  scrolling="no"
                  frameBorder="0" />
              </figure>
            </article>

            <div className='descargas'>
              <h4>DESCARGAS</h4>
              <div className="btns-descargas">
                <a href='https://s3.amazonaws.com/forosvecinales/proyectos-2013-2018_tipo-cantidad-inversion.xlsx' className='boton-azul'>Proyectos 2013-2018 por tipo (cantidad e inversión)</a>
                <a href='https://s3.amazonaws.com/forosvecinales/informacion_participacion.xlsx' className='boton-azul'>Información sobre participación</a>
                <a href='https://s3.amazonaws.com/forosvecinales/resultados-escrutinio-2017.xlsx' className='boton-azul'>Resultados de la votación 2017</a>
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
