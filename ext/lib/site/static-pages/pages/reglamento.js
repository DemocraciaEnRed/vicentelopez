import React, { Component } from 'react'
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
          <div className='contenedor largo'>
            <div className='fondo-titulo'>
              <h1>Reglamento Electoral</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-reglamento'>
            <p><span>REGLAMENTO PARA LA ELECCIÓN DE PROYECTOS A SER EJECUTADOS EN EL 2019</span></p>
            <p><span>Art. 1° ALCANCE:</span><span>El presente reglamento regula el proceso de elección de los Proyectos del
              Presupuesto Participativo del Municipio de Vicente López, propuestos en el período
              establecido para la presentación de los mismos durante el 2018 y para ser ejecutados en el
              2019.</span></p>
            <p><span>Art. 2° FECHA Y LUGAR DE LA VOTACIÓN:</span><span>La votación de proyectos para ejecutar en el 2019
              se realizara durante 14 (catorce) días consecutivos a partir del lunes 24 de septiembre y hasta
              el domingo 7 de octubre de 2018; en los lugares y horarios que serán publicados en el sitio
              https://forosvecinales.vicentelopez.gov.ar. Por razones de fuerza mayor la Subsecretaría de
              Participación Ciudadana, en adelante “la Subsecretaría”, podrá extender el periodo de
              votación, en cuyo caso lo comunicará en el sitio antes mencionado.</span></p>
            <p><span>Art. 3° QUIÉNES ESTÁN HABILITADOS A VOTAR:</span></p>
            <p><span>a. Los mayores de 16 años (cumplidos al 7 de octubre de 2018) con domicilio en
              cualquiera de los 9 barrios en que se divide el Partido de Vicente López (Villa Martelli,
              Florida Oeste, Munro, Carapachay, Villa Adelina, Florida Este, La Lucila, Olivos y
              Vicente López).</span></p>
            <p><span>b. Aquéllos que trabajen en alguno de los mencionados barrios.</span></p>
            <p><span>c. Alumnos mayores de 16 años (cumplidos al 7 de Octubre de 2018) y los padres o
              encargados de alumnos menores de 16 años (uno por alumno) de los Establecimientos
              Educativos Públicos tanto Provinciales como Municipales del Partido, aunque no
              tengan domicilio en el barrio en que se encuentra ubicada la escuela ni en el Partido
              de Vicente López; siempre que el Establecimiento Educativo haya presentado
              propuesta y el votante se encuentre inscripto en el padrón especial al que se refiere el
              art. 11 del presente reglamento.</span></p>
            <p><span>d. Las personas vinculadas a las entidades que hayan presentado propuestas,
              entendiendo por tales a: directivos, asociados e inscriptos en actividades y talleres
              brindados por la entidad; aunque no tengan domicilio en el barrio en que se encuentra
              ubicada la entidad ni en el Partido de Vicente López y siempre que los sufragantes se
              encuentren inscriptos en el padrón especial al que refiere el art. 12 del presente
              reglamento.</span></p>
            <p><span>Art. 4° CUÁNTAS VECES SE PUEDE VOTAR:</span><span> Una persona puede votar solo una vez por barrio.
                También puede votar en otro u otros barrios si resulta ser comerciante, profesional o
                trabajador. En todos los casos es necesario acreditar domicilio como se indica en el art. 5.</span></p>
            <p><span>Art 5° ACREDITACIÓN DE DOMICILIO:</span><span> Para emitir el voto las personas deben presentar su
            DNI/LC/LE y, en el caso de que no tenga actualizado el domicilio en el mismo, deberá presentar
            un servicio a su nombre donde figure el domicilio que se corresponda con el barrio donde
            quiere votar. En el caso de comerciante, profesional o trabajador deberá acreditar el domicilio
            con un servicio a su nombre o habilitación municipal donde figure un domicilio que se
            corresponda con el barrio donde quiere votar. En caso de ser empleado en relación dedependencia podrá acreditar domicilio con su recibo de sueldo siempre que en el mismo figure
            el domicilio de su actividad laboral y se corresponda con el barrio donde quiere votar.</span></p>
            <p><span>Art. 6° VOTO NOMINAL:</span><span> El voto será nominal y tendrá el carácter de declaración jurada. Cada
