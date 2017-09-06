import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
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
        <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Reglamento Electoral</h1>
            </div>
          </div>
        </section>
          <Anchor id='container'>
            <div className='ext-reglamento'>  
              <p><span className="articulo">Art. 1° ELECCIÓN PROYECTOS 2018 PRESUPUESTO PARTICIPATIVO.</span> El presente Reglamento regula el proceso de elección de los proyectos del Presupuesto Participativo propuestos en los Foros Vecinales Barriales 2017 para ser ejecutados en el año 2018 en el Partido de Vicente López.</p>
              <p><span className="articulo">Art. 2° FECHA Y LUGAR.</span> La Votación de Proyectos 2018 se realizará durante 14 días consecutivos desde el lunes 18 DE SEPTIEMBRE hasta el domingo 1° de OCTUBRE de 2017 en los lugares y horarios que serán publicados en el sitio WWW.FOROSVECINALES.ORG. Por razones de fuerza mayor, la Subsecretaría de Participación Ciudadana podrá extender el período de votación y deberá comunicarlo a través del sitio de internet antes mencionado.</p>
              <p><span className="articulo">Art. 3° QUIÉNES PUEDEN VOTAR.</span> Podrán emitir su voto: a) los mayores de 16 años con domicilio en cualquiera de los 9 barrios en que se divide el Partido de Vicente López (Villa Martelli, Florida Oeste, Munro, Carapachay, Villa Adelina, Florida Este, Vicente López, Olivos y La Lucila), b) aquéllos que trabajen en alguno de los mencionados barrios, c) Alumnos mayores de 16 años y los padres o encargados de alumnos menores de 16 años (uno por alumno) de los Establecimientos Educativos Públicos tanto Provinciales como Municipales del Partido, aunque no tengan domicilio en el barrio en que se encuentra ubicada la escuela ni en el Partido de Vicente López, siempre que el Establecimiento Educativo haya presentado propuesta y el sufragante se encuentre inscripto en el padrón especial al que se refiere el art. 11 del presente reglamento, d) las personas vinculadas a las entidades intermedias que hayan presentado propuestas, entendiendo por tal a: directivos, asociados, inscriptos en actividades y talleres brindados por la entidad, aunque no tengan domicilio en el barrio en que se encuentra ubicada la entidad ni en el Partido de Vicente López y siempre que los sufragantes se encuentren inscriptos en el padrón especial al que se refiere el art. 12 del presente reglamento.</p>
              <p><span className="articulo">Art. 4° SE PUEDE VOTAR EN MÁS DE UN BARRIO.</span> Un vecino podrá votar una vez en el barrio donde tiene domicilio personal o podrá votar hasta 4 veces en barrios distintos si resulta, por ejemplo, que es vecino de un barrio, comerciante en otro, profesional en un tercero y empresario en un cuarto. En todos los casos, será necesario acreditar domicilio como se indica en el art. 5°.</p>
              <p><span className="articulo">Art. 5° ACREDITACIÓN DE DOMICILIO.</span>. Para emitir el voto, las personas deberán acercarse a los centros de votación y presentar su DNI/LE/LC. En el caso de votar en carácter de comerciantes, empresarios o profesionales, deberán presentar una factura de servicio de su actividad comercial, empresarial o profesional establecida en el municipio o cualquier otro documento o constancia que acredite su actividad en alguno de los 9 barrios del Partido de Vicente López. En caso de tener actividad laboral en relación de dependencia en alguno de los barrios deberá presentar un recibo de sueldo donde conste el domicilio de la empresa para la que trabaja y podrá votar en el barrio donde la misma tenga su sede.</p>
              <p><span className="articulo">Art. 6° VOTO NOMINAL:</span> El voto será nominal y en carácter de declaración jurada. Cada elector deberá consignar en el formulario que contiene la boleta los siguientes datos: apellido y nombre, domicilio personal o laboral -según corresponda-, tipo y N° de documento, correo electrónico y firma.</p>
              <p><span className="articulo">Art. 7° BOLETAS.</span> Cada uno de los 9 barrios del municipio tendrá una boleta única en la que figuran todos los proyectos factibles en condiciones de ser elegidos por los vecinos. Los vecinos pueden utilizar las boletas disponibles en los lugares de votación o pueden optar por imprimir las publicadas en el sitio web WWW.FOROSVECINALES.ORG en la sección ¿Qué votar?</p>
              <p><span className="articulo">Art. 8° VOTOS POR ELECTOR. </span> Los vecinos podrán votar hasta 3 (tres) proyectos tildando el casillero de aquellos que son de su preferencia. El voto de cada proyecto tendrá el mismo valor. En el caso de los votantes señalados en el art. 3 inc. c) y d) sólo podrán votar por el proyecto de la Escuela o Entidad a la que pertenecen y, para que el voto sea válido, deberán figurar en el padrón correspondiente.</p>
              <p><span className="articulo">Art. 9° VOTOS EN BLANCO.</span> Las boletas sin ningún proyecto marcado serán contabilizadas como votos en blanco, como así también los casilleros de un total de 3 (tres) que no contengan voto.</p>
              <p><span className="articulo">Art. 10° VOTOS NULOS. </span> Al momento del escrutinio, se considerarán nulos: a) todos los votos de una persona que hubiese votado utilizando más de 1 (una) boleta para un mismo barrio; b) todos los votos de una persona que hubiese votado por más de 3 (tres) proyectos en la misma boleta; c) todos los votos de una persona que no sea vecina del barrio y que no haya sido incluida en ningún padrón especial de escuela o entidad, de acuerdo a lo establecido en los artículos 11 y 12; d) todos los votos de una persona inscripta en el padrón especial de una escuela o entidad mencionado en los art. 11 y 12 que hubiese votado por otro proyecto que no sea el de la Escuela o Entidad con la que está vinculado.</p>
              <p><span className="articulo">Art. 11° PROYECTOS DE ENTIDADES EDUCATIVAS PÚBLICAS PROVINCIALES Y MUNICIPALES - PADRÓN ESPECIAL.</span>  En el caso de los proyectos de las escuelas públicas provinciales y municipales, las autoridades de las mismas deberán elaborar un padrón que incluya a los alumnos mayores de 16 años cumplidos al 1° de octubre de 2017 y a los padres o encargados de los alumnos menores de 16 años (un adulto por alumno) que no se domicilien en el barrio en el que se encuentra la escuela. El listado deberá contener por orden alfabético: 1) Apellido y Nombre, 2) N° de Documento, 3) correo electrónico, 4) Apellido y Nombre del alumno con el que posee el vínculo, y deberá enviarse por correo electrónico a: <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> en formato de planilla de cálculo excel utilizando el archivo modelo que se les indicará oportunamente. Los votos de las personas que no sean vecinas del barrio y que no hayan sido incluidas en este padrón especial serán considerados nulos.</p>
              <p><span className="articulo">Art. 12° PROYECTOS DE ENTIDADES INTERMEDIAS - PADRÓN ESPECIAL.</span> En el caso de los proyectos de entidades intermedias, las autoridades de las mismas podrán elaborar un padrón especial que incluya a directivos, asociados, inscriptos en actividades y talleres brindados por la entidad. En todos los casos mencionados, sólo deberán incluirse aquellas personas que no tengan domicilio particular o laboral en el barrio o en el Partido de Vicente López. El listado deberá contener por orden alfabético: 1) Apellido y Nombre, 2) N° de Documento, 3) correo electrónico, 4) tipo de participación (directivo, socio, alumno) y deberá enviarse por correo electrónico a: <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> en formato de planilla de cálculo excel utilizando el archivo modelo que se les indicará oportunamente. Los votos de las personas que no sean vecinas del barrio y que no hayan sido incluidas en este padrón especial serán considerados nulos.</p>
              <p><span className="articulo">Art. 13° EJECUCIÓN DE PROYECTOS - PRESUPUESTO.</span> Cada proyecto sujeto a votación tiene un enunciado o título y un presupuesto asignado (que es un monto estimado de acuerdo al proyecto en cuestión). Los proyectos que resulten electos se ejecutan aplicando fondos hasta el monto del presupuesto que tienen asignado, siendo el enunciado o título del proyecto una referencia general del mismo. En el caso de instituciones educativas y/o entidades intermedias (sociedades de fomento, clubes, asociaciones civiles, etc.) las autoridades de las mismas determinarán por escrito el orden de prioridades de los componentes o partes de su proyecto al efecto de la aplicación del monto asignado al proyecto en cuestión.</p>
              <p><span className="articulo">Art. 14° AUTORIDADES DE MESA - FISCALES.</span> Las autoridades de los puntos de votación serán designadas por la Subsecretaría de Participación Ciudadana. Podrán participar, como auxiliares de autoridades de mesa y como fiscales veedores del proceso electoral, vecinos y miembros de entidades de cada uno de los nueve barrios.</p>
              <p><span className="articulo">Art. 15° ESCRUTINIO.</span> El escrutinio de los votos de los 9 barrios se realizará los días 2, 3 y 4 de octubre de 2017 a partir de las 10 hs en lugar a designar por la Subsecretaría de Participación Ciudadana. Podrán ser veedores del proceso de escrutinio vecinos y representantes de entidades intermedias y de escuelas, para lo cual deberán informarlo al 4851-2000 int. 203 o por correo electrónico a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> hasta el miércoles 27 de septiembre de 2017. Por razones de fuerza mayor, la Subsecretaría podrá extender y/o modificar fecha y horario del escrutinio.</p>
              <p><span className="articulo">Art. 16° ORDEN DE LOS PROYECTOS VOTADOS.</span> Los proyectos barriales elegidos para ser ejecutados en 2018 serán aquellos que por cantidad de votos recibidos cubran el total del presupuesto participativo destinado a cada uno de los barrios, según el detalle expresado en el Anexo 1. Puede ocurrir que por orden de prioridad de votos, un proyecto supere por presupuesto el monto total establecido para el barrio. En ese caso, se pasará al proyecto que le siga en cantidad de votos, hasta cubrir el total del monto asignado a cada barrio.</p>
              <p><span className="articulo">Art. 17° PROYECTOS DE ESTABLECIMIENTOS EDUCATIVOS PÚBLICOS PROVINCIALES - CARACTERÍSTICAS DEL SUBLÍMITE BARRIAL: </span> En 2017, se incluye en el presupuesto participativo para 2018, una suma de hasta $ 3.000.000 (pesos tres millones) por barrio y de hasta $2.000.000 (pesos dos millones) por escuela, para ser destinada a mejoras edilicias o de equipamiento en establecimientos educativos públicos dependientes de la Provincia de Buenos Aires. Para ser realizados, estos proyectos tendrán que ganar esa prioridad por el voto en idéntica situación que cualquier otro proyecto vecinal incluido en la boleta del barrio correspondiente.</p>
              <p><span></span></p>
              <div className="ejemplo">
                <h4>Ejemplo</h4>
                <p><span></span></p>
                <p>Supongamos, como de hecho existe en más de un barrio, que hay más de 1 proyecto para escuelas provinciales:</p>
                <ul>
                  <li>Proyecto A para Escuela Pública Provincial 1 por $ 1.500.000</li>
                  <li>Proyecto B para Escuela Pública Provincial 2 por $ 2.000.000</li>
                  <li>Proyecto C para Escuela Pública Provincial 3 por $ 850.000</li>
                </ul>
                <p>Y que el Presupuesto para el Barrio que actúa como límite total es de $ 8.500.000 en general para todos los proyectos y con el sublímite de $ 3.000.000 para la totalidad de los proyectos destinados a escuelas provinciales y el tope de $2.000.000 por escuela.</p>
                <p><span></span></p>
                <p>Y que el resultado de la votación final de los vecinos sea la siguiente de mayor a menor cantidad de votos sea:</p>
                <ol>
                  <li>690 votos: Proyecto C para Escuela Provincial 3 por $ 850.000 <span className="underline">(ENTRA EN EL SUBLÍMITE ESCUELAS PROVINCIALES, SE HACE)</span></li>
                  <li>630 votos: Proyecto A para Escuela Provincial 1 $ 1.500.000 <span className="underline">(ENTRA EN EL SUBLÍMITE ESCUELAS PROVINCIALES, SE HACE)</span></li>
                  <li>480 votos: Proyecto B para Escuela Provincial 2 $ 2.000.000 <span className="underline">(EXCEDE EL SUBLÍMITE ESCUELAS PROVINCIALES, NO SE HACE)</span></li>
                  <li>350 votos: Mejoras y equipamiento para el Jardín Maternal Municipal N° X $1.250.000</li>
                  <li>330 votos: Instalación de un ascensor para la Sociedad de Fomento XX $2.500.000</li>
                  <li>325 votos: Iluminación de la cancha de fútbol de la Sociedad de Fomento ZZ $900.000</li>
                  <li>315 votos: Pintura interior para la Fundación XX $650.000</li>
                  <li>310 votos: Cámaras de vigilancia urbana $ 700.000</li>
                  <li>280 votos: Equipamiento para Centro de Capacitación Municipal $ 250.000 <span className="underline">(EXCEDE LÍMITE DEL BARRIO, NO SE HACE)</span></li>
                  <li>270 votos: Reducidores de velocidad en varios puntos $ 100.000</li>
                  <li>255 votos: Mejoras en iluminación $ 280.000 <span className="underline">(EXCEDE LÍMITE DEL BARRIO, NO SE HACE)</span></li>
                </ol>
                <p><span></span></p>
                <p><span className="underline">Hasta acá los proyectos agotan el límite barrial de $ 8.500.000</span></p>
              </div>
              <p><span></span></p>
              <p><span className="articulo">Art. 18° PROYECTOS EXCLUYENTES:</span> En los casos de los barrios que en sus boletas presenten 2 (dos) opciones para instalar cámaras de vigilancia urbana, se realizará sólo uno de los proyectos: el que obtenga mayor cantidad de votos.</p>
              <p><span className="articulo">Art. 19° PROYECTOS NO ELEGIDOS:</span> Los proyectos que no resulten elegidos podrán volver a ponerse en consideración al año siguiente y deberán volver a pasar por el proceso de análisis de factibilidad y por la votación.</p>
              <p><span className="articulo">Art. 20° La Subsecretaría de Participación Ciudadana es autoridad para la interpretación del presente reglamento.</span></p>
              <h4 className="underline">Anexo 1 - Partidas presupuestarias propuestas para 2018 por barrio</h4>
              <p><span></span></p>
              <table className="tabla-presupuestos">
                <tbody>
                  <tr>
                    <td>
                      CARAPACHAY
                    </td>
                    <td>
                      $ 6.000.000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      FLORIDA ESTE
                    </td>
                    <td>
                      $ 8.500.000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      FLORIDA OESTE
                    </td>
                    <td>
                      $ 7.166.666
                    </td>
                  </tr>
                  <tr>
                    <td>
                      LA LUCILA
                    </td>
                    <td>
                      $ 6.000.000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      MUNRO
                    </td>
                    <td>
                      $ 8.500.000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      OLIVOS
                    </td>
                    <td>
                      $ 8.500.000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      VICENTE LÓPEZ
                    </td>
                    <td>
                      $ 7.166.666
                    </td>
                  </tr>
                  <tr>
                    <td>
                      VILLA ADELINA
                    </td>
                    <td>
                      $ 6.000.000
                    </td>
                  </tr>
                  <tr>
                    <td>
                      VILLA MARTELLI
                    </td>
                    <td>
                      $ 7.166.666
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Total
                    </td>
                    <td>
                      <strong>$65.000.000</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </Anchor>
          <Jump goTop={this.goTop} />
          <Footer />
        </div>
    )
  }
}
