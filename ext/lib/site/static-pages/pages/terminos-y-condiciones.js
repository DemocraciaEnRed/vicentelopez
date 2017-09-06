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
              <h1>Términos y Condiciones</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-terminos-y-condiciones'>
            <ul>
               <li><a onClick={(e) => {e.preventDefault(); Anchor.goTo('acerca-del-sitio')}} href="">Acerca de este sitio</a></li>
               <li><a onClick={(e) => {e.preventDefault(); Anchor.goTo('usuarios')}} href="">Usuarios, obligaciones y condiciones</a></li>
               <li><a onClick={(e) => {e.preventDefault(); Anchor.goTo('privacidad')}} href="">Políticas de privacidad</a></li>
            </ul>
            <p></p>
            <p>El registro y uso en forosvecinales.org (en adelante, Foros Vecinales) indica la aceptación de estos términos y condiciones y de la política de privacidad.</p>
            <Anchor id='acerca-del-sitio'>
              <h2>Acerca de este sitio</h2>
              <p>Forosvecinales.org es un nuevo canal de diálogo y deliberación entre los los ciudadanos de Vicente López y el gobierno municipal. Tiene como objetivos promover la participación ciudadana y fortalecer el proceso de presupuesto participativo en el Municipio.</p>
              <h3>Tecnología</h3>
              <p>Foros Vecinales es un desarrollo basado en <a  href="https://www.google.com/url?q=http://democracyos.org/&amp;sa=D&amp;ust=1501267735218000&amp;usg=AFQjCNEv2LGzQpGHusHjn8OX0-t0AxCvKA">DemocracyOS</a> con la coordinación de la Municipalidad de Vicente López. DemocracyOS es una plataforma online de código abierto especialmente diseñada para informar, debatir y votar propuestas públicas hacia la construcción de una democracia adaptada al siglo XXI. DemocracyOS es desarrollado por la Fundación <a  href="https://www.google.com/url?q=http://democraciaenred.org&amp;sa=D&amp;ust=1501267735218000&amp;usg=AFQjCNEGSMRTyTyxvgeR79cbcxefZNyy6A">Democracia en Red</a>.</p>
              <h3>Registro en la plataforma web</h3>
              <p>El ingreso a Foros Vecinales no requiere registro online previo, el mismo será requerido si la/el usuaria/o desea publicar contenidos o interactuar con otros usuarios. </p>
              <p>Esperamos que te registres usando tu nombre. Las cuentas de "bots" u otros registros automáticos no están permitidas. Los usuarios son responsables de preservar la privacidad de su cuenta protegiendo el acceso a sus contraseñas. Por favor, ante cualquier ingreso indebido en tu cuenta, comunicate inmediatamente a través de participacion.ciudadana@vicentelopez.gov.ar</p>
              <h4>Validación de usuarios</h4>
              <p>Foros Vecinales se reserva el derecho de validar la información brindada por la/el usuaria/o al momento de la inscripción. En caso de que la información brindada no pueda validarse, Foros Vecinales se reserva el derecho de no dar de alta a ese usuario. Por su parte, Foros Vecinales deslinda su responsabilidad en el caso de no ser veraz la información suministrada al respecto.</p>
              <p>Al momento de la inscripción el usuario asume el compromiso y la responsabilidad de:</p>
              <ul>
                 <li>No proporcionar información personal falsa ni crear cuentas a nombre de terceros sin autorización.</li>
                 <li>No crear más de una cuenta personal.</li>
                 <li>No compartir la contraseña ni permitir a otra persona acceda a su cuenta.</li>
                 <li>Los usuarios se comprometen a notificar a Foros Vecinales del uso no autorizado de su clave.</li>
                 <li>Foros Vecinales se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar un registro previamente aceptado.</li>
              </ul>
            </Anchor>
            <Anchor id='usuarios'>
              <h2>Usuarios, obligaciones y condiciones</h2>
              <p>La/El usuaria/o deberá respetar estos Términos y Condiciones de Uso. Las infracciones por acción u omisión de estos Términos y Condiciones de Uso generarán el derecho a favor de Foros Vecinales de suspender al usuario que las haya realizado.</p>
              <p>La/El usuaria/o es responsable del contenido que suba, publique o muestre en Foros Vecinales, garantizando que el mismo no infringe derechos de terceros ni los Términos y Condiciones de Uso ni viola ninguna ley, reglamento u otra normativa. Los usuarios entienden y aceptan que el material y/o contenido que suba y/o publique podría ser utilizado por otros usuarios de la plataforma web y/o por terceras personas ajenas, y que Foros Vecinales no será responsable en ningún caso por tales utilizaciones.</p>
              <p>La/El usuaria/o debe usar Foros Vecinales en forma correcta y lícita. En caso contrario, Foros Vecinales podrá retirar el contenido y/o suspender la cuenta de aquellos usuarios que incurran en actitudes contrarias a estos términos y condiciones y/o de la política de privacidad, ofensivas, ilegales, violatorias de derechos de terceros, contrarias a la moral y buenas costumbres y/o amenaza para la seguridad de otros usuarios.</p>
              <p>En relación a los aportes, colaboraciones y comentarios que los usuarios realicen con respecto a las iniciativas propuestas, las mismas no son de carácter vinculante, obligatorio y/o impositivo sobre las acciones de la Municipalidad de Vicente López.</p>
              <h4>Actividades prohibidas</h4>
              <p>Las siguientes actividades se encuentran vedadas, sin perjuicio de las prohibiciones generales expuestas anteriormente:</p>
              <ul>
                 <li>Hostigar, acosar, amenazar, realizar actos de vandalismo hacia otros usuarios.</li>
                 <li>Infringir los derechos a la intimidad de otros usuarios.</li>
                 <li>Solicitar información personal identificable de otros usuarios con el propósito de hostigar, atacar, explotar, violar la intimidad de los mismos;</li>
                 <li>Publicar de manera intencionada o con conocimiento injurias o calumnias;</li>
                 <li>Publicar, con el intento de engañar, contenido que es falso o inexacto;</li>
                 <li>Intentar usurpar la identidad de otra/o usuaria/o, representando de manera falsa su afiliación con cualquier individuo o entidad, o utilizar el nombre de otra/o usuaria/o con el propósito de engañar;</li>
                 <li>Promover, defender o mostrar pornografía, obscenidad, vulgaridad, blasfemia, odio, fanatismo, racismo y/o violencia.</li>
                 <li>Vulnerar los derechos establecidos en la Ley N° 25.326 de Protección de Datos Personales.</li>
              </ul>
              <p>En caso de sufrir alguna de estas situaciones, comunicarse con Foros Vecinales a través de participacion.ciudadana@vicentelopez.gov.ar.</p>
              <h4>Moderación de la actividad en Foros Vecinales</h4>
              <p>La actividad en esta plataforma web contará con moderadores responsables de hacer cumplir estos Términos y Condiciones de Uso. Los mismos serán designados por la Municipalidad de Vicente López en pos de fomentar un diálogo franco y abierto que evite afrentas a personas o instituciones, material comercial no relacionado (SPAM) u otros desvíos de la intención original de Foros Vecinales.</p>
              <p>Aún así, los moderadores se reservan el derecho de:</p>
              <ul>
                 <li>Rechazar o eliminar contenido que no cumpla cumpla con estos términos de uso o que, de alguna forma, sea cuestionable.</li>
                 <li>Quitar el acceso a quien no cumpliera, de alguna forma, con estos términos de uso.</li>
              </ul>
            </Anchor>
            <Anchor id='privacidad'>
              <h2>Políticas de privacidad</h2>
              <p>La recolección y tratamiento de los datos personales tiene como finalidad conocer sobre el uso de Foros Vecinales y mejorar la propuesta.</p>
              <p>La Municipalidad de Vicente López no cederá a ninguna otra persona ni organismo los datos personales de los participantes, salvo orden judicial en contrario. Los datos recabados tienen por único objeto verificar que los comentarios sean cursados por personas diferentes y evitar abusos en el uso de la plataforma. Esta información será utilizada exclusivamente para obtener estadísticas generales de los usuarios.</p>
              <h4>Información proporcionada por los usuarios:</h4>
              <p>Las interacciones en Foros Vecinales requiere que los usuarios se registren. En ese caso, se solicitará información personal, como nombre y apellido, documento, dirección de correo electrónico. El perfil que es visible públicamente puede incluir el nombre y la foto seleccionada.</p>
              <p>Asimismo, si un usuario se pone en contacto con Foros Vecinales, es posible que guardemos constancia de la comunicación para poder resolver más fácilmente cualquier incidencia que se haya producido.</p>
              <p>Las direcciones de correo electrónico o cuenta de Facebook sólo se utilizarán para enviar notificaciones sobre el uso de la plataforma, avisos sobre futuras votaciones o consultas y otra información sobre el Presupuesto Participativo. No obstante, cada usuario podrá darse de baja en cualquier momento si así lo desea.</p>
              <h4>Información obtenida a partir del uso de la plataforma:</h4>
              <p>Foros Vecinales puede recopilar información sobre la forma en que los usuarios usan la plataforma. Entre la información obtenida de esta forma, se incluye el tipo de navegador utilizado, la preferencias de lenguaje y, por ejemplo, los comentarios que ha realizado.</p>
              <p>Foros Vecinales podrá compartir información de manera agregada, y en carácter no personal, con el público en general (por ejemplo, mostrar tendencias sobre el uso del sitio).</p>
              <p>Foros Vecinales garantiza la debida protección de los datos personales almacenados en esta plataforma web así como también el acceso a la información registrada en el mismo, de conformidad a lo establecido en el artículo 43, párrafo tercero de la Constitución Nacional y la Ley N° 25.326 de Protección de los Datos Personales.</p>
            </Anchor>
          </div> 
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