elector deberá consignar en la boleta de votación los siguientes datos: apellido y nombre,
domicilio particular o laboral (según corresponda), tipo y numero de documento de identidad,
correo electrónico (si tiene) y firma.</span></p>
            <p><span>Art. 7° BOLETAS:</span><span> Cada uno de los 9 barrios del municipio tendrá una boleta única en la que
            estarán todos los proyectos del referido barrio en condiciones de ser elegidos por los vecinos.
            El elector podrá utilizar las boletas disponibles en los puntos de votación o descargar e
            imprimir la boleta desde el sitio https://forosvecinales.vicentelopez.gov.ar</span></p>
            <p><span>Art. 8° VOTOS POR ELECTOR:</span><span> Los vecinos podrán votar hasta 3 (tres) proyectos tildando el
casillero de aquellos que son de su preferencia. El voto de cada proyecto tendrá el mismo
valor. En el caso de los votantes señalados en el art. 3 inc. c y d, sólo podrán votar por el
proyecto de la Escuela o Entidad a la que están relacionados y, para que el voto sea válido,
deberán figurar en el padrón especial correspondiente.</span></p>
            <p><span>Art. 9° VOTOS EN BLANCO:</span><span> En caso de que en la boleta se tilde (elija) menos de 3 (tres)
proyectos, la diferencia a ese número se consideran votos en blanco.</span></p>
            <p><span>Art. 10° VOTOS NULOS:</span><span> Al momento del escrutinio, se considerarán nulos:</span></p>
            <p><span>a. todos los votos de una persona que hubiese votado utilizando más de una boleta para
un mismo barrio.</span></p>
            <p><span>b. todos los votos de una persona que hubiese votado más de tres proyectos en la misma
boleta.</span></p>
            <p><span>c. todos los votos de una persona que no sea vecina del barrio y que no haya sido
incluida en ningún padrón especial de escuela o entidad, de acuerdo a lo establecido
en los artículos 11 y 12.</span></p>
            <p><span>d. todos los votos de una persona inscripta en el padrón especial de una escuela o
entidad mencionado en los art. 11 y 12 que hubiese votado por otro proyecto que no
sea el de la Escuela o Entidad con la que está vinculado.</span></p>
            <p><span>e. todos los votos de una persona que no haya consignado en la boleta su domicilio
particular o laboral y su DNI.</span></p>
            <p><span>f. todos los votos de una persona que haya consignado un domicilio de un barrio que no
se corresponda con el barrio de la boleta.</span></p>
            <p><span>Art. 11° PROYECTOS DE ENTIDADES EDUCATIVAS PÚBLICAS PROVINCIALES Y MUNICIPALES –
PADRÓN ESPECIAL:</span><span> En el caso de los proyectos de las escuelas públicas provinciales y
municipales, las autoridades de las mismas deberán elaborar un padrón que incluya a los
alumnos mayores de 16 años (cumplidos al 7 de Octubre de 2018) y a los padres o encargados
de los alumnos menores de 16 años (un adulto por alumno) que no se domicilien en el barrio
donde se encuentra la escuela. El listado deberá contener por orden alfabético: apellido y
nombre, número de documento, correo electrónico, apellido y nombre del alumno con el cual
posee el vínculo. Deberá estar en formato Excel (según el modelo que se indicará) y ser
enviado a participacion.ciudadana@vicentelopez.gov.ar antes del 24 de septiembre de 2018.Los votos de las personas que no sean vecinos del barrio y que no hayan sido incluidas en
este padrón especial serán considerados nulos.</span></p>
            <p><span>Art. 12° PROYECTOS DE ENTIDADES INTERMEDIAS – PADRÓN ESPECIAL:</span><span> En el caso de
proyectos de entidades, las autoridades de las mismas deberán elaborar un padrón que incluya
a directivos, asociados e inscriptos en actividades y talleres brindados por la entidad. En todos
los casos mencionados, solo deberán incluirse aquellas personas que no tengan domicilio
particular o laboral en el barrio. El listado deberá contener por orden alfabético: apellido y
nombre, número de documento, correo electrónico, tipo de participación (directivo, socio,
alumno). Deberá estar en formato Excel (según el modelo que se indicará) y ser enviado a
participacion.ciudadana@vicentelopez.gov.ar antes del 24 de septiembre de 2018. Los votos
de las personas que no sean vecinos del barrio y que no hayan sido incluidas en este padrón
especial serán considerados nulos.</span></p>
            <p><span>Art. 13° PROYECTOS DE ENTIDADES CON ACTIVIDAD EN MÁS DE UN BARRIO DEL MUNICIPIO:</span><span>
