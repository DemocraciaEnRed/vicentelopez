import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'

export default class Page extends Component {
  componentDidMount() {
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
              <h1>Foros Vecinales</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-acerca-de container'>
            <div className="filas">
              <div className="subtitulo">
                <h2>Presupuesto Participativo 2017</h2>
                <p>
                  Gracias a vos recibimos más de 350 propuestas, vamos a votar y decidir juntos cómo
                  invertir $65 millones de pesos.
                </p>
              </div>
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
                    Los Foros Vecinales son espacios de participación ciudadana donde los vecinos deciden en qué invertir parte del presupuesto municipal. Todos los años, y desde hace 6 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
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
                    Cualquier mayor de 16 años que viva o trabaje en Vicente López podrá votar desde el lunes 18 de septiembre hasta el domingo 1 de octubre de 2017 inclusive en todas las urnas habilitadas. Votar es muy fácil, si te acercás a las urnas te van a dar una boleta con los proyectos (que también podés encontrar en esta web, descargar e imprimir). Marcás los proyectos que considerás prioritarios y listo. Los requisitos son vivir o trabajar en Vicente López y ser mayor de 16 años. <a href="/s/reglamento">Consultá el reglamento.</a>
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
                    Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente López: Munro, Florida Oeste, Carapachay, La Lucila, Olivos, Villa Martelli, Florida Este, Vicente López y Villa Adelina. La votación estará abierta desde el lunes 18 de septiembre hasta el domingo 1 de octubre de 2017.
                    <button className='boton-azul' onClick={() => Anchor.goTo('mapa')}>Consultá todos los puntos de votación aquí</button>
                  </div>
                </div>
              </div>
              <div className="fila faq">
                <h3>¿CÓMO SE DISTRIBUYE EL DINERO POR BARRIO?</h3>
                <p>La partida de este año (presupuesto 2018) se repartió siguiendo dos criterios. Los primeros 31,5 millones se repartieron por partes iguales a cada uno de los 9 barrios. Los siguientes 33,5 millones se distribuyeron según la cantidad de habitantes de cada barrio.</p>
                <h3>¿CÓMO SE ELABORARON LOS PROYECTOS?</h3>
                <p>En una serie de reuniones programadas (Foros Vecinales), los vecinos se encontraron con los funcionarios municipales de cada área para presentarles ideas para cada barrio y en conjunto se definieron los proyectos.
                Si te quedaste con alguna idea para tu barrio, no la descartes: estamos avanzando para que el año que viene haya más instancias de presupuesto participativo.</p>
                <h3>¿CÓMO SE DECIDIÓ QUÉ PROYECTOS VAN A VOTACIÓN?</h3>
                <p>Para que una propuesta pueda convertirse en un proyecto votable, luego del trabajo conjunto con funcionarios, se pasó a una etapa de verificación legal, técnica y presupuestaria. En esta instancia se terminó de definir la factibilidad del proyecto y los costos reales del mismo.</p>
                <h3>¿CÓMO SE DEFINEN LOS PROYECTOS GANADORES?</h3>
                <p>Los proyectos ganadores de cada barrio, van a surgir de tu voto y el de tus vecinos. En las urnas vas a encontrar una boleta con todos los proyectos y vas a poder elegir hasta 3 (también podés descargar la boleta de votación de este sitio). Los proyectos más votados de cada barrio que no superen el monto asignado serán realizados el año que viene.</p>
              </div>
              <div className="fila no-bg">
                <Anchor id='mapa'>
                  <div className="map-box">
                    <div className='mapa'>
                      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DEX8V6qaMQy-8NYKNPhsLH_xQnY&z=11&ll=-34.5174, -58.5026" width="640" height="480"></iframe>
                    </div>
                  </div>
                </Anchor>
                <div className="delegaciones-head">
                  <h3>Horarios de las delegaciones</h3>
                  <p>Estarán abiertas de 8:30hs a 16hs de lunes a viernes. Las urnas serán atendidas por personal de cada delegación</p>
                </div>
                <div className="delegaciones">
                  <div>
                    <span>Delegación Carapachay</span>
                    <span>Delegado: Juan Antonio Gentiluomo</span>
                    <span>Dirección: Ascasubi 5702, Carapachay</span>
                    <span>Teléfono: 4756-3098</span>
                    <span>Mail: delegacion.carapachay@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación Florida Central</span>
                    <span>Delegado: Susana Mabel Orue</span>
                    <span>Dirección: V. Vergara 2382, Florida</span>
                    <span>Teléfono: 4796-3894/ 4718-1991</span>
                    <span>Mail: delegacion.florida@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación Florida Oeste</span>
                    <span>Delegado: Juan Marandola</span>
                    <span>Dirección: San Martin 4106, Florida Oeste</span>
                    <span>Teléfono: 4760-5896/ 4760-9268</span>
                    <span>Mail: delegacion.floridao@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación La Loma de Roca (Olivos)</span>
                    <span>Delegado: Rocío Suarez</span>
                    <span>Dirección: Uzal 3620, Olivos</span>
                    <span>Teléfono: 4519-2137/ 4519-2138</span>
                    <span>Mail: delegacion.laloma@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación La Lucila</span>
                    <span>Delegado: Laura Caramella</span>
                    <span>Dirección: Anchorena 721, La Lucila</span>
                    <span>Teléfono: 4790-8264/ 4711-0704</span>
                    <span>Mail: delegacion.lalucila@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación Munro</span>
                    <span>Delegado: Héctor Cioncio</span>
                    <span>Dirección: Vélez Sarsfield 4839, Munro</span>
                    <span>Teléfono: 4762-1204</span>
                    <span>Mail: delegacion.munro@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación Villa Adelina</span>
                    <span>Delegado: Ester Lanzalot</span>
                    <span>Dirección: Av. Ader 4057, Villa Adelina</span>
                    <span>Teléfono: 4763-7727</span>
                    <span>Mail: delegacion.adelina@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación Villa Martelli</span>
                    <span>Delegado: Katia Seguín</span>
                    <span>Dirección: Laprida 3902, Villa Martelli</span>
                    <span>Teléfono: 4709-5775/ 4709-1144</span>
                    <span>Mail: delegacion.martelli@vicentelopez.gov.ar</span>
                  </div>
                  <div>
                    <span>Delegación Puente Saavedra</span>
                    <span>Delegado: José Luis Ruiz</span>
                    <span>Dirección: Av. Maipú 130, Florida</span>
                    <span>Teléfono: 4791-2011 / 5194-4327</span>
                    <span>Mail: delegacion.saavedra@vicentelopez.gov.ar</span>
                  </div>
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
