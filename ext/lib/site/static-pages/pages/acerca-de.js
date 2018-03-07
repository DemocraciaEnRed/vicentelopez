import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
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
              <h1>Foros Vecinales</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-acerca-de container'>
            <div className="filas">
              <div className="subtitulo">
                <h2>Presupuesto Participativo 2018-2019</h2>
                <p>
                  Proponé proyectos para tu barrio y decidamos juntos cómo invertir $75 millones de pesos.
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
                    Los Foros Vecinales son espacios de participación ciudadana donde los vecinos deciden en qué invertir parte del presupuesto municipal. Todos los años, y desde hace 7 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.
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
                    Cualquier mayor de 16 años que viva o trabaje en Vicente López puede votar. Es muy fácil, te acercás a los puntos de votación, completás tus datos, marcás los 3 proyectos que considerás prioritarios para tu barrio y listo.
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
                    La votación estará abierta desde el lunes 15 hasta el domingo 28 de octubre de 2018. Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente López: Munro, Florida Oeste, Carapachay, La Lucila, Olivos, Villa Martelli, Florida Este, Vicente López y Villa Adelina.
                  </div>
                </div>
              </div>
              <div className="fila faq">
                <h3>¿CÓMO SE DISTRIBUYE EL DINERO POR BARRIO?</h3>
                <p>La partida, que corresponderá al presupuesto 2019, se repartirá siguiendo dos criterios: los primeros 36 millones se repartieron por partes iguales a cada uno de los 9 barrios. Los siguientes 39 millones se distribuirán según la cantidad de habitantes de cada barrio.</p>
                <h3>¿CÓMO SE ELABORAN LOS PROYECTOS?</h3>
                <p>En una serie de reuniones programadas (Foros Vecinales), los vecinos se encuentran con los funcionarios municipales de cada área para presentarles propuestas para cada barrio. También podés presentar tu propuesta <Link style={{ display: 'inline' }} to='/formulario-propuesta'>aquí</Link>
                </p>
                <h3>¿CÓMO SE DECIDE QUÉ PROYECTOS VAN A VOTACIÓN?</h3>
                <p>Para que una propuesta pueda convertirse en un proyecto votable, luego del trabajo conjunto con funcionarios, se pasa a una etapa de verificación legal, técnica y presupuestaria. En esta instancia se termina de definir la factibilidad del proyecto y los costos reales del mismo.</p>
                <h3>¿CÓMO SE DEFINEN LOS PROYECTOS GANADORES?</h3>
                <p>Los proyectos ganadores de cada barrio, surgen de tu voto y el de tus vecinos. Los proyectos más votados, que no superen el monto asignado a cada barrio, serán realizados el año que viene.</p>
              </div>
              <div className="fila no-bg">
                <Anchor id='mapa'>
                  <div className="map-box">
                    <div className='mapa'>
                      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DEX8V6qaMQy-8NYKNPhsLH_xQnY&z=11&ll=-34.5174, -58.5026" width="640" height="480"></iframe>
                    </div>
                  </div>
                </Anchor>

                <div className='table-responsive'>
                  <h3>Cronograma de reuniones por barrio</h3>
                  <table className='table tabla-reuniones'>
                    <tbody>
                      <tr>
                        <th>Olivos</th>
                        <th>Martes 20 de marzo</th>
                        <th>Colegio Virgen Del Carmen</th>
                        <th>Valle Grande 3141</th>
                      </tr>
                      <tr>
                        <td>Olivos</td>
                        <td>Jueves 22 de marzo</td>
                        <td>Colegio Asunción De La Virgen</td>
                        <td>Ugarte 2379</td>
                      </tr>
                      <tr>
                        <td>Olivos</td>
                        <td>Jueves 5 de abril</td>
                        <td>Escuela Primaria nº 2</td>
                        <td>Pelliza 1390</td>
                      </tr>
                      <tr>
                        <td>La Lucila</td>
                        <td>Martes 10 de abril</td>
                        <td>Jardín De Infantes nº 8</td>
                        <td>Díaz Vélez 1129</td>
                      </tr>
                      <tr>
                        <td>Munro</td>
                        <td>Jueves 12 de abril</td>
                        <td>Inst. De Ed. Integral De Munro</td>
                        <td>Carlos Tejedor 2761</td>
                      </tr>
                      <tr>
                        <td>Munro</td>
                        <td>Martes 17 de abril</td>
                        <td>Colegio María Auxiliadora</td>
                        <td>Panamá 3274</td>
                      </tr>
                      <tr>
                        <td>Vicente López</td>
                        <td>Jueves 16 de abril</td>
                        <td>Colegio Saint Gregory</td>
                        <td>Melo 948</td>
                      </tr>
                      <tr>
                        <td>Carapachay</td>
                        <td>Jueves 3 de Mayo</td>
                        <td>Escuela Secundaria nº 3</td>
                        <td>Drysale 5635</td>
                      </tr>
                      <tr>
                        <td>Florida Oeste</td>
                        <td>Martes 8 de mayo</td>
                        <td>Instituto FLorentino Ameghino</td>
                        <td>C. De Alvear 1144</td>
                      </tr>
                      <tr>
                        <td>Villa Martelli</td>
                        <td>Jueves 10 de mayo</td>
                        <td>Instituto Fátima</td>
                        <td>Laprida 4075</td>
                      </tr>

                      <tr>
                        <td>Villa Adelina</td>
                        <td>Martes 15 de mayo</td>
                        <td>Avapea</td>
                        <td>Plaza Ader</td>
                      </tr>
                      <tr>
                        <td>Florida Este</td>
                        <td>Jueves 17 de mayo</td>
                        <td>Escuela Secundaria nº 12</td>
                        <td>Haedo 2180</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="delegaciones-head">
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
                </div> */}
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
