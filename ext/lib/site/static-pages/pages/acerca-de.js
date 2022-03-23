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
    window.scrollTo(0,0)
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
        <div id='container'>
          <div className='ext-acerca-de container'>
            <div className="filas">
              <div className="fila faq text-left">
                <Accordion startPosition={-1}>
                  <div data-trigger="+ ¿QUÉ ES EL PRESUPUESTO PARTICIPATIVO DE VICENTE LÓPEZ?">
                    <p className='p-padding'>El Presupuesto Participativo de Vicente López (PPVL) es un espacio de participación a través del cual los habitantes de Vicente López proponen y deciden en qué invertir una parte del presupuesto municipal. Todos los años, y desde hace 10 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.</p>
                  </div>

                   <div data-trigger="+ ¿CÓMO SE DISTRIBUYE EL DINERO POR BARRIO?">
                      <p className='p-padding'>La partida asignada al Programa se distribuye según dos criterios: aproximadamente el 50% por partes iguales a cada uno de los 9 barrios. Y el resto, según la cantidad de habitantes de cada barrio. Así, los barrios con más población, reciben más partida presupuestaria.</p>
                      <p>Para el 2023, el presupuesto participativo será de $290.000.000 y se distribuye así: </p>
                      <ul>
                        <li><p><b>OLIVOS</b>: $38.002.148</p></li>
                        <li><p><b>MUNRO</b>: $38.002.148</p></li>
                        <li><p><b>FLORIDA ESTE</b>: $38.002.148</p></li>
                        <li><p><b>VILLA MARTELLI</b>: $31.965.330</p></li>
                        <li><p><b>VICENTE LÓPEZ</b>: $31.965.330</p></li>
                        <li><p><b>FLORIDA OESTE</b>: $31.965.330</p></li>
                        <li><p><b>CARAPACHAY</b>: $26.669.188</p></li>
                        <li><p><b>LA LUCILA</b>: $26.669.188</p></li>
                        <li><p><b>VILLA ADELINA</b>: $26.669.188</p></li>
                      </ul>
                   </div>

                   <div data-trigger="+ ¿QUIÉN PUEDE PRESENTAR PROPUESTAS?">
                   <p>Cualquier persona mayor de 16 años que viva o trabaje en cualquiera de los 9 barrios de Vicente López. También pueden presentar propuestas las instituciones de bien público registradas en el Partido y las instituciones educativas de gestión estatal de la Provincia de Buenos Aires con sede en el Partido de Vicente López.</p>
                   </div>

                   <div data-trigger="+ ¿CUÁNTOS PROYECTOS PUEDE PRESENTAR UNA ENTIDAD?">
                   <p>Las entidades que desarrollen sus actividades en más de un barrio del Partido, podrán presentar hasta un máximo de 2 proyectos en 2 barrios (es decir, 1 por cada barrio).</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO SE ELABORAN LOS PROYECTOS?">
                   <p>En una serie de reuniones informativas, los vecinos y los representantes de las entidades se encuentran con funcionarios municipales para presentarles propuestas para cada barrio. Las propuestas siempre deben cargarse en esta plataforma, utilizando el formulario de presentación de propuestas.</p>
                   </div>

                   <div data-trigger="+ ¿QUÉ TIPO DE PROYECTOS PUEDO PRESENTAR?">
                    <p>Podés presentar:</p>
                    <p>1. Propuestas de obras o equipamiento para: espacios públicos, escuelas de gestión pública, centros de salud municipales, polideportivos, sociedades de fomento, centros de jubilados, sociedades de fomento, clubes, entre otros. La condición es que sean entidades sin fines de lucro.</p>
                    <p>2. También propuestas de campaSñas o talleres sobre un determinado tema. En ese caso, se limitarán exclusivamente al año de ejecución que le corresponda a esa propuesta, en caso de que los vecinos la elijan.</p>
                    <p>3. Las propuestas no pueden involucrar gastos en recursos humanos que incrementen la planta de empleados municipales.</p>
                    <p>4. Tenés que acotarla a un barrio (localidad) en concreto. No puede ser una propuesta para todo el Municipio.</p>
                    <p>5. El presupuesto máximo de la propuesta no puede superar un monto determinado (para los proyectos a ejecutar en 2022 será de $5.000.000).</p>
                    <p>6. La propuesta no puede referirse a un espacio que no esté en jurisdicción del Municipio de Vicente López, a excepción de las escuelas públicas de gestión provincial.</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO SE DECIDE QUÉ PROYECTOS VAN A VOTACIÓN?">
                   <p>Para que una propuesta pueda convertirse en un proyecto votable, luego del trabajo conjunto con funcionarios, se pasa a una etapa de verificación legal, técnica y presupuestaria. En esta instancia se termina de definir la factibilidad del proyecto y los costos estimados del mismo.</p>
                   </div>

                   <div data-trigger="+ ¿QUIÉN PUEDE VOTAR LOS PROYECTOS?">
                     <p>Cualquier mayor de 16 años que viva o trabaje en Vicente López puede votar los proyectos. Para ello, tenés que acreditar domicilio particular o laboral en alguno de los 9 barrios del Partido.</p>
                     <p>En el caso de los proyectos de escuelas públicas de gestión provincial o municipal, también pueden votar los alumnos mayores de 16 años y hasta un mayor de 16 años por cada alumno menor de 16 años inscriptos en la escuela respectiva, aunque no tengan domicilio en el barrio o en el partido de Vicente López. Estas personas solo podrán elegir el proyecto de la escuela y deberán estar registradas en un padrón especial que debe confeccionar la escuela y cargar en la plataforma que le indique la Subsecretaría de Participación Ciudadana oportunamente.</p>
                     <p>En el caso de proyectos presentados por entidades intermedias, sus directivos, asociados e inscriptos en talleres brindados por las mismas que no tengan domicilio en el barrio donde esté ubicada la entidad o en el partido de Vicente López también podrán votar pero solo podrán elegir el proyecto de la entidad y deberán estar registrados en un padrón especial que debe confeccionar la entidad y cargar en la plataforma que le indique la Subsecretaría de Participación Ciudadana oportunamente.</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO ACREDITO DOMICILIO?">
                    <p>Tu domicilio particular se acredita presentando tu DNI en el puesto de votación. Si figura otro domicilio, podés acercar la factura de algún servicio que acredite tu domicilio real.</p>
                    <p>Para acreditar tu domicilio laboral, tenés que presentar tu recibo de sueldo o un certificado de trabajo, donde conste en el domicilio laboral en el barrio donde querés votar.</p>
                   </div>

                   {/* <div data-trigger="+ ¿PUEDO VOTAR MÁS DE UNA VEZ?">
                   <p>Solo podés votar más de una vez si vivís en uno de los 9 barrios y trabajás en otro de los 9 barrios. Si vivís y trabajás en el mismo barrio, sólo podés votar una vez.</p>
                   <p>No está permitido votar más de una vez en un mismo barrio. Si alguien lo hiciera, se anulan todos los votos que haya realizado esa persona en el mismo barrio.</p>
                   </div> */}

                   <div data-trigger="+ ¿POR QUÉ PUEDEN PARTICIPAR CON PROPUESTAS LAS ESCUELAS PÚBLICAS DE GESTIÓN PROVINCIAL EN EL PRESUPUESTO PARTICIPATIVO?">
                    <p>Si bien las escuelas públicas de gestión provincial que funcionan en Vicente López dependen presupuestariamente de la Provincia de Buenos Aires, desde el año 2014 y dado el estado de las mismas, el Departamento Ejecutivo Municipal permite que dichas escuelas presenten propuestas al Presupuesto Participativo. Para ello, se estableció un monto límite por barrio ($5.000.000) y se plantearon 2 requisitos: Para presentar la propuesta, la escuela debe contar con la aprobación del Consejo Escolar y, de resultar un proyecto factible, debe ganarse el derecho a ser realizado en igualdad de condiciones que el resto de los proyectos, es decir, a través del voto directo de las personas habilitadas para votar.</p>
                   </div>

                   {/* <div data-trigger="+ ¿CUÁNDO Y DÓNDE VOTAR?">
                   <p>En 2021, la votación se realizará exclusivamente por modalidad online en un portal al que se accede por esta misma plataforma web. Las personas registradas y habilitadas para votar podrán hacerlo entre el lunes 18 de octubre a las 00.00 hs y el domingo 31 de octubre a las 23.59 hs</p>
                   </div>

                   <div data-trigger="+ ¿SE PUEDE VOTAR MÁS DE UNA VEZ?">
                   <p>Solo podés votar más de una vez si vivís en uno de los 9 barrios y trabajás en otro de los 9 barrios. Si vivís y trabajás en el mismo barrio, sólo podés votar una vez.</p>
                   </div>

                   <div data-trigger="+ ¿CÓMO VOTAR?">
                   <p>Para poder votar los proyectos, antes tenés que registrarte en el mismo portal de votación (<a href="https://votacionpp.vicentelopez.gov.ar" target="_blank">https://votacionpp.vicentelopez.gov.ar</a>). Las personas que vivan y/o trabajen en Vicente López podrán registrarse desde el 20 de septiembre de 2021 hasta el 31 de octubre de 2021.</p>
                   </div>
                   
                   <div data-trigger="+ ¿QUÉ DOCUMENTACIÓN NECESITO PARA REGISTRARME?">
                   <p>Para registrarte para votar los proyectos, deberás tener a mano tu DNI con domicilio en Vicente López.</p>
                   </div>

                   <div data-trigger="+ ¿CUÁNTOS PROYECTOS PUEDO ELEGIR?">
                   <p>Podés elegir hasta 3 proyectos, tildándolos en el listado de proyectos de los barrios en los que estés habilitado para votar según tu registro.</p>
                   </div>

                   <div data-trigger="+ ¿EL VOTO ES SECRETO?">
                   <p>No, el voto en el Presupuesto Participativo de Vicente López es nominal.</p>
                   </div>

                   <div data-trigger="+ ¿CUÁNDO SE CUENTAN LOS VOTOS?">
                   <p>El escrutinio se realizará el Martes 2 de noviembre de 2021 en lugar a designar por la Subsecretaría de Participación Ciudadana</p>
                   </div>

                   <div data-trigger="+ ¿SE PUEDE PRESENCIAR EL ESCRUTINIO?">
                   <p>Por supuesto. El escrutinio es público. Si te interesa presenciarlo, mandanos un mail a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a></p>
                   </div> */}

                   <div data-trigger="+ ¿CÓMO SE DEFINEN LOS PROYECTOS GANADORES?">
                   <p>Los proyectos ganadores de cada barrio, surgen de tu voto y el de tus vecinos. Los proyectos más votados, que no superen el monto asignado a cada barrio, serán realizados durante el año siguiente a la votación. Puede ocurrir que por orden de prioridad de votos, un proyecto supere por presupuesto el monto total establecido para el barrio; en ese caso, se pasará al proyecto que siga en cantidad de votos hasta agotar el monto asignado al barrio.</p>
                   </div>

                   <div data-trigger="+ ¿QUÉ HAGO SI TENGO UNA PREGUNTA QUE NO SE HA RESPONDIDO AQUÍ?">
                   <p>Consultá el reglamento del PPVL para 2022-2023 haciendo <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/assets/reglamento-pp-vicente-lopez.pdf' target='_blank'>click acá</a>, envianos un WhatsApp al +5491162426741 o envianos un mail a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> y te responderemos a la brevedad.</p>
                   </div>
{/* 
                   <div data-trigger="+ ¿DÓNDE ENCUENTRO EL REGLAMENTO DEL PRESPUESTO PARTICIPATIVO 2022?">
                   <p>El reglamento lo podés encontrar haciendo <a href='https://celeste.blob.core.windows.net/pp-vicentelopez/assets/reglamento-pp-vicente-lopez.pdf' target='_blank'>click acá</a>.</p>
                   </div> */}
                   <div data-trigger="+ ¿DÓNDE ENCUENTRO LOS TÉRMINOS Y CONDICIONES DE LA PLATAFORMA?">
                   <p>Los términos y condiciones los podés encontrar haciendo <Link to='/s/terminos-y-condiciones'>click acá</Link>.</p>
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
        </div>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
