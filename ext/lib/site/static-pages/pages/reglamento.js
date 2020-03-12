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
              <h1>Reglamento</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-reglamento'>
            <p><span><strong>REGLAMENTO DEL PRESUPUESTO PARTICIPATIVO 2020-2021</strong></span></p>
            
            <p><strong>Art. 1° ALCANCE:</strong><span> El presente reglamento regula el Presupuesto Participativo del Municipio de Vicente López para su edición 2020-2021.</span></p>
            
            <p><strong>Art. 2° OBJETO:</strong><span>El “Presupuesto Participativo” tiene como objeto brindar a los vecinos de las nueve localidades del Municipio de Vicente López la posibilidad de decidir en forma directa sobre un porcentaje del presupuesto de inversión con que cuenta el Municipio. Esta iniciativa se enmarca en las funciones de la Subsecretaría de Participación Ciudadana (en adelante la Subsecretaría) entre las que está: “entender en la planificación y formulación del presupuesto participativo, gestionando y desarrollando las acciones necesarias para la plena y armónica participación de todos los ciudadanos y organizaciones sectoriales interesadas” (Decreto 1060/18, Anexo 1, foja 20), promoviendo de esta manera la democracia participativa en el municipio como complemento de la democracia representativa.</span></p>
            
            <p><strong>Art. 3° PROCESO:</strong><span> La implementación del presupuesto participativo incluye siete (7) etapas:</span></p>
            <p><span>1. Planificación anual y difusión: ENERO A MARZO DE 2020</span></p>
            <p><span>2. Presentación de Propuestas: MARZO A MAYO DE 2020</span></p>
            <p><span>3. Análisis de factibilidad: JUNIO A JULIO DE 2020</span></p>
            <p><span>4. Difusión de proyectos factibles: AGOSTO Y SEPTIEMBRE DE 2020</span></p>
            <p><span>5. Elección de proyectos factibles: SEPTIEMBRE Y OCTUBRE DE 2020</span></p>
            <p><span>6. Publicación de resultados: OCTUBRE DE 2020</span></p>
            <p><span>7. Ejecución de los proyectos ganadores en 2020: ENERO A DICIEMBRE DE 2021</span></p>

            <p><strong>Art. 4° TIPO DE PROPUESTAS:</strong><span> Las propuestas deben ser de inversión, es decir, infraestructura y equipamiento, destinadas al espacio público, a dependencias municipales y/o entidades de bien público sin fines de lucro localizadas en el barrio donde se presenta la propuesta. En el caso de que estén destinadas a dependencias municipales y/o entidades, deben contar con la aprobación previa de los responsables de las mismas, según corresponda en cada caso.</span></p>
            
            <p><strong>Art 5° CANALES DE PRESENTACIÓN DE LAS PROPUESTAS:</strong><span> Todas las propuestas deberán ser cargadas en el sitio <a href='https://forosvecinales.vicentelopez.gov.ar' target='_blank'>https://forosvecinales.vicentelopez.gov.ar</a>., utilizando el formulario
            específico que allí se ofrece, entre el 19 de marzo y el 31 de mayo de 2019. Para ello, cada
            persona –a título individual o en representación de una entidad- deberá registrarse como
            usuario del sitio utilizando un correo electrónico y una contraseña o ingresando con un usuario
            de la red social Facebook. También se pueden presentar de manera presencial en cualquiera
            de las 12 reuniones de presentación de propuestas que se realizarán en las 9 localidades del
            partido de Vicente López según el siguiente cronograma, pero luego de presentadas, deberán
            ser cargadas en el sitio arriba mencionado como condición para ser consideradas en el análisis
            de factibilidad:</span></p>
            <p><span>1) MUNRO - JUEVES 19/3, 19hs - Escuela Especial Nº 504 - J S Agüero 2685</span></p>
            <p><span>2) MUNRO - JUEVES 26/3, 19hs - Sociedad de Fomento de Munro - G Posadas 2443</span></p>
            <p><span>3) OLIVOS - MARTES 7/4, 19hs - Colegio Asunción de la Virgen - Gdor. Ugarte 2351</span></p>
            <p><span>4) OLIVOS - MARTES 14/4, 19hs - Escuela Paula Albarracín - Juan B Alberdi 1227</span></p>
            <p><span>5) VICENTE LOPEZ - MARTES 21/4, 19hs - Instituto Bignone - Haedo 1426</span></p>
            <p><span>6) VILLA MARTELLI - JUEVES 23/4, 19hs - Escuela Primaria Nº 11 - E del Campo 777</span></p>
            <p><span>7) FLORIDA ESTE - MARTES 28/4, 19hs - Universidad Siglo 21 - A Alsina 1765</span></p>
            <p><span>8) FLORIDA ESTE - JUEVES 30/4, 19hs - Colegio Santa Teresita - J J de Urquiza 2050</span></p>
            <p><span>9) FLORIDA OESTE - MARTES 5/5, 19hs - Escuela Secundaria Nº 9 - Francia 3536</span></p>
            <p><span>10) FLORIDA OESTE - JUEVES 7/5, 19hs - Escuela Primaria N º 17 - G Méndez 2050</span></p>
            <p><span>11) LA LUCILA - MARTES 12/5, 19hs - Colegio San Nicolás - J M Estrada 3329</span></p>
            <p><span>12) CARAPACHAY - MARTES 14/5, 19hs - Escuela Primaria 18 - Drysdale 5615</span></p>
            <p><span>13) VILLA ADELINA - MARTES 19/5, 19hs - Escuela Secundaria Nº 11 - Gdor. Castro 3720</span></p>
            <p><strong>Art. 6° ANÁLISIS DE FACTIBILIDAD DE LAS PROPUESTAS:</strong><span> La Subsecretaría evaluará las propuestas recibidas a través del sitio web y verificará si son legalmente factibles, si son técnicamente factibles y si son económicamente factibles. La mencionada evaluación será informada a él o los autores de la propuesta de manera pública a través del sitio web.</span></p>


            <p><strong>Art. 7° PRESUPUESTO LÍMITE DE LOS PROYECTOS:</strong><span> para que una propuesta se convierta en un proyecto factible, además de superar la verificación legal y técnica, su presupuesto estimado de realización no puede superar los $4.500.000 para la edición 2020-2021.</span></p>
            
            
          <p><strong>Art. 8° DIFUSIÓN DE PROYECTOS FACTIBLES:</strong><span> las propuestas que sean consideradas factibles y por lo tanto, se conviertan en proyectos factibles pasibles de ser votados serán publicados en el sitio web y en las redes sociales del Presupuesto Participativo Vicente López y difundidas por correo electrónico a los vecinos que se registren en el sitio y/o en la base de datos de la Subsecretaría y a través de cartelería en las Delegaciones Municipales de cada barrio.</span></p>

          <p><strong>Art. 9° ELECCIÓN DE PROYECTOS FACTIBLES:</strong><span> para decidir cuáles de todos los proyectos factibles se llevarán a cabo en 2021, se realizará una votación directa simultánea en las nueve localidades. Los proyectos que obtengan más cantidad de votos y cuyos presupuestos estimados no superen el monto total asignado para cada barrio, serán realizados durante el año 2021.</span></p>

            <p><strong>Art. 10° FECHA Y LUGAR DE LA VOTACIÓN:S:</strong><span> La votación de proyectos para ejecutar en el 2021 se realizará durante 14 (catorce) días consecutivos a partir del <strong>lunes 28 de septiembre  hasta el domingo 11 de octubre de 2020</strong>; en los lugares y horarios que serán publicados en el sitio <a href="https://forosvecinales.vicentelopez.gov.ar" target="_blank">https://forosvecinales.vicentelopez.gov.ar</a>. Por razones de fuerza mayor la Subsecretaría, podrá extender el periodo de votación, en cuyo caso lo comunicará en el sitio antes mencionado.</span></p>
           

            <p><strong>Art. 11° QUIÉNES ESTÁN HABILITADOS A VOTAR:</strong></p>
            <p><span>a. Los mayores de 16 años (cumplidos al 28 de septiembre de 2020) con domicilio en cualquiera de los 9 barrios en que se divide el Partido de Vicente López (Villa Martelli, Florida Oeste, Munro, Carapachay, Villa Adelina, Florida Este, La Lucila, Olivos y Vicente López).</span></p>
          <p><span>b. Aquéllos que trabajen en alguno de los mencionados barrios.</span></p>
          <p><span>c. Alumnos mayores de 16 años (cumplidos al 28 de septiembre de 2020) y los padres o encargados de alumnos menores de 16 años (uno por alumno) de los Establecimientos Educativos Públicos tanto Provinciales como Municipales del Partido, aunque no tengan domicilio en el barrio en que se encuentra ubicada la escuela ni en el Partido de Vicente López; siempre que el Establecimiento Educativo haya presentado propuesta y el votante se encuentre inscripto en el padrón especial al que se refiere el art. 19 del presente reglamento.</span></p>
          <p><span>d. Las personas vinculadas a las entidades que hayan presentado propuestas, entendiendo por tales a: directivos, asociados e inscriptos en actividades y talleres brindados por la entidad; aunque no tengan domicilio en el barrio en que se encuentra ubicada la entidad ni en el Partido de Vicente López y siempre que los sufragantes se encuentren inscriptos en el padrón especial al que refiere el art. 20 del presente reglamento.</span></p>

          <p><strong>Art. 12° CUÁNTAS VECES SE PUEDE VOTAR:</strong><span> Una persona puede votar solo una vez por barrio. También puede votar en otro u otros barrios si resulta ser comerciante, profesional, empresario o trabajador. En todos los casos es necesario acreditar domicilio como se indica en el art. 13.</span></p>

            <p><strong>Art. 13° ACREDITACIÓN DE DOMICILIO:</strong><span> Para emitir el voto las personas deben presentar su DNI/LC/LE y, en el caso de que no tenga actualizado el domicilio en el mismo, deberá presentar un servicio a su nombre donde figure el domicilio que se corresponda con el barrio donde quiere votar. En el caso de comerciante, profesional o trabajador deberá acreditar el domicilio con un servicio a su nombre o habilitación municipal donde figure un domicilio que se corresponda con el barrio donde quiere votar. En caso de ser empleado en relación de dependencia podrá acreditar domicilio con su recibo de sueldo siempre que en el mismo figure el domicilio de su actividad laboral y se corresponda con el barrio donde quiere votar.</span></p>
           
            <p><strong>Art. 14° VOTO NOMINAL:</strong><span> El voto será nominal y tendrá el carácter de declaración jurada. Cada elector deberá consignar en la boleta de votación los siguientes datos: apellido y nombre, domicilio particular o laboral (según corresponda), tipo y número de documento de identidad, correo electrónico (si tiene) y firma.</span></p>

            <p><strong>Art. 15° BOLETAS:</strong><span> Cada uno de los 9 barrios del municipio tendrá una boleta única en la que figurarán todos los proyectos del referido barrio en condiciones de ser elegidos por los vecinos. El elector podrá utilizar las boletas disponibles en los puntos de votación o descargar e imprimir la boleta desde el sitio <a href="https://forosvecinales.vicentelopez.gov.ar" target="_blank">https://forosvecinales.vicentelopez.gov.ar</a></span></p>
            
            <p><strong>Art. 16° VOTOS POR ELECTOR:</strong><span> Los vecinos podrán votar hasta 3 (tres) proyectos seleccionando el casillero de aquellos que sean de su preferencia. El voto de cada proyecto tendrá el mismo valor. En el caso de los votantes señalados en el art. 11 inc. c y d, sólo podrán votar por el proyecto de la Escuela o Entidad a la que están relacionados y, para que el voto sea válido, deberán figurar en el padrón especial correspondiente.</span></p>

            <p><strong>Art. 17° VOTOS EN BLANCO:</strong><span> En caso de que en la boleta se tilde (elija) menos de 3 (tres) proyectos, la diferencia a ese número se consideran votos en blanco.</span></p>

            <p><strong>Art. 18° VOTOS NULOS:</strong><span> Al momento del escrutinio, se considerarán nulos:</span></p>
            <p><span>a. todos los votos de una persona que hubiese votado utilizando más de una boleta para un mismo barrio.</span></p>
            <p><span>b. todos los votos de una persona que hubiese votado más de tres proyectos en la misma boleta.</span></p>
            <p><span>c. todos los votos de una persona que no sea vecina del barrio y que no haya sido incluida en ningún padrón especial de escuela o entidad, de acuerdo a lo establecido en los artículos 19 y 20.</span></p>
            <p><span>d. todos los votos de una persona inscripta en el padrón especial de una escuela o entidad mencionado en los art. 19 y 20 que hubiese votado por otro proyecto que no sea el de la Escuela o Entidad con la que está vinculado.</span></p>
            <p><span>e. todos los votos de una persona que no haya consignado en la boleta su domicilio particular o laboral, su DNI y su firma.</span></p>
            <p><span>f. todos los votos de una persona que haya consignado un domicilio de un barrio que no se corresponda con el barrio de la boleta.</span></p>
            
            <p><strong>Art. 19° PROYECTOS DE ENTIDADES EDUCATIVAS PÚBLICAS PROVINCIALES Y MUNICIPALES – PADRÓN ESPECIAL:</strong><span> En el caso de los proyectos de las escuelas públicas provinciales y municipales, las autoridades de las mismas deberán elaborar un padrón que incluya a los alumnos mayores de 16 años (cumplidos al 28 de septiembre de 2020) y a los padres o encargados de los alumnos menores de 16 años (un adulto por alumno) que no se domicilien en el barrio donde se encuentra la escuela. El listado deberá contener por orden alfabético: apellido y nombre, número de documento, correo electrónico, apellido y nombre del alumno con el cual posee el vínculo. Deberá estar en formato Excel (según el modelo que se indicará) y ser enviado a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> antes del 14 de septiembre de 2020. <strong>Los votos de las personas que no sean vecinos del barrio y que no hayan sido incluidas en este padrón especial serán considerados nulos.</strong></span></p>

            <p><strong>Art. 20° PROYECTOS DE ENTIDADES INTERMEDIAS – PADRÓN ESPECIAL:</strong><span> En el caso de proyectos de entidades, las autoridades de las mismas deberán elaborar un padrón que incluya a directivos, asociados e inscriptos en actividades y talleres brindados por la entidad. En todos los casos mencionados, solo deberán incluirse aquellas personas que no tengan domicilio particular o laboral en el barrio. El listado deberá contener por orden alfabético: apellido y nombre, número de documento, correo electrónico, tipo de participación (directivo, socio, alumno). Deberá estar en formato Excel (según el modelo que se indicará) y ser enviado a
