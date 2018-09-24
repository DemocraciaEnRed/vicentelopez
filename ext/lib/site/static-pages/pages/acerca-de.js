import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from 'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'

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
              <h1>Foros Vecinales</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-acerca-de container'>
            <div className="filas">
              <div className="subtitulo">
                <h2>Presupuesto Participativo 2018-2019</h2>
                <p> <Link style={{ display: 'inline' }} to='/formulario-propuesta'>Proponé proyectos para tu barrio</Link> y decidamos juntos cómo invertir $75 millones de pesos.
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
                    La votación estará abierta desde el lunes 24 de septiembre hasta el domingo 7 de octubre de 2018. Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente López: Munro, Florida Oeste, Carapachay, La Lucila, Olivos, Villa Martelli, Florida Este, Vicente López y Villa Adelina.
                  </div>
                </div>
              </div>
              <div className="fila faq">
                <h3>¿QUÉ ES EL PRESUPUESTO PARTICIPATIVO DE VICENTE LÓPEZ?</h3>
                <p className='p-padding'>El Presupuesto Participativo de Vicente López es un espacio de participación a través del cual los vecinos proponen y deciden en qué invertir una parte del presupuesto municipal. Todos los años, y desde hace 7 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos. La partida para el 2019 será de $75 millones.</p>
                <h3>¿CÓMO SE DISTRIBUYE EL DINERO POR BARRIO?</h3>
                <p className='p-padding'>La partida de $75 millones, que corresponderá al presupuesto 2019, se repartirá según dos criterios: los primeros 36 millones por partes iguales a cada uno de los 9 barrios. Y los siguientes 39 millones según la cantidad de habitantes de cada barrio. Así, los barrios con más población, reciben más partida presupuestaria.</p>
                <table className='table tabla-reuniones alinear'>
                  <tbody>
                    <tr>
                      <td>OLIVOS</td>
                      <td>$ 9.833.333</td>
                    </tr>
                    <tr>
                      <td>MUNRO</td>
                      <td>$ 9.833.333</td>
                    </tr>
                    <tr>
                      <td>FLORIDA ESTE</td>
                      <td>$ 9.833.333</td>
                    </tr>
                    <tr>
                      <td>VILLA MARTELLI</td>
                      <td>$ 8.266.666</td>
                    </tr>
                    <tr>
                      <td>FLORIDA OESTE</td>
                      <td>$ 8.266.666</td>
                    </tr>
                    <tr>
                      <td>VICENTE LÓPEZ</td>
                      <td>$ 8.266.666</td>
                    </tr>
                    <tr>
                      <td>CARAPACHAY</td>
                      <td>$ 6.900.000</td>
                    </tr>
                    <tr>
                      <td>VILLA ADELINA</td>
                      <td>$ 6.900.000</td>
                    </tr>
                    <tr>
                      <td>LA LUCILA</td>
                      <td>$ 6.900.000</td>
                    </tr>
                    <tr>
                      <td>TOTAL</td>
                      <td>$ 75.000.000</td>
                    </tr>
                  </tbody>
                </table>
                <h3>¿QUIÉN PUEDE PRESENTAR PROPUESTAS?</h3>
                <p>Cualquier persona mayor de 16 años que viva o trabaje en cualquiera de los 9 barrios de Vicente López. También pueden presentar propuestas las instituciones de bien público registradas en el Partido que tengan toda su documentación en regla.</p>
                <h3>¿CÓMO SE PRESENTAN LAS PROPUESTAS?</h3>
                <p>En una serie de reuniones programadas que ocurren entre marzo y mayo de cada año (Foros Vecinales Barriales), los vecinos y los representantes de las entidades se encuentran con funcionarios municipales para presentarles propuestas para cada barrio. Para que sean tomadas en cuenta para el análisis, todas las propuestas deben cargarse en la plataforma web del Presupuesto Participativo de Vicente López: <a href='https://forosvecinales.vicentelopez.gov.ar'> https://forosvecinales.vicentelopez.gov.ar</a></p> 
                <h3>¿CUÁNTAS PROPUESTAS PUEDE PRESENTAR UNA ENTIDAD?</h3>
                <p>Las entidades que desarrollen sus actividades en más de un barrio del Partido, podrán presentar hasta un máximo de 2 propuestas (en diferentes barrios).</p>
                <h3>¿POR QUÉ PUEDEN PARTICIPAR CON PROPUESTAS LAS ESCUELAS PÚBLICAS DE GESTIÓN PROVINCIAL EN EL PRESUPUESTO PARTICIPATIVO DE VICENTE LÓPEZ?</h3>
                <p>Si bien las escuelas públicas de gestión provincial que funcionan en Vicente López dependen presupuestariamente de la Provincia de Buenos Aires, desde el año 2014 y dado el estado de las mismas, el Departamento Ejecutivo Municipal habilitó la posibilidad de que dichas escuelas participen en el Presupuesto Participativo. Para ello, se estableció un monto límite por barrio y se plantearon 2 requisitos para acceder a este presupuesto:</p>
                <p>1) que la escuela presente la propuesta (a través de su equipo directivo y/o de su asociación cooperadora)</p>
                <p>y 2) que los vecinos del barrio la elijan con su voto. Para 2019, el límite por barrio se estableció en $3 millones, con un tope de $2 millones por escuela.</p>
                <h3>¿CÓMO SE DECIDE QUÉ PROPUESTAS VAN A VOTACIÓN?</h3>
                <p>Para que una propuesta pueda participar en la votación, la Subsecretaría realiza el análisis legal, técnico y presupuestario en consulta con las distintas áreas de la Municipalidad. Puede ocurrir que una propuesta:</p>
                <p>a) se refiera a un tema que no dependa del nivel de gobierno municipal,</p>
                <p>b) que haya dificultades técnicas para llevarla a cabo,</p>
                <p>c) que el costo estimado de la misma supere el presupuesto participativo del barrio,</p>
                <p>d) que requiera gastos en recursos humanos que incrementarían el presupuesto de un área de gobierno.</p>
                <p> Para que la propuesta sea factible y pueda ir a votación, no se pueden dar ninguna de las situaciones anteriores.</p>
                <h3>¿QUIÉNES PUEDEN VOTAR?</h3>
                <p>Cualquier persona mayor de 16 años que viva o trabaje en el Partido de Vicente López puede votar los proyectos. Para ello, tiene que acreditar domicilio particular o laboral en alguno de los 9 barrios del Partido.</p>
                <p>También pueden votar los integrantes de una comunidad educativa o de una institución de Vicente López aunque no tengan domicilio laboral o particular en el barrio en la que está ubicada la entidad.</p>
                <h3>¿EL VOTO ES SECRETO?</h3>
                <p>No, el voto en el Presupuesto Participativo es nominal. Como no existe un empadronamiento previo para votar, necesitamos poder verificar 1) que no haya duplicaciones de DNI, 2) que el domicilio que acredita la persona es del barrio.</p>
                <h3>¿BAJO QUÉ CONDICIONES PUEDEN VOTAR LOS INTEGRANTES DE LAS COMUNIDADES EDUCATIVAS?</h3>
                <p>Se entiende por comunidad educativa a los alumnos que concurren a una determinada escuela y a sus familias. En Vicente López hay muchas escuelas y no siempre sus alumnos viven en el mismo barrio donde está ubicada la misma. Es por eso que, en el caso de que no vivan en el barrio, igual les damos la posibilidad de poder votar el proyecto de su escuela a:</p>
                <ul className='faqs-list'>
                  <li> Los alumnos mayores de 16 años.</li>
                  <li> Un mayor de 16 años por cada alumno menor de 16 años (puede ser madre, madre, tío, abuela, etc).</li>
                </ul>
                <p>Estas personas solo podrán hacerlo por el proyecto de la escuela y deberán estar registradas en un padrón especial que debe confeccionar la escuela.</p> 
                <h3>¿BAJO QUÉ CONDICIONES PUEDEN VOTAR LOS INTEGRANTES DE UNA ENTIDAD INTERMEDIA?</h3>

                <p>En muchos casos, las entidades intermedias están integradas por personas que viven en diferentes barrios.  Es por eso que, aunque no vivan en el barrio, igual les damos la posibilidad de poder apoyar con su voto el proyecto de la entidad donde participan a:</p>
                <ul className='faqs-list'>
                <li>	Sus directivos</li>
                <li>Sus socios</li>
                <li>	Los inscriptos en talleres brindados por la misma</li>
                </ul>
                <p>En estos casos, sólo podrán votar por el proyecto de la entidad y deberán estar registrados en un padrón especial que debe confeccionar la entidad.</p>

                <h3>¿CUÁNDO DEBEN PRESENTAR LAS ESCUELAS Y ENTIDADES INTERMEDIAS LOS PADRONES ESPECIALES A LA SUBSECRETARÍA?</h3>

                <p>Los padrones deberán enviarse en formato digital a la Subsecretaría ANTES DEL 22 DE SEPTIEMBRE DE 2018, SIN EXCEPCIÓN a <a href='mailto:participacion.ciudadana@vicentelopez.gov.ar'>participacion.ciudadana@vicentelopez.gov.ar</a>. Si la escuela o entidad no presenta el padrón especial a tiempo, todos los votos que reciba de personas que estén vinculadas con la institución y no vivan o trabajen en el barrio serán NULOS.</p>
                <p>Estos padrones deberán confeccionarse según un modelo de planilla de cálculo (Excel) proporcionada por la Subsecretaría. </p>

                <h3>¿CUÁNDO Y DÓNDE SE VOTA?</h3>
                <p>La votación estará abierta desde el lunes 24 de septiembre hasta el domingo 7 de octubre de 2018. Habrá urnas habilitadas para votar en los 9 barrios de Vicente López: Munro, Florida Oeste, Carapachay, La Lucila, Olivos, Villa Martelli, Florida Este, Vicente López y Villa Adelina. Consultá todos los <Link to='/s/herramientas'>puntos de votación</Link> disponibles en https://forosvecinales.vicentelopez.gov.ar a partir del 14 de septiembre.</p>

                <h3>¿CÓMO SE VOTA?</h3>
                <p>Es muy fácil, te acercás a un punto de votación con tu DNI, completás tus datos en <Link to='/s/documentos?archivo=boleta&anio=2018&barrio=vicente-lopez'>la boleta del barrio correspondiente</Link>, marcás los 3 proyectos que considerás prioritarios para tu barrio y listo. Para que tu voto sea válido, no podés votar más de 3 proyectos y tenés que consignar tuDNI y tu domicilio. Si falta alguno de esos datos, tu voto se anula.</p>

                <h3>¿CON QUÉ BOLETAS PUEDO VOTAR?</h3>
                <p>Las boletas habilitadas para votar son:</p>
                <ul className='faqs-list'>
                  <li>Las que se entregan en los puntos de votación</li>
                  <li><Link to='/s/documentos?archivo=boleta&anio=2018&barrio=vicente-lopez'>Las que se pueden descargar e imprimir desde la plataforma web</Link></li>
                  <li>Fotocopias de cualquiera de las dos anteriores (simple faz o doble faz)</li>
                </ul>
                <h3>¿CÓMO EVITO QUE MI VOTO SEA NULO?</h3>
                <p>Para que tu voto NO SEA NULO, tené en cuenta lo siguiente:</p>
                <ul className='faqs-list'>
                  <li>Es obligatorio que escribas tu DNI y tu domicilio (laboral o particular)</li>
                  <li>Tu domicilio (laboral o particular) debe estar ubicado en el barrio al que corresponde la boleta.</li>
                  <li>No podés marcar más de 3 proyectos en la boleta.</li>
                  <li>Si sos parte de la comunidad educativa de una escuela que tiene proyecto y no vivís ni trabajás en el barrio de la escuela, tenés que pedir que te inscriban en el padrón especial de la misma antes del 21 de septiembre de 2018 y sólo podés votar por el proyecto de la escuela.</li>
                  <li>Si sos parte de una entidad intermedia que tiene proyecto y no vivís ni trabajás en el barrio de la entidad, tenés que pedir que te inscriban en el padrón especial de la misma antes del 21 de septiembre de 2018 y sólo podés votar por el proyecto de la entidad.</li>
                </ul>
                <h3>¿CUÁNDO SE REALIZA EL ESCRUTINIO DE LOS VOTOS?</h3>
                <p>El escrutinio de la votación 2018 se realizará los días 9, 10 y 11 de octubre a partir de las 9 hs en el Círculo de la Fuerza Aérea ubicado en Av. del Libertador 661, Vicente López. 
                Cada uno de esos días se contarán los votos de 3 barrios, a saber:</p>
                <ul className='faqs-list'>
                  <li>MARTES 9 OCTUBRE: Villa Adelina - Olivos - La Lucila </li>
                  <li>MIÉRCOLES 10 OCTUBRE: Carapachay - Vicente López - Munro</li>
                  <li>JUEVES 11 DE OCTUBRE: Villa Martelli - Florida Este - Florida Oeste</li>
                </ul>
               
                <h3>¿SE PUEDE PRESENCIAR EL ESCRUTINIO?</h3>

                <p>Por supuesto. El escrutinio es público y abierto a todos los vecinos de Vicente López. Si te interesa presenciarlo, mandanos un mail con tu nombre y apellido y DNI a <a href='mailto:participacion.ciudadana@vicentelopez.gov.ar'>participacion.ciudadana@vicentelopez.gov.ar</a> para agilizar el ingreso a las instalaciones.</p>

                <h3>¿CÓMO SE DEFINEN LOS PROYECTOS GANADORES?</h3>
                <p>Los proyectos ganadores de cada barrio, surgen de tu voto y el de tus vecinos. Los proyectos más votados, que no superen el monto asignado a cada barrio, serán realizados durante el año siguiente a la votación. Puede ocurrir que por orden de prioridad de votos, un proyecto supere por presupuesto el monto total establecido para el barrio; en ese caso, se pasará al proyecto que siga en cantidad de votos hasta agotar el monto asignado al barrio. Ver un ejemplo en <a href='https://forosvecinales.vicentelopez.gov.ar/s/reglamento'> https://forosvecinales.vicentelopez.gov.ar/s/reglamento</a></p>

                <h3>¿QUÉ HAGO SI TENGO UNA PREGUNTA QUE NO SE HA RESPONDIDO AQUÍ?</h3>
                <p>Te sugerimos que leas el REGLAMENTO completo publicado en nuestra plataforma web: <a href='https://forosvecinales.vicentelopez.gov.ar/s/reglamento'> https://forosvecinales.vicentelopez.gov.ar/s/reglamento</a></p>

                <p>Si aun así te quedan dudas, llamanos al 4851-2000 interno 203 o envianos un mail a <a href='mailto:participacion.ciudadana@vicentelopez.gov.ar'>participacion.ciudadana@vicentelopez.gov.ar</a> y te responderemos a la brevedad.</p>
                <h3 className='underline'>Ejemplos de situaciones especiales durante la votación</h3>
                <h3>¿PUEDO VOTAR CON MÁS DE UNA BOLETA?</h3>
                <p>Solo podés votar con más de una boleta si vivís en uno de los 9 barrios y trabajás en otro de los 9 barrios. Si vivís y trabajás en el mismo barrio, podés llenar una sola boleta de ese barrio. No está permitido votar más de una vez en un mismo barrio. Si alguien lo hiciera, se anulan todos los votos que haya realizado esa persona en ese barrio.</p>

                <h3>¿CÓMO VOTO SI VIVO Y TRABAJO EN EL MISMO BARRIO?</h3>
                <p>Podés votar con una sola boleta hasta 3 proyectos con un solo domicilio (o el particular o el laboral)</p>

                <h3>SI SOY UN DOCENTE QUE TRABAJA EN 5 ESCUELAS DE 3 BARRIOS DIFERENTES Y TODAS TIENEN PROYECTO, CUÁNTOS PROYECTOS  PUEDO VOTAR?</h3>
                <p>Podés votar los proyectos de todas las escuelas en las que trabajás, siempre que utilices UNA sola boleta por barrio. Recordá que cuando trabajás en un barrio, podés votar hasta 3 proyectos de ese barrio. No votes con 2 boletas del mismo barrio en forma separada porque se anularán ambas. </p>

                <h3>SI VIVO EN UN BARRIO Y EL DOMICILIO QUE FIGURA EN MI DNI ES DE OTRO BARRIO O DE OTRO PARTIDO ¿PUEDO VOTAR?</h3>
                <p>Podés  votar, pero deberás acreditar el nuevo domicilio presentando un servicio a tu nombre en el puesto de votación.</p>

                <h3>¿CUÁNTOS PROYECTOS PUEDO ELEGIR?</h3>
                <p>Podés elegir hasta 3 proyectos, tildándolos en la boleta de votación del barrio correspondiente. Si elegís más de 3 proyectos, el voto es nulo.</p>

                <h3>SI TENGO 3 HIJOS MENORES DE 16 AÑOS QUE CONCURREN A LA MISMA ESCUELA Y NO VIVIMOS NI TRABAJAMOS EN EL BARRIO DE LA ESCUELA ¿CÓMO VOTO?</h3>
                <p>En ese caso, como no vivís ni trabajás en el barrio, tenés que solicitarle a la persona encargada de confeccionar el padrón de la escuela a la que concurren tus hijos que incluya a un adulto de tu familia por cada hijo menor de 16 años. Pueden ser madre, padre, abuela, tío, hermano mayor de 16 años, etc.</p>

                
{/*

                <h3>¿CÓMO SE ELABORAN LOS PROYECTOS?</h3>
                <p>En una serie de reuniones programadas (Foros Vecinales), los vecinos y los representantes de las entidades se encuentran con funcionarios municipales para presentarles propuestas para cada barrio. También podés presentar tu propuesta en esta plataforma <Link href='/formulario-propuesta'>aquí</Link>. Este año 2018, tenés tiempo hasta el 31 de mayo inclusive.</p>
                <h3>¿CÓMO SE DECIDE QUÉ PROYECTOS VAN A VOTACIÓN?</h3>
                <p>Para que una propuesta pueda convertirse en un proyecto votable, luego del trabajo conjunto con funcionarios, se pasa a una etapa de verificación legal, técnica y presupuestaria. En esta instancia se termina de definir la factibilidad del proyecto y los costos estimados del mismo.</p>
                <h3>¿QUIÉN PUEDE VOTAR LOS PROYECTOS?</h3>
                <p>Cualquier mayor de 16 años que viva o trabaje en Vicente López puede votar los proyectos. Para ello, tenés que acreditar domicilio particular o laboral en alguno de los 9 barrios del Partido.<br />
                En el caso de los proyectos de escuelas públicas de gestión provincial o municipal, también pueden votar los alumnos mayores de 16 años y hasta un mayor de 16 años por cada alumno menor de 16 años inscriptos en la escuela respectiva, aunque no tengan domicilio en el barrio o en el partido de Vicente López. Estas personas solo podrán elegir el proyecto de la escuela y deberán estar registradas en un padrón especial que debe confeccionar la escuela y enviar a <a href='mailto:participacion.ciudadana@vicentelopez.gov.ar'>participacion.ciudadana@vicentelopez.gov.ar</a> antes de que comience la votación.<br />
                En el caso de proyectos presentados por entidades intermedias, sus directivos, asociados e inscriptos en talleres brindados por las mismas que no tengan domicilio en el barrio donde esté ubicada la entidad o en el partido de Vicente López también podrán votar pero solo podrán elegir el proyecto de la entidad y deberán estar registrados en un padrón especial que debe confeccionar la entidad y enviar a <a href='mailto:participacion.ciudadana@vicentelopez.gov.ar'>participacion.ciudadana@vicentelopez.gov.ar</a> antes de que comience la votación.</p>
                <h3>¿CÓMO ACREDITO DOMICILIO?</h3>
                <p>Tu domicilio particular se acredita presentando tu DNI en el puesto de votación. Si figura otro domicilio, podés acercar la factura de algún servicio que acredite tu domicilio real.<br />
                Para acreditar tu domicilio laboral, tenés que presentar tu recibo de sueldo donde conste en el domicilio laboral en el barrio donde querés votar.</p>
                <h3>¿PUEDO VOTAR MÁS DE UNA VEZ?</h3>
                <p>Solo podés votar más de una vez si vivís en uno de los 9 barrios y trabajás en otro de los 9 barrios. Si vivís y trabajás en el mismo barrio, sólo podés votar una vez.<br />
                No está permitido votar más de una vez en un mismo barrio. Si alguien lo hiciera, se anulan todos los votos que haya realizado esa persona en el mismo barrio.</p>
                <h3>¿POR QUÉ PUEDEN PARTICIPAR CON PROPUESTAS LAS ESCUELAS PÚBLICAS DE GESTIÓN PROVINCIAL EN EL PRESUPUESTO PARTICIPATIVO?</h3>
                <p>Si bien las escuelas públicas de gestión provincial que funcionan en Vicente López dependen presupuestariamente de la Provincia de Buenos Aires, desde el año 2014 y dado el estado de las mismas, el Departamento Ejecutivo Municipal permite que dichas escuelas presenten propuestas al Presupuesto Participativo. Para ello, se estableció un monto límite por barrio y se plantearon 2 requisitos para acceder a este presupuesto: 1) que la escuela presente la propuesta y 2) que los vecinos del barrio la elijan con su voto. Para 2019, el límite por barrio se estableció en $3 millones, con un tope de $2 millones por escuela.</p>
                <h3>¿CUÁNDO Y DÓNDE VOTO?</h3>
                <p>La votación estará abierta desde el lunes 24 de septiembre hasta el domingo 7 de octubre de 2018. Encontrarás urnas habilitadas para votar en los 9 barrios de Vicente López: Munro, Florida Oeste, Carapachay, La Lucila, Olivos, Villa Martelli, Florida Este, Vicente López y Villa Adelina.</p>
                <h3>¿CÓMO VOTO?</h3>
                <p>Es muy fácil, te acercás a los puntos de votación, completás tus datos en la boleta del barrio correspondiente, marcás los 3 proyectos que considerás prioritarios para tu barrio y listo. </p>
                <h3>¿CUÁNTOS PROYECTOS PUEDO ELEGIR?</h3>
                <p>Podés elegir hasta 3 proyectos, tildándolos en la boleta de votación del barrio correspondiente. Si elegís más de 3 proyectos, el voto es nulo.</p>
                <h3>¿EL VOTO ES SECRETO?</h3>
                <p>No, el voto en el Presupuesto Participativo es nominal. Como no existe un empadronamiento previo para votar, en el momento del escrutinio necesitamos poder verificar 1) que no haya duplicaciones de DNI, 2) que el domicilio que acredita la persona es del barrio, para que el voto sea válido.</p>
                <h3>¿CUÁNDO SE REALIZA EL ESCRUTINIO DE LOS VOTOS?</h3>
                <p>El escrutinio de la votación 2018 se realizará los días 8, 9 y 10 de octubre a partir de las 10 hs en lugar a designar por la Subsecretaría de Participación Ciudadana. Cada uno de esos días, se escrutarán los votos de 3 barrios. Esta información se dará 15 días antes del comienzo de la votación.</p>
                <h3>¿SE PUEDE PRESENCIAR EL ESCRUTINIO?</h3>
                <p>Por supuesto. El escrutinio es público y abierto a todos los vecinos de Vicente López. Si te interesa presenciar el escrutinio de un barrio en particular, mandanos un mail a <a href='mailto:participacion.ciudadana@vicentelopez.gov.ar'>participacion.ciudadana@vicentelopez.gov.ar</a> y te avisamos qué día y en qué horario se escrutarán las urnas ubicadas en los puntos de votación de ese barrio.</p>
                <h3>¿CÓMO SE DEFINEN LOS PROYECTOS GANADORES?</h3>
                <p>Los proyectos ganadores de cada barrio, surgen de tu voto y el de tus vecinos. Los proyectos más votados, que no superen el monto asignado a cada barrio, serán realizados durante el año siguiente a la votación. Puede ocurrir que por orden de prioridad de votos, un proyecto supere por presupuesto el monto total establecido para el barrio; en ese caso, se pasará al proyecto que siga en cantidad de votos hasta agotar el monto asignado al barrio.</p>
                <h3>¿QUÉ HAGO SI TENGO UNA PREGUNTA QUE NO SE HA RESPONDIDO AQUÍ?</h3>
                <p>Te sugerimos que leas el <Link to='/s/reglamento'>reglamento</Link>. Si aún así te quedan dudas, llamanos al 4851-2000 interno 203 o envianos un mail a <a href='mailto:participacion.ciudadana@vicentelopez.gov.ar'>participacion.ciudadana@vicentelopez.gov.ar</a> y te responderemos a la brevedad.</p>
*/}
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
