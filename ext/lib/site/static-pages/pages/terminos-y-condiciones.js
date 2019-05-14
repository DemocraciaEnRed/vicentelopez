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
              <h1>Términos y Condiciones</h1>
            </div>
          </div>
        </section>
        <Anchor id='container'>
          <div className='ext-terminos-y-condiciones'>
            <h2><span>Acerca de este sitio</span></h2>
            <p><span>https://presupuestoparticipativo.vicentelopez.gov.ar/ es un nuevo canal de di&aacute;logo, transparencia y deliberaci&oacute;n entre los los ciudadanos de Vicente L&oacute;pez y el gobierno municipal. Tiene como objetivos promover la participaci&oacute;n ciudadana y fortalecer el proceso de presupuesto participativo en el Municipio.</span></p>
            <h3><span>Tecnolog&iacute;a</span></h3>
            <p><span>Presupuesto Participativo es un desarrollo basado en </span><span><a href="https://www.google.com/url?q=http://democracyos.org/&amp;sa=D&amp;ust=1521676906494000&amp;usg=AFQjCNEeLc5BFYKeOhcy9dGtpxUSsokQSw">DemocracyOS</a></span><span>&nbsp;con la coordinaci&oacute;n de la Municipalidad de Vicente L&oacute;pez. DemocracyOS es una plataforma online de c&oacute;digo abierto especialmente dise&ntilde;ada para informar, debatir y comprometerse con propuestas p&uacute;blicas hacia la construcci&oacute;n de una democracia adaptada al siglo XXI. DemocracyOS es desarrollado por la Fundaci&oacute;n </span><span><a href="https://www.google.com/url?q=http://democraciaenred.org&amp;sa=D&amp;ust=1521676906494000&amp;usg=AFQjCNEyK5ovPJ3gFAMs3dUaj5g5R4l9oQ">Democracia en Red</a></span><span>.</span></p>
            <h3><span>Registro en la plataforma web</span></h3>
            <p><span>El ingreso a Presupuesto Participativo no requiere registro online previo, el mismo ser&aacute; requerido si la/el usuaria/o desea publicar contenidos o interactuar con otros usuarios.</span></p>
            <p><span>Esperamos que te registres usando tu nombre. Las cuentas de &quot;bots&quot; u otros registros autom&aacute;ticos no est&aacute;n permitidas. Los usuarios son responsables de preservar la privacidad de su cuenta protegiendo el acceso a sus contrase&ntilde;as. Por favor, ante cualquier ingreso indebido en tu cuenta, comunicate inmediatamente a trav&eacute;s de participacion.ciudadana@vicentelopez.gov.ar</span></p>
            <h4><span>Validaci&oacute;n de usuarios</span></h4>
            <p><span>Presupuesto Participativo se reserva el derecho de validar la informaci&oacute;n brindada por la/el usuaria/o al momento de la inscripci&oacute;n. En caso de que la informaci&oacute;n brindada no pueda validarse, Presupuesto Participativo se reserva el derecho de no dar de alta a ese usuario. Por su parte, Presupuesto Participativo deslinda su responsabilidad en el caso de no ser veraz la informaci&oacute;n suministrada al respecto.</span></p>
            <p><span>Al momento de la inscripci&oacute;n el usuario asume el compromiso y la responsabilidad de:</span></p>
            <ul>
                <li><span>No proporcionar informaci&oacute;n personal falsa ni crear cuentas a nombre de terceros sin autorizaci&oacute;n.</span></li>
                <li><span>No crear m&aacute;s de una cuenta personal.</span></li>
                <li><span>No compartir la contrase&ntilde;a ni permitir a otra persona acceda a su cuenta.</span></li>
                <li><span>Los usuarios se comprometen a notificar a Presupuesto Participativo del uso no autorizado de su clave.</span></li>
                <li><span>Presupuesto Participativo se reserva el derecho de rechazar cualquier solicitud de inscripci&oacute;n o de cancelar un registro previamente aceptado.</span></li>
            </ul>
            <h2><span>Usuarios, obligaciones y condiciones</span></h2>
            <p><span>La/El usuaria/o deber&aacute; respetar estos T&eacute;rminos y Condiciones de Uso. Las infracciones por acci&oacute;n u omisi&oacute;n de estos T&eacute;rminos y Condiciones de Uso generar&aacute;n el derecho a favor de Presupuesto Participativo de suspender al usuario que las haya realizado.</span></p>
            <p><span>La/El usuaria/o es responsable del contenido que suba, publique o muestre en Presupuesto Participativo, garantizando que el mismo no infringe derechos de terceros ni los T&eacute;rminos y Condiciones de Uso ni viola ninguna ley, reglamento u otra normativa. Los usuarios entienden y aceptan que el material y/o contenido que suba y/o publique podr&iacute;a ser utilizado por otros usuarios de la plataforma web y/o por terceras personas ajenas, y que Presupuesto Participativo no ser&aacute; responsable en ning&uacute;n caso por tales utilizaciones.</span></p>
            <p><span>La/El usuaria/o debe usar Presupuesto Participativo en forma correcta y l&iacute;cita. En caso contrario, Presupuesto Participativo podr&aacute; retirar el contenido y/o suspender la cuenta de aquellos usuarios que incurran en actitudes contrarias a estos t&eacute;rminos y condiciones y/o de la pol&iacute;tica de privacidad, ofensivas, ilegales, violatorias de derechos de terceros, contrarias a la moral y buenas costumbres y/o amenaza para la seguridad de otros usuarios.</span></p>
            <p><span>En relaci&oacute;n a los aportes, colaboraciones y comentarios que los usuarios realicen con respecto a las iniciativas propuestas, las mismas no son de car&aacute;cter vinculante, obligatorio y/o impositivo sobre las acciones de la Municipalidad de Vicente L&oacute;pez.</span></p>
            <h4><span>Actividades prohibidas</span></h4>
            <p><span>Las siguientes actividades se encuentran vedadas, sin perjuicio de las prohibiciones generales expuestas anteriormente:</span></p>
            <ul>
                <li><span>Hostigar, acosar, amenazar, realizar actos de vandalismo hacia otros usuarios.</span></li>
                <li><span>Infringir los derechos a la intimidad de otros usuarios.</span></li>
                <li><span>Solicitar informaci&oacute;n personal identificable de otros usuarios con el prop&oacute;sito de hostigar, atacar, explotar, violar la intimidad de los mismos;</span></li>
                <li><span>Publicar de manera intencionada o con conocimiento injurias o calumnias;</span></li>
                <li><span>Publicar, con el intento de enga&ntilde;ar, contenido que es falso o inexacto;</span></li>
                <li><span>Intentar usurpar la identidad de otra/o usuaria/o, representando de manera falsa su afiliaci&oacute;n con cualquier individuo o entidad, o utilizar el nombre de otra/o usuaria/o con el prop&oacute;sito de enga&ntilde;ar;</span></li>
                <li><span>Promover, defender o mostrar pornograf&iacute;a, obscenidad, vulgaridad, blasfemia, odio, fanatismo, racismo y/o violencia.</span></li>
                <li><span>Vulnerar los derechos establecidos en la Ley N&deg; 25.326 de Protecci&oacute;n de Datos Personales.</span></li>
            </ul>
            <p><span></span></p>
            <p><span>En caso de sufrir alguna de estas situaciones, comunicarse con Presupuesto Participativo a trav&eacute;s de participacion.ciudadana@vicentelopez.gov.ar.</span></p>
            <h4><span>Moderaci&oacute;n de la actividad en Presupuesto Participativo</span></h4>
            <p><span>La actividad en esta plataforma web contar&aacute; con moderadores responsables de hacer cumplir estos T&eacute;rminos y Condiciones de Uso. Los mismos ser&aacute;n designados por la Municipalidad de Vicente L&oacute;pez en pos de fomentar un di&aacute;logo franco y abierto que evite afrentas a personas o instituciones, material comercial no relacionado (SPAM) u otros desv&iacute;os de la intenci&oacute;n original de Presupuesto Participativo.</span></p>
            <p><span>A&uacute;n as&iacute;, los moderadores se reservan el derecho de:</span></p>
            <ul>
                <li><span>Rechazar o eliminar contenido que no cumpla cumpla con estos t&eacute;rminos de uso o que, de alguna forma, sea cuestionable.</span></li>
                <li><span>Quitar el acceso a quien no cumpliera, de alguna forma, con estos t&eacute;rminos de uso.</span></li>
            </ul>
            <h2><span>Pol&iacute;ticas de privacidad</span></h2>
            <p><span>La recolecci&oacute;n y tratamiento de los datos personales tiene como finalidad conocer sobre el uso de Presupuesto Participativo y mejorar la propuesta.</span></p>
            <p><span>La Municipalidad de Vicente L&oacute;pez no ceder&aacute; a ninguna otra persona ni organismo los datos personales de los participantes, salvo orden judicial. Los datos recabados tienen por &uacute;nico objeto verificar que las propuestas sean presentadas por personas legalmente habilitadas para hacerlo y evitar abusos en el uso de la plataforma. Esta informaci&oacute;n ser&aacute; utilizada exclusivamente para obtener estad&iacute;sticas generales de los usuarios.</span></p>
            <h4><span>Informaci&oacute;n proporcionada por los usuarios:</span></h4>
            <p><span>Las interacciones en Presupuesto Participativo requiere que los usuarios se registren. En ese caso, se solicitar&aacute; informaci&oacute;n personal, como nombre y apellido, documento, </span><span>direcci&oacute;n legal</span><span>&nbsp;y direcci&oacute;n de correo electr&oacute;nico. El perfil que es visible p&uacute;blicamente puede incluir el nombre y la foto seleccionada.</span></p>
            <p><span>Asimismo, si un usuario se pone en contacto con Presupuesto Participativo, es posible que guardemos constancia de la comunicaci&oacute;n para poder resolver m&aacute;s f&aacute;cilmente cualquier incidencia que se haya producido.</span></p>
            <p><span>Las direcciones de correo electr&oacute;nico o cuenta de Facebook s&oacute;lo se utilizar&aacute;n para enviar notificaciones sobre el uso de la plataforma, avisos sobre futuras votaciones o consultas y otra informaci&oacute;n sobre el Presupuesto Participativo. No obstante, cada usuario podr&aacute; darse de baja en cualquier momento si as&iacute; lo desea.</span></p>
            <h4><span>Informaci&oacute;n obtenida a partir del uso de la plataforma:</span></h4>
            <p><span>Presupuesto Participativo puede recopilar informaci&oacute;n sobre la forma en que los usuarios usan la plataforma. Entre la informaci&oacute;n obtenida de esta forma, se incluye el tipo de navegador utilizado, la preferencias de lenguaje y, por ejemplo, los comentarios que ha realizado.</span></p>
            <p><span>Presupuesto Participativo podr&aacute; compartir informaci&oacute;n de manera agregada, y en car&aacute;cter no personal, con el p&uacute;blico en general (por ejemplo, mostrar tendencias sobre el uso del sitio).</span></p>
            <p><span>Presupuesto Participativo garantiza la debida protecci&oacute;n de los datos personales almacenados en esta plataforma web as&iacute; como tambi&eacute;n el acceso a la informaci&oacute;n registrada en el mismo, de conformidad a lo establecido en el art&iacute;culo 43, p&aacute;rrafo tercero de la Constituci&oacute;n Nacional y la Ley N&deg; 25.326 de Protecci&oacute;n de los Datos Personales.</span></p>
            <p><span></span></p>
          </div> 
        </Anchor>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