<a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> antes del 14 de septiembre de 2020. Los votos de las personas que no sean vecinos del barrio y que no hayan sido incluidas en este padrón especial serán considerados nulos.</span></p>

          <p><strong>Art. 21° PROYECTOS DE ENTIDADES CON ACTIVIDAD EN MÁS DE UN BARRIO DEL MUNICIPIO:</strong><span> Las entidades que desarrollen sus actividades en más de un barrio del Partido, podrán presentar hasta un máximo de 2 (dos) proyectos, eligiendo 2 (dos) barrios en los que desarrollen actividades para presentarlos.</span></p>

          <p><strong>Art. 22° EJECUCIÓN DE PROYECTOS – PRESUPUESTO:</strong><span> Cada proyecto sujeto a votación tiene un enunciado o título y un presupuesto asignado (que es un monto estimado de acuerdo al proyecto en cuestión). Los proyectos que resulten electos se ejecutan aplicando fondos hasta el monto del presupuesto que tienen asignado, siendo el enunciado o título del proyecto una referencia general del mismo. En el caso de instituciones educativas y/o entidades (sociedades de fomento, clubes, asociaciones civiles, etc.) las autoridades de las mismas determinarán (por escrito) el orden de prioridades de los componentes o partes de su proyecto al efecto de la aplicación del monto asignado al referido proyecto.</span></p>

          

          <p><strong>Art. 23° AUTORIDADES DE MESA:</strong><span> Las autoridades de los puntos de votación serán designadas por la Subsecretaría. Podrán participar como auxiliares de autoridades de mesa y como veedores del proceso electoral vecinos y miembros de entidades de cada uno de los nueve barrios.</span></p>

          <p><strong>Art. 24° ESCRUTINIO:</strong><span> El escrutinio de los votos de los nueve barrios se realizará los días <strong>14, 15 y 16 de octubre de 2020 a partir de las 9 hs.</strong>. en lugar a designar por la Subsecretaría. Podrán ser
          en lugar a designar por la Subsecretaría. Podrán ser veedores del proceso de escrutinio los vecinos y representantes de instituciones y escuelas, para lo cual deberán informarlo antes del viernes 25 de septiembre de 2020 por correo electrónico a <a href="mailto:participacion.ciudadana@vicentelopez.gov.ar">participacion.ciudadana@vicentelopez.gov.ar</a> o personalmente en las oficinas de la Subsecretaría. La Subsecretaría podrá extender y/o modificar las fechas y horario del escrutinio.</span></p>

          <p><strong>Art. 25° SUBLÍMITE BARRIAL APLICADO A LOS PROYECTOS DE ESTABLECIMIENTOS EDUCATIVOS PUBLICOS PROVINCIALES:</strong><span> En 2020, se incluye en el Presupuesto Participativo una suma de hasta $4.500.000 (pesos cuatro millones quinientos mil) por barrio y de hasta $4.500.000 (pesos cuatro millones quinientos mil) por escuela, para ser destinada a mejoras edilicias o de equipamiento en establecimientos educativos públicos dependientes de la Provincia de Buenos Aires. Para ser realizados, estos proyectos tendrán que ganar esa prioridad por el voto en idéntica condición que el resto de los proyectos del barrio.</span></p>
 
        
          <p><strong>Art. 26° PROYECTO ELEGIDOS PARA SER EJECUTADOS:</strong><span> Los proyectos elegidos para ser ejecutados en 2021 serán aquellos que en cada barrio por cantidad de votos recibidos cubran el total del presupuesto asignado al barrio. En el anexo 1 se encuentran los montos previstos para cada barrio. Puede ocurrir que, por orden de prioridad de votos, un proyecto supere por presupuesto el monto total establecido para el barrio; en ese caso se pasará al proyecto que siga en cantidad de votos hasta agotar el monto asignado al barrio.</span></p>
            
            <p><span>Ejemplo: El Barrio A tiene un monto asignado $ 18.187.176 y el resultado de la votación determinó el siguiente orden:</span></p>
            <p></p>
            <table className="table tabla-reglamento alinear">
              <tbody>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>910 votos</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>Escuela Prov. 4. Refacciones en ba&ntilde;os</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>3.000.000</span></p>
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
                    <p><span>1.800.000</span></p>
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
                    <p><span>Escuela Prov. 98. Reparaci&oacute;n pisos aulas</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>2.400.000</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>No se ejecuta porque supera el monto límite para Escuelas Provinciales</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>720 votos</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>Soc. Fom. EE. Refacci&oacute;n en Buffet</span></p>
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
                    <p><span>695 votos</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>Biblioteca Popular “Don Pepe”, reparación del techo y equipamiento para la sala de lectura</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>1.900.000</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>No se ejecuta porque supera el monto l&iacute;mite del barrio</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>500 votos</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>Estac. para personas con discapacidad en ...</span></p>
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
                    <p><span>Campaña para promover el reciclado en el barrio</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>450.000</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>Se va a ejecutar</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>310 votos</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>Semáforo peatonal en varios cruces</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>800.000</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>No se ejecuta porque supera el monto asignado al barrio</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>300 votos</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>Cámaras de vigilancia urbana</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>1.500.000</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                  <p><span>No se ejecuta porque supera el monto asignado al barrio</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <p></p>
            <p><strong>Art. 27°:</strong><span> La Subsecretaría de Participación Ciudadana es autoridad para la interpretación del presente reglamento.</span></p>
            <p></p>
            <p><strong>ANEXO 1 – Partidas previstas por barrio (presupuesto 2021, a refrendar por el Honorable
Concejo Deliberante)</strong></p>
            <p></p>
            <table className="table tabla-reglamento alinear tabla-presupuesto">
              <tbody>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>OLIVOS</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 21.621.796 </span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>MUNRO</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 21.621.796</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>FLORIDA ESTE</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 21.621.796</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>VILLA MARTELLI</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 18.187.176</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>FLORIDA OESTE</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 18.187.176</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>VICENTE L&Oacute;PEZ</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 18.187.176</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>CARAPACHAY</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 15.191.028</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>VILLA ADELINA</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 15.191.028</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>LA LUCILA</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 15.191.028</span></p>
                  </td>
                </tr>
                <tr>
                  <td colspan="1" rowspan="1">
                    <p><span>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                  </td>
                  <td colspan="1" rowspan="1">
                    <p><span>$ 165.000.000</span></p>
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
