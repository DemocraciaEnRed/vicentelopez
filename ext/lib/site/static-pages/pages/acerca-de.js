import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
// https://github.com/glennflanagan/react-responsive-accordion
import Accordion from 'react-responsive-accordion';

export default class Page extends Component {
  componentDidMount () {
    const u = new window.URLSearchParams(window.location.search)
    if (u.get('scroll') === 'cronograma') return Anchor.goTo('cronograma')
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
              <h1>Presupuesto Participativo</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-acerca-de container'>
            <div className="filas">
              <div className="fila faq text-left">
                <p className='p-padding'>Podés leer el reglamento completo haciendo click <a href="/s/reglamento">aquí</a></p>

                <Accordion startPosition={-1}>
                  <div data-trigger="+ ¿QUÉ ES EL PRESUPUESTO PARTICIPATIVO DE VICENTE LÓPEZ?">
                    <p className='p-padding'>El Presupuesto Participativo de Vicente López es un espacio de participación a través del cual los vecinos proponen y deciden en qué invertir una parte del presupuesto municipal. Todos los años, y desde hace 8 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos. La partida para el 2021 será de $165 millones.</p>
                  </div>

                   <div data-trigger="+ ¿CÓMO SE DISTRIBUYE EL DINERO POR BARRIO?">
                     <p className='p-padding'>La partida de $165 millones, que corresponderá al presupuesto 2021, se repartirá según dos criterios: los primeros 53 millones por partes iguales a cada uno de los 9 barrios. Y los siguientes 57 millones según la cantidad de habitantes de cada barrio. Así, los barrios con más población, reciben más partida presupuestaria.</p>
                     <table className='table tabla-reuniones alinear'>
                       <tbody>
                         <tr>
                           <td>OLIVOS</td>
                           <td>$ 21.621.796</td>
                         </tr>
                         <tr>
                           <td>MUNRO</td>
                           <td>$ 21.621.796</td>
                         </tr>
                         <tr>
                           <td>FLORIDA ESTE</td>
                           <td>$ 21.621.796</td>
                         </tr>
                         <tr>
                           <td>VILLA MARTELLI</td>
                           <td>$ 18.187.176</td>
                         </tr>
                         <tr>
                           <td>FLORIDA OESTE</td>
                           <td>$ 18.187.176</td>
                         </tr>
                         <tr>
                           <td>VICENTE LÓPEZ</td>
                           <td>$ 18.187.176</td>
                         </tr>
                         <tr>
                           <td>CARAPACHAY</td>
                           <td>$ 15.191.028</td>
                         </tr>
                         <tr>
                           <td>VILLA ADELINA</td>
                           <td>$ 15.191.028</td>
                         </tr>
                         <tr>
                           <td>LA LUCILA</td>
                           <td>$ 15.191.028</td>
                         </tr>
                         <tr>
                           <td>TOTAL</td>
                           <td>$ 165.000.000</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>

                   <div data-trigger="+ ¿QUIÉN PUEDE PRESENTAR PROPUESTAS?">
                   <p>Cualquier persona mayor de 16 años que viva o trabaje en cualquiera de los 9 barrios de Vicente López. También pueden presentar propuestas las instituciones de bien público registradas en el Partido.</p>
                   </div>

                   <div data-trigger="+ ¿CUÁNTOS PROYECTOS PUEDE PRESENTAR UNA ENTIDAD?">
                   <p>Las entidades que desarrollen sus actividades en más de un barrio del Partido, podrán presentar hasta un máximo de 2 proyectos en 2 barrios (es decir, 1 por cada barrio).</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO SE ELABORAN LOS PROYECTOS?">
                   <p>En una serie de reuniones informativas, los vecinos y los representantes de las entidades se encuentran con funcionarios municipales para presentarles propuestas para cada barrio.También podés presentar tu propuesta en esta plataforma. Este año 2020, tenés tiempo hasta el 31 de mayo inclusive.</p>
                   </div>

                   <div data-trigger="+ ¿QUÉ TIPO DE PROYECTOS PUEDO PRESENTAR?">
                   <p>Podés presentar:</p>
                   <p>1. Propuestas de obras o equipamiento para: espacios públicos, escuelas de gestión pública, centros de salud municipales, polideportivos, sociedades de fomento, centros de jubilados, sociedades de fomento, clubes, entre otros. La condición es que sean entidades sin fines de lucro.</p>
                   <p>2. También podés presentar propuestas de campañas o talleres sobre un determinado tema. En ese caso, se limitarán exclusivamente al año de ejecución (2021), en caso de que los vecinos las elijan.</p>
                   <p>3. Las propuestas no pueden involucrar gastos en recursos humanos que incrementen la planta de empleados municipales.</p>
                   <p>4. Tenés que presentarla para un barrio en concreto. No puede ser una propuesta para todo el Municipio, o en todo caso, tenés que presentarla en todos los barrios.</p>
                   <p>5. El presupuesto máximo de la propuesta no puede superar los $ 4.500.000.</p>
                   <p>6. La propuesta no puede referirse a un espacio que no esté en jurisdicción del Municipio de Vicente López, a excepción de las escuelas públicas de gestión provincial.</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO SE DECIDE QUÉ PROYECTOS VAN A VOTACIÓN?">
                   <p>Para que una propuesta pueda convertirse en un proyecto votable, luego del trabajo conjunto con funcionarios, se pasa a una etapa de verificación legal, técnica y presupuestaria. En esta instancia se termina de definir la factibilidad del proyecto y los costos estimados del mismo.</p>
                   </div>

                   <div data-trigger="+ ¿QUIÉN PUEDE VOTAR LOS PROYECTOS?">
                   <p>Cualquier mayor de 16 años que viva o trabaje en Vicente López puede votar los proyectos. Para ello, tenés que acreditar domicilio particular o laboral en alguno de los 9 barrios del Partido.</p>
                   <p>En el caso de los proyectos de escuelas públicas de gestión provincial o municipal, también pueden votar los alumnos mayores de 16 años y hasta un mayor de 16 años por cada alumno menor de 16 años inscriptos en la escuela respectiva, aunque no tengan domicilio en el barrio o en el partido de Vicente López. Estas personas solo podrán elegir el proyecto de la escuela y deberán estar registradas en un padrón especial que debe confeccionar la escuela y enviar a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> antes de que comience la votación. </p>
                   <p>En el caso de proyectos presentados por entidades intermedias, sus directivos, asociados e inscriptos en talleres brindados por las mismas que no tengan domicilio en el barrio donde esté ubicada la entidad o en el partido de Vicente López también podrán votar pero solo podrán elegir el proyecto de la entidad y deberán estar registrados en un padrón especial que debe confeccionar la entidad y enviar a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> antes de que comience la votación.</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO ACREDITO DOMICILIO?">
                   <p>Tu domicilio particular se acredita presentando tu DNI en el puesto de votación. Si figura otro domicilio, podés acercar la factura de algún servicio que acredite tu domicilio real.</p>
                   <p>Para acreditar tu domicilio laboral, tenés que presentar tu recibo de sueldo donde conste en el domicilio laboral en el barrio donde querés votar.</p>
                   </div>

                   <div data-trigger="+ ¿PUEDO VOTAR MÁS DE UNA VEZ?">
                   <p>Solo podés votar más de una vez si vivís en uno de los 9 barrios y trabajás en otro de los 9 barrios. Si vivís y trabajás en el mismo barrio, sólo podés votar una vez.</p>
                   <p>No está permitido votar más de una vez en un mismo barrio. Si alguien lo hiciera, se anulan todos los votos que haya realizado esa persona en el mismo barrio.</p>
                   </div>

                   <div data-trigger="+ ¿POR QUÉ PUEDEN PARTICIPAR CON PROPUESTAS LAS ESCUELAS PÚBLICAS DE GESTIÓN PROVINCIAL EN EL PRESUPUESTO PARTICIPATIVO?">
                   <p>Si bien las escuelas públicas de gestión provincial que funcionan en Vicente López dependen presupuestariamente de la Provincia de Buenos Aires, desde el año 2014 y dado el estado de las mismas, el Departamento Ejecutivo Municipal permite que dichas escuelas presenten propuestas al Presupuesto Participativo. Para ello, se estableció un monto límite por barrio y se plantearon 2 requisitos para acceder a este presupuesto: 1) que la escuela presente la propuesta y 2) que los vecinos del barrio la elijan con su voto. Para 2020, el límite por barrio se estableció en $4.5 millones y de hasta $4.5 millones por escuela.</p>
                   </div>

                   <div data-trigger="+ ¿CUÁNDO Y DÓNDE VOTO?">
                   <p>La votación estará abierta desde el <b>lunes 28 de septiembre hasta el domingo 11 de octubre de 2020</b>. Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente López: Munro, Florida Oeste, Carapachay, La Lucila, Olivos, Villa Martelli, Florida Este, Vicente López y Villa Adelina.</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO VOTO?">
                   <p>Es muy fácil, te acercás a los puntos de votación, completás tus datos en la boleta del barrio correspondiente, marcás los 3 proyectos que considerás prioritarios para tu barrio y listo.</p>
                   </div>

                   <div data-trigger="+ ¿CUÁNTOS PROYECTOS PUEDO ELEGIR?">
                   <p>Podés elegir hasta 3 proyectos, tildandolos en la boleta de votación del barrio correspondiente. Si elegís más de 3 proyectos, el voto es nulo.</p>
                   </div>

                   <div data-trigger="+ ¿EL VOTO ES SECRETO?">
                   <p>No, el voto en el Presupuesto Participativo es nominal. Como no existe un empadronamiento previo para votar, en el momento del escrutinio necesitamos poder verificar 1) que no haya duplicaciones de DNI, 2) que el domicilio que acredita la persona es del barrio, para que el voto sea válido.</p>
                   </div>

                   <div data-trigger="+ ¿CUÁNDO SE CUENTAN LOS VOTOS?">
                   <p>El escrutinio de la votación 2020 se realizará los días 14, 15 y 16 de octubre de 2020 a partir de las 9 hs en lugar a designar por la Subsecretaría de Participación Ciudadana. Cada uno de esos días, se contarán los votos de 3 barrios. Esta información se dará 15 días antes del comienzo de la votación.</p>
                   </div>

                   <div data-trigger="+ ¿SE PUEDE PRESENCIAR EL ESCRUTINIO?">
                   <p>Por supuesto. El escrutinio es público y abierto a todos los vecinos de Vicente López. Si te interesa presenciar el escrutinio de un barrio en particular, mandanos un mail a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> y te avisamos qué día y en qué horario se contarán los votos de las urnas ubicadas en los puntos de votación de ese barrio.</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO SE DEFINEN LOS PROYECTOS GANADORES?">
                   <p>Los proyectos ganadores de cada barrio, surgen de tu voto y el de tus vecinos. Los proyectos más votados, que no superen el monto asignado a cada barrio, serán realizados durante el año siguiente a la votación. Puede ocurrir que por orden de prioridad de votos, un proyecto supere por presupuesto el monto total establecido para el barrio; en ese caso, se pasará al proyecto que siga en cantidad de votos hasta agotar el monto asignado al barrio.</p>
                   </div>

                   <div data-trigger="+ ¿QUÉ HAGO SI TENGO UNA PREGUNTA QUE NO SE HA RESPONDIDO AQUÍ?">
                   <p>Llamanos al 4851-2000 interno 203 o envianos un mail a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> y te responderemos a la brevedad.</p>
                   </div>
                </Accordion>

              </div>

              <div className="fila no-bg hidden">
                <Anchor id='mapa'>
                  <div className="map-box">
                    <div className='mapa'>
                      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DEX8V6qaMQy-8NYKNPhsLH_xQnY&z=11&ll=-34.5174, -58.5026" width="640" height="480"></iframe>
                    </div>
                  </div>
                </Anchor>
                <Anchor id='cronograma'>
                  <div className='table-responsive'>
                    <h3>Cronograma de reuniones por barrio</h3>
                    <div>El horario de las reuniones de presentación de propuestas es de 19 a 21 hs</div>
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
                          <td>Jueves 19 de abril</td>
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
                          <td>Instituto Florentino Ameghino</td>
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
                          <td>Escuela Primaria nº 12</td>
                          <td>Haedo 2180</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Anchor>
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