Las entidades que desarrollen sus actividades en más de un barrio del Partido, podrán
presentar hasta un máximo de 2 (dos) proyectos, eligiendo 2 (dos) barrios en los que
desarrollen actividades para presentarlos.</span></p>
            <p><span>Art. 14° EJECUCIÓN DE PROYECTOS – PRESUPUESTO:</span><span> Cada proyecto sujeto a votación tiene
un enunciado o título y un presupuesto asignado (que es un monto estimado de acuerdo al
proyecto en cuestión). Los proyectos que resulten electos se ejecutan aplicando fondos hasta
el monto del presupuesto que tienen asignado, siendo el enunciado o título del proyecto una
referencia general del mismo. En el caso de instituciones educativas y/o entidades (sociedades
de fomento, clubes, asociaciones civiles, etc.) las autoridades de las mismas determinarán (por
escrito) el orden de prioridades de los componentes o partes de su proyecto al efecto de la
aplicación del monto asignado al referido proyecto.</span></p>
            <p><span>Art. 15° AUTORIDADES DE MESA:</span><span> Las autoridades de los puntos de votación serán designadas
por la Subsecretaría. Podrán participar como auxiliares de autoridades de mesa y como
veedores del proceso electoral vecinos y miembros de entidades de cada uno de los nueve
barrios.</span></p>
            <p><span>Art. 16° ESCRUTINIO:</span><span> El escrutinio de los votos de los nueve barrios se realizará los días 9, 10 y
11 de octubre de 2018 a partir de las 10 hs. en lugar a designar por la Subsecretaría. Podrán
ser veedores del proceso de escrutinio los vecinos y representantes de instituciones y escuelas,
para lo cual deberán informarlo antes del viernes 5 de octubre de 2018 por correo electrónico
a participacion.ciudadana@vicentelopez.gov.ar o personalmente en las oficinas de la
Subsecretaría. La Subsecretaría podrá extender y/o modificar las fechas y horario del
escrutinio.</span></p>
            <p><span>Art. 17° SUBLÍMITE BARRIAL APLICADO A LOS PROYECTOS DE ESTABLECIMIENTOS
EDUCATIVOS PUBLICOS PROVINCIALES:</span><span> En 2018, se incluye en el Presupuesto Participativo
una suma de hasta $3.000.000 (pesos tres millones) por barrio y de hasta $2.000.000 (pesos
dos millones) por escuela, para ser destinada a mejoras edilicias o de equipamiento en
establecimientos educativos públicos dependientes de la Provincia de Buenos Aires. Para ser
realizados, estos proyectos tendrán que ganar esa prioridad por el voto en idéntica condición
que el resto de los proyectos del barrio.</span></p>
            <p><span>Art. 18° PROYECTO ELEGIDOS PARA SER EJECUTADOS:</span><span> Los proyectos elegidos para ser
ejecutados en 2019 serán aquellos que en cada barrio por cantidad de votos recibidos cubran
el total del presupuesto asignado al barrio. En el anexo 1 se encuentran los montos asignados
a cada barrio. Puede ocurrir que por orden de prioridad de votos, un proyecto supere por
presupuesto el monto total establecido para el barrio; en ese caso se pasará al proyecto que
siga en cantidad de votos hasta agotar el monto asignado al barrio.</span></p>
            <p><span>Ejemplo: El Barrio A tiene un monto asignado $ 9.000.000 y el resultado de la votación
determinó el siguiente orden:</span></p>
            <p></p>
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
            <p></p>
            <p><span>Art. 19°:</span><span>La Subsecretaría de Participación Ciudadana es autoridad para la interpretación del
            presente reglamento.</span></p>
            <p></p>
            <p><span>ANEXO 1 – Partidas asignadas por barrio (presupuesto 2019)</span></p>
            <p></p>
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
