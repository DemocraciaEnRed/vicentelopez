import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
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
          <div className='contenedor largo'>
            <div className='fondo-titulo'>
              <h1>Reglamento Electoral</h1>
            </div>
          </div>
        </section>
          <Anchor id='container'>
            <div className='ext-reglamento'>  
              <p><span>Reglamento para la Elecci&oacute;n de Proyectos a ser ejecutados en el 2019</span></p>
              <p><span>Art. 1&ordm; ALCANCE: </span><span>El presente reglamento regula el proceso de elecci&oacute;n de los Proyectos del Presupuesto Participativo del Municipio de Vicente L&oacute;pez, propuestos en el per&iacute;odo establecido para la presentaci&oacute;n de los mismos durante el 2018 y para ser ejecutados en el 2019.</span></p>
              <p><span>Art. 2&ordm; FECHA Y LUGAR DE LA VOTACI&Oacute;N: </span><span>La votaci&oacute;n de proyectos para ejecutar en el 2019 se realizara durante 14 (catorce) d&iacute;as consecutivos a partir del </span><span>lunes 24 de septiembre y hasta el domingo 7 de octubre de 2018</span><span>; en los lugares y horarios que ser&aacute;n publicados en el sitio </span><span><a href="https://www.google.com/url?q=https://forosvecinales.vicentelopez.gov.ar&amp;sa=D&amp;ust=1521676895493000&amp;usg=AFQjCNHEsKIr9g84ek_PQZO7f-TAwsGI7A">https://forosvecinales.vicentelopez.gov.ar</a></span><span>. Por razones de fuerza mayor la Subsecretar&iacute;a de Participaci&oacute;n Ciudadana, en adelante &ldquo;la Subsecretar&iacute;a&rdquo;, &nbsp;podr&aacute; extender el periodo de votaci&oacute;n, en cuyo caso lo comunicar&aacute; en el sitio antes mencionado.</span></p>
              <p><span>Art. 3&ordm; QUI&Eacute;NES EST&Aacute;N HABILITADOS A VOTAR: </span></p>
              <ol start="1">
                  <li><span>Los mayores de 16 a&ntilde;os (cumplidos al 7 de octubre de 2018) con domicilio en cualquiera de los 9 barrios en que se divide el Partido de Vicente L&oacute;pez (Villa Martelli, Florida Oeste, Munro, Carapachay, Villa Adelina, Florida Este, La Lucila, Olivos y Vicente L&oacute;pez).</span></li>
                  <li><span>Aqu&eacute;llos que trabajen en alguno de los mencionados barrios.</span></li>
                  <li><span>Alumnos mayores de 16 a&ntilde;os (cumplidos al 7 de Octubre de 2018) y los padres o encargados de alumnos menores de 16 a&ntilde;os (uno por alumno) de los Establecimientos Educativos P&uacute;blicos tanto Provinciales como Municipales del Partido, aunque no tengan domicilio en el barrio en que se encuentra ubicada la escuela ni en el Partido de Vicente L&oacute;pez; siempre que el Establecimiento Educativo haya presentado propuesta y el votante se encuentre inscripto en el padr&oacute;n especial al que se refiere el art. 11 del presente reglamento.</span></li>
                  <li><span>Las personas vinculadas a las entidades que hayan presentado propuestas, entendiendo por tales a: directivos, asociados e inscriptos en actividades y talleres brindados por la entidad; aunque no tengan domicilio en el barrio en que se encuentra ubicada la entidad ni en el Partido de Vicente L&oacute;pez y siempre que los sufragantes se encuentren inscriptos en el padr&oacute;n especial al que refiere el art. 12 del presente reglamento.</span></li>
              </ol>
              <p><span>Art. 4&ordm; CU&Aacute;NTAS VECES SE PUEDE VOTAR: </span><span>Una persona puede votar solo una vez por barrio. Tambi&eacute;n puede votar en otro u otros barrios si resulta ser comerciante, &nbsp;profesional o trabajador. En todos los casos es necesario acreditar domicilio como se indica en el art. 5.</span></p>
              <p><span>Art 5&ordm; ACREDITACI&Oacute;N DE DOMICILIO: </span><span>Para emitir el voto las personas deben presentar su DNI/LC/LE y, en el caso de que no tenga actualizado el domicilio en el mismo, deber&aacute; presentar un servicio a su nombre donde figure el domicilio que se corresponda con el barrio donde quiere votar. En el caso de comerciante, profesional o trabajador deber&aacute; acreditar el domicilio con un servicio a su &nbsp;nombre o habilitaci&oacute;n municipal donde figure un domicilio que se corresponda con el barrio donde quiere votar. En caso de ser empleado en relaci&oacute;n de dependencia podr&aacute; acreditar domicilio con su recibo de sueldo siempre que en el mismo figure el domicilio de su actividad laboral y se corresponda con el barrio donde quiere votar.</span></p>
              <p><span>Art. 6&ordm; VOTO NOMINAL: </span><span>El voto ser&aacute; nominal y tendr&aacute; el car&aacute;cter de declaraci&oacute;n jurada. Cada elector deber&aacute; consignar en la boleta de votaci&oacute;n los siguientes datos: apellido y nombre, domicilio particular o laboral (seg&uacute;n corresponda), tipo y numero de documento de identidad, correo electr&oacute;nico (si tiene) y firma.</span></p>
              <p><span>Art. 7&ordm; BOLETAS:</span><span>&nbsp;Cada uno de los 9 barrios del municipio tendr&aacute; una boleta &uacute;nica en la que estar&aacute;n todos los proyectos del referido barrio en condiciones de ser elegidos por los vecinos. El elector podr&aacute; utilizar las boletas disponibles en los puntos de votaci&oacute;n o descargar e imprimir la boleta desde el sitio </span><span><a href="https://www.google.com/url?q=https://forosvecinales.vicentelopez.gov.ar&amp;sa=D&amp;ust=1521676895494000&amp;usg=AFQjCNHgtR341hKY9LcYkEYYNGgbM6vStA">https://forosvecinales.vicentelopez.gov.ar</a></span><span>&nbsp;</span></p>
              <p><span>Art. 8&ordm; VOTOS POR ELECTOR: </span><span>Los vecinos podr&aacute;n votar hasta 3 (tres) proyectos tildando el casillero de aquellos que son de su preferencia. El voto de cada proyecto tendr&aacute; el mismo valor. En el caso de los votantes se&ntilde;alados en el art. 3 inc. c y d, s&oacute;lo podr&aacute;n votar por el proyecto de la Escuela o Entidad a la que est&aacute;n relacionados y, para que el voto sea v&aacute;lido, deber&aacute;n figurar en el padr&oacute;n especial correspondiente.</span></p>
              <p><span>Art. 9&ordm; VOTOS EN BLANCO: </span><span>En caso de que en la boleta se tilde (elija) menos de 3 (tres) proyectos, la diferencia a ese n&uacute;mero se consideran votos en blanco. </span></p>
              <p><span></span></p>
              <p><span>Art. 10&ordm; VOTOS NULOS: </span><span>Al momento del escrutinio, se considerar&aacute;n nulos:</span></p>
              <ol start="1">
                  <li><span>todos los votos de una persona que hubiese votado utilizando m&aacute;s de una boleta para un mismo barrio</span></li>
                  <li><span>todos los votos de una persona que hubiese votado por m&aacute;s de tres proyectos en la misma boleta</span></li>
                  <li><span>todos los votos de una persona que no sea vecina del barrio y que no haya sido incluida en ning&uacute;n padr&oacute;n especial de escuela o entidad, de acuerdo a lo establecido en los art&iacute;culos 11 y 12</span></li>
                  <li><span>todos los votos de una persona inscripta en el padr&oacute;n especial de una escuela o entidad mencionado en los art. 11 y 12 que hubiese votado por otro proyecto que no sea el de la Escuela o Entidad con la que est&aacute; vinculado</span></li>
              </ol>
              <p><span>Art. 11&ordm; PROYECTOS DE ENTIDADES EDUCATIVAS P&Uacute;BLICAS PROVINCIALES Y MUNICIPALES &ndash; PADR&Oacute;N ESPECIAL:</span><span>&nbsp;En el caso de los proyectos de las escuelas p&uacute;blicas provinciales y municipales, las autoridades de las mismas deber&aacute;n elaborar un padr&oacute;n &nbsp;que incluya a los alumnos mayores de 16 a&ntilde;os (cumplidos al 7 de Octubre de 2018) y a los padres o encargados de los alumnos menores de 16 a&ntilde;os (un adulto por alumno) que no se domicilien en el barrio donde se encuentra la escuela. El listado deber&aacute; contener por orden alfab&eacute;tico: apellido y nombre, n&uacute;mero de documento, correo electr&oacute;nico, apellido y nombre del alumno con el cual posee el v&iacute;nculo. Deber&aacute; estar en formato Excel (seg&uacute;n el modelo que se indicar&aacute;) y ser enviado a </span><span><a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a></span><span>&nbsp;antes del 24 de septiembre de 2018. Los votos de las personas que no sean vecinos del barrio y que no hayan sido incluidas en este padr&oacute;n especial ser&aacute;n considerados nulos.</span></p>
              <p><span>Art. 12&ordm; PROYECTOS DE ENTIDADES INTERMEDIAS &ndash; PADR&Oacute;N ESPECIAL: </span><span>En el caso de proyectos de entidades las autoridades de las mismas deber&aacute;n elaborar un padr&oacute;n que incluya a directivos, asociados e inscriptos en actividades y talleres brindados por la entidad. En todos los casos mencionados, solo deber&aacute;n incluirse aquellas personas que no tengan domicilio particular o laboral en el barrio. El listado deber&aacute; contener por orden alfab&eacute;tico: apellido y nombre, n&uacute;mero de documento, correo electr&oacute;nico, tipo de participaci&oacute;n (directivo, socio, alumno). Deber&aacute; estar en formato Excel (seg&uacute;n el modelo que se indicar&aacute;) y ser enviado a </span><span><a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a></span><span>&nbsp;antes del 24 de septiembre de 2018. Los votos de las personas que no sean vecinos del barrio y que no hayan sido incluidas en este padr&oacute;n especial ser&aacute;n considerados nulos.</span></p>
              <p><span>Art. 13&ordm; PROYECTOS DE ENTIDADES CON ACTIVIDAD EN M&Aacute;S DE UN BARRIO DEL MUNICIPIO:</span><span>&nbsp;Las entidades que desarrollen sus actividades en m&aacute;s de un barrio del Partido, podr&aacute;n presentar hasta un m&aacute;ximo de 2 (dos) proyectos, eligiendo 2 (dos) barrios en los que desarrollen actividades para presentarlos.</span></p>
              <p><span>Art. 14&ordm; EJECUCI&Oacute;N DE PROYECTOS &ndash; PRESUPUESTO: </span><span>Cada proyecto sujeto a votaci&oacute;n tiene un enunciado o t&iacute;tulo y un presupuesto asignado (que es un monto estimado de acuerdo al proyecto en cuesti&oacute;n). Los proyectos que resulten electos se ejecutan aplicando fondos hasta el monto del presupuesto que tienen asignado, siendo el enunciado o t&iacute;tulo del proyecto una referencia general del mismo. En el caso de instituciones educativas y/o entidades (sociedades de fomento, clubes, asociaciones civiles, etc.) las autoridades de las mismas determinar&aacute;n (por escrito) el orden de prioridades de los componentes o partes de su proyecto al efecto de la aplicaci&oacute;n del monto asignado al referido proyecto. </span></p>
              <p><span>Art. 15&ordm; AUTORIDADES DE MESA &ndash; FISCALES:</span><span>&nbsp;Las autoridades de los puntos de votaci&oacute;n ser&aacute;n designadas por la Subsecretar&iacute;a. Podr&aacute;n participar como auxiliares de autoridades de mesa y como veedores del proceso electoral vecinos y miembros de entidades de cada uno de los nueve barrios.</span></p>
              <p><span>Art. 16&ordm; ESCRUTINIO: </span><span>El escrutinio de los votos de los nueve barrios se realizar&aacute; los d&iacute;as </span><span>8, 9 y 10 de octubre de 2018</span><span>&nbsp;</span><span>a partir de las 10 hs</span><span>. en lugar a designar por la Subsecretar&iacute;a. Podr&aacute;n ser veedores del proceso de escrutinio los vecinos y representantes de instituciones y escuelas, para lo cual deber&aacute;n informarlo antes del mi&eacute;rcoles 3 de octubre de 2018 por correo electr&oacute;nico a </span><span><a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a></span><span>&nbsp;o personalmente en las oficinas de la Subsecretar&iacute;a. La Subsecretar&iacute;a podr&aacute; extender y/o modificar las fechas y horario del escrutinio.</span></p>
              <p><span>Art. 17&ordm; SUBL&Iacute;MITE BARRIAL APLICADO A LOS PROYECTOS DE ESTABLECIMIENTOS EDUCATIVOS PUBLICOS PROVINCIALES: </span><span>En 2018, se incluye en el Presupuesto Participativo una suma de hasta $3.000.000 (pesos tres millones) por barrio y de hasta $2.000.000 (pesos dos millones) por escuela, para ser destinada a mejoras edilicias o de equipamiento en establecimientos educativos p&uacute;blicos dependientes de la Provincia de Buenos Aires. Para ser realizados, estos proyectos tendr&aacute;n que ganar esa prioridad por el voto en id&eacute;ntica condici&oacute;n que el resto de los proyectos del barrio.</span></p>
              <p><span>Art. 18&ordm; PROYECTO ELEGIDOS PARA SER EJECUTADOS: </span><span>Los proyectos elegidos para ser ejecutados en 2019 ser&aacute;n aquellos que en cada barrio por cantidad de votos recibidos cubran el total del presupuesto asignado al barrio. En el anexo 1 se encuentran los montos asignados a cada barrio. Puede ocurrir que por orden de &nbsp;prioridad de votos, un proyecto supere por presupuesto el monto total establecido &nbsp;para el barrio; en ese caso se pasar&aacute; al proyecto que siga en cantidad de votos hasta agotar el monto asignado al barrio.</span></p>
              <p><span>Ejemplo: El Barrio A tiene un monto asignado $ 9.000.000 y el resultado de la votaci&oacute;n determin&oacute; el siguiente orden:</span></p>
              <a></a><a></a>
              <table>
                  <tbody>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>910 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Escuela Prov. 4. Refacciones en ba&ntilde;os</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>2.000.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Se va a ejecutar </span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>895 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Club Atl&eacute;tico AA. Remodelaci&oacute;n de vestuario </span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>3.000.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Se va a ejecutar</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>878 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Jard&iacute;n Maternal Municipal 19. Ba&ntilde;o para personas con discapacidad</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>1.500.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Se va a ejecutar</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>800 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Soc. Fom. EE. Refacci&oacute;n en Buffet</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>&nbsp;400.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Se va a ejecutar</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>720 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Escuela Prov. 98. Reparaci&oacute;n pisos aulas</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>1.500.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>No se ejecuta porque supera el monto l&iacute;mite para Escuelas Provinciales</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>690 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>C&aacute;maras de seguridad</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>4.500.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>No se ejecuta porque supera el monto asignado al barrio</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>665 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Escuela Prov. 123. Pintura gral.</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>&nbsp;950.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Se va a ejecutar</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>530 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Centro de Jubilados FFF. Reformas en el SUM</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>&nbsp;400.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Se va a ejecutar</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>500 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Estac. para personas con discapacidad en &hellip;</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>730.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Se va a ejecutar</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>325 votos</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>Campa&ntilde;a para promover el reciclado en. . . . .</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>150.000</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>No se ejecuta porque supera el monto asignado al Barrio</span></p>
                        </td>
                    </tr>
                  </tbody>
              </table>
              <p><span></span></p>
              <p><span>Art. 19&ordm;: </span><span>La Subsecretar&iacute;a de Participaci&oacute;n Ciudadana es autoridad para la interpretaci&oacute;n del presente reglamento.</span></p>
              <p><span>ANEXO 1 &ndash; Partidas asignadas por barrio (presupuesto 2019)</span></p>
              <p><span></span></p>
              <a></a><a></a>
              <table>
                  <tbody>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>OLIVOS</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 9.833.333 </span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>MUNRO</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 9.833.333</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>FLORIDA ESTE</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 9.833.333</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>VILLA MARTELLI</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 8.266.666</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>FLORIDA OESTE</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 8.266.666</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>VICENTE L&Oacute;PEZ</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 8.266.666</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>CARAPACHAY</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 6.900.000</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>VILLA ADELINA</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 6.900.000</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>LA LUCILA</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 6.900.000</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1">
                          <p><span>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                        </td>
                        <td colspan="1" rowspan="1">
                          <p><span>$ 75.000.000</span></p>
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
