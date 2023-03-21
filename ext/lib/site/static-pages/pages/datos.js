import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
import Proyectos from 'ext/lib/site/proyectos/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import DonutChart from 'ext/lib/site/graphics/donut-chart/component'
import LineChart from 'ext/lib/site/graphics/line-chart/component'
import Banner400Proyectos from '../../banner-400-proyectos/component.js'
import GenericBanner from '../../generic-banner/component.js'
import textStore from 'lib/stores/text-store'
import dataFilesStore from 'lib/stores/data-file-store/data-files-store.js'


const distribucionProyectosData = require('./distribucion-proyectos.json')
const ejecucionProyectosData = require('./ejecucion-proyectos.json')

export default class Page extends Component {
  constructor () {
    super()

    this.state = {
      files: null,
      texts: null
    }
  }
  
  componentDidMount() {
    textStore.findAllDict().then((textsDict) => {
      this.setState({
        texts: textsDict
      })
    }).catch((err) => {
      this.state = {
        texts: {}
      }
    }
    )

    dataFilesStore
    .findAll()
    .then((files) => this.setState({ files }))
    .catch((err) => {
      throw err
    })
    
    this.goTop()
  }

  goTop() {
    window.scrollTo(0, 0)
  }

  handleClickScroll(toGo,event) {
    const element = document.getElementById(toGo);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    const {files, texts} = this.state

    return (
      <div>
        <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1 >El presupuesto participativo en datos</h1>
            </div>
          </div>
        </section>
        {/* <Banner400Proyectos /> */}
        <div className='subtitle'>
          <h2>Gracias por tu <strong>participación y voto</strong>, seguimos mejorando los barrios de Vicente Lopez.</h2>

        </div>
        <br />
        <br />
        <div id='container'>

          <div className='ext-datos'>
          <article className="seccion-datos">

					{texts && <div className="card-deck" >
						<div className="card wow fadeInUp" >
							<div className="icono"  style={{backgroundImage: `url(${texts['datos-icono1-imagen']})`}}></div>
							<p>{texts['datos-icono1-titulo']}<br/>
							<b>{texts['datos-icono1-text']}</b></p>
						</div>
						<div className="card wow fadeInUp" >
							<div className="icono"  style={{backgroundImage: `url(${texts['datos-icono2-imagen']})`}}></div>
							<p>{texts['datos-icono2-titulo']}<br/>
							<b>{texts['datos-icono2-text']}</b></p>
						</div>
						<div className="card wow fadeInUp">
							<div className="icono"  style={{backgroundImage: `url(${texts['datos-icono3-imagen']})`}}></div>
							<p>{texts['datos-icono3-titulo']}<br/>
							<b>{texts['datos-icono3-text']}</b></p>
						</div>
					</div>}
          
          </article>
          <div className='boton-group'>
            <button className='boton-round cl-cyan' onClick={this.handleClickScroll.bind(this,'pp-evolution')} data-scroll='pp-evolution'><strong>Evolución del PP</strong></button>
            <button className='boton-round cl-purple' onClick={this.handleClickScroll.bind(this,'open-data')} data-scroll='open-data'><strong>Datos abiertos</strong></button>
          </div>
            

            <article className="seccion-datos">
              <h3>Evolución de la participación en el pp</h3>

                <iframe 
                  src='https://flo.uri.sh/visualisation/12392403/embed' 
                  title='Interactive or visual content' 
                  className='flourish-embed-iframe iframe-bars'  
                  scrolling='no'  
                  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'/>

                  {/*<LineChart />
                                     <img src="/ext/lib/site/static-pages/evolucion-participacion1.png" alt=""/>
                
                <figcaption>
                  <p className="caption">Evolución de ciudadanos (porcentaje de la población de Vicente López) que han participado en el presupuesto participativo de Vicente López.</p>
                </figcaption> 
                <tfoot>
                <tr>
                  <td colSpan={10} class="descargas-info">"Edición 2020- 2021 suspendida por pandemia"</td>
                </tr>
              </tfoot> */}
            </article>

              <GenericBanner title={<div>Nos enorgullece tener un crecimiento en la participación de los vecinos e instituciones</div>} />

            <article className="seccion-datos" id="pp-evolution">
              <h3>Evolución dEL ppvl</h3>
              <iframe src='https://flo.uri.sh/story/1794394/embed' title='Interactive or visual content' className='flourish-embed-iframe iframe-map'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

              {/* <DonutChart data={ejecucionProyectosData} title="Ejecución % del Presupuesto por área temática por año" /> */}
            </article>


            <article className="seccion-datos">
            {/* <h3>Como se distribuye el presupuesto año a año por las tematicas de los proyectos</h3> */}
              <iframe src='https://flo.uri.sh/visualisation/12369808/embed' title='Ejecución % del Presupuesto por área temática por año' className='flourish-embed-iframe iframe-cake' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'/>
              {/* <DonutChart data={distribucionProyectosData} title="Distribución de proyectos por área temática por año" /> */}
            </article>
            
            <article className="seccion-datos table-flourish">
            <iframe src='https://flo.uri.sh/visualisation/12538255/embed' title='Interactive or visual content' className='flourish-embed-iframe iframe-table' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
            </article>

             <GenericBanner title="Te invitamos a conocer en mayor profundidad los resultados de años anteriores del presupuesto participativo"  /> 

            


            <div className='descargas' id='open-data'>
             <div className='title-descargas'>
                <h5>Aquí podés encontrar el historial de diferentes documentos utilizados en años anteriores del presupuesto participativo, los resultados de los mismos y acceder a nuestro portal de datos abiertos</h5>

              </div>
              <div className='btns-historial'>
                <Link href='http://vicentelopez.opendata.junar.com/dashboards/20165/presupuesto-participativo/' target="_blank">
                  <button className='boton-rounded'>
                    Visitá nuestro portal de datos abiertos
                  </button>
                </Link>
              </div>
              <div className='title-descargas'>
                <h5>Descargá nuestros data sets <span> (en formato .csv) </span> con los resultados de los presupuestos realizados hasta la fecha</h5>

              </div>
              <div className='btns-descargas'>
              {files && files.map(file =>
                  <div className='descargas-info' key={file.id}>
                  <h5>{file.title}</h5>
                  {file.description && <p>{file.description}</p>}
                  {file.publishedAt && <span className='descarga-fecha'>Publicado: {file.publishedAt}</span>}
                  <a href={file.link} className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div>
                  
                  )}
                {/* <div className='descargas-info'>
                  <h5>Proyectos 2013-2023 por tipo (cantidad e inversión)</h5>
                  <p>Datos históricos de la cantidad de proyectos e inversión presupuestaria segmentado por temática.</p>
                  <span className='descarga-fecha'>Publicado: Marzo de 2023</span>
                  <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/informes/proyectos-2013-2020_tipo-cantidad-inversion.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Información sobre participación 2012-2019</h5>
                  <p>Datos de la cantidad de participantes, votantes por barrio y ratio con datos de población desde 2012 a 2019.</p>
                  <span className='descarga-fecha'>Publicado: Marzo 2020</span>
                  <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/informes/informacion_participacion.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2017</h5>
                  <p>Detalle de los proyectos ganadores en la votación de 2017. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.</p>
                  <span className='descarga-fecha'>Publicado: Octubre de 2017</span>
                  <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/informes/resultados-escrutinio-2017.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2018</h5>
                  <p>Detalle de los proyectos ganadores y no ganadores en la votación de 2018. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.</p>
                  <span className='descarga-fecha'>Publicado: Octubre de 2018</span>
                  <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/informes/resultados-escrutinio-2018.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2019</h5>
                  <p>Detalle de los proyectos ganadores y no ganadores en la votación de 2019. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado. </p>
                  <span className='descarga-fecha'>Publicado: Noviembre de 2019</span>
                  <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/informes/Escrutinio-2019.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2021</h5>
                  <p>Detalle de los proyectos ganadores y no ganadores en la votación de 2021. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.</p>
                  <span className='descarga-fecha'>Publicado: Noviembre de 2021</span>
                  <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/informes/Escrutinio-2021.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div>
                <div className='descargas-info'>
                  <h5>Resultados de la votación 2022</h5>
                  <p>Detalle de los proyectos ganadores y no ganadores en la votación de 2022. Incluye barrio, cantidad de votos, orden de votación y presupuesto estimado.</p>
                  <span className='descarga-fecha'>Publicado: Noviembre de 2022</span>
                  <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/informes/Escrutinio-2022.xlsx' className='icon-descarga'>
                    <svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Guides__x26__Forms" /><g id="Icons"><g><rect height="2" width="16" x="8" y="23" /><polygon points="24,13.5 22.586,12.086 17,17.672 17,7 15,7 15,17.672 9.414,12.086 8,13.5 16,21.5" /></g></g></svg>
                  </a>
                </div> */}
              </div>
              <div className='btns-historial'>
                <h6>Para conocer los diferentes documentos de los presupuestos participativos pasados (2012-2019) ingresa a nuestro historial. En el podrás encontrar minutas, boletas de las instancias presenciales (hasta 2017) y el listado de proyectos.</h6>
                <Link href='/s/documentos'>
                  <button className='boton-outlined'>
                    Visualizar historial de documentos
                  </button>
                </Link>
              </div>
              {/* <h4>PORTAL DE DATOS ABIERTOS DE VICENTE LOPEZ</h4>
              <div className='portal-vl btns-descargas'>
                <div className='portal-vl-datos'>
                  <div className='portal-vl-datos-num'>
                    <span className='num'>+ 16</span>
                    <img src="/ext/lib/site/static-pages/icon-bar.svg" alt="" />
                    <span className='leyenda'>Colecciones</span>
                  </div>
                  <div className='portal-vl-datos-num'>
                    <span className='num'>+ 227</span>
                    <img src="/ext/lib/site/static-pages/icon-folder.svg" alt="" />
                    <span className='leyenda'>Data Sets</span>
                  </div>
                  <Link href='http://vicentelopez.opendata.junar.com/dashboards/20165/presupuesto-participativo/' target="_blank">
                    <button className='boton-azul'>
                      Ir al portal de datos abiertos
                    </button>
                  </Link>
                  <p>La Municipalidad de Vicente López, en el marco de la Política de transparencia, participación y colaboración ciudadana, ha incorporado una plataforma de datos abiertos. La misma cuenta con una sección exclusiva del presupuesto participativo.</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
