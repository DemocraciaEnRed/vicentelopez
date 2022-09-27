const dbReady = require('lib/models').ready

const aboutUs = require('../lib/models').aboutUs

const aboutUsData = [
{ 'order': 0, 'question': '¿qué es el presupuesto participativo de vicente lópez?', 'answer': '<p><span>El Presupuesto Participativo de Vicente López (PPVL) es un espacio de participación a través del cual los habitantes de Vicente López proponen y deciden en qué invertir una parte del presupuesto municipal. Todos los años, y desde hace 10 años, se asigna y comunica una partida por barrio para la ejecución de estos proyectos.</span></p>' },
{ 'order': 1, 'question': '¿cómo se distribuye el dinero por barrio?', 'answer': '<p>La partida asignada al Programa se distribuye según dos criterios: aproximadamente el 50% por partes iguales a cada uno de los 9 barrios. Y el resto, según la cantidad de habitantes de cada barrio. Así, los barrios con más población, reciben más partida presupuestaria.</p><p>Para el 2023, el presupuesto participativo será de $290.000.000 y se distribuye así:&nbsp;</p><ul><li><strong>OLIVOS</strong>: $38.002.148</li><li><strong>MUNRO</strong>: $38.002.148</li><li><strong>FLORIDA ESTE</strong>: $38.002.148</li><li><strong>VILLA MARTELLI</strong>: $31.965.330</li><li><strong>VICENTE LÓPEZ</strong>: $31.965.330</li><li><strong>FLORIDA OESTE</strong>: $31.965.330</li><li><strong>CARAPACHAY</strong>: $26.669.188</li><li><strong>LA LUCILA</strong>: $26.669.188</li><li><strong>VILLA ADELINA</strong>: $26.669.188</li></ul><p><br></p>' },
{ 'order': 2, 'question': '¿quién puede presentar propuestas?', 'answer': '<p><span>Cualquier persona mayor de 16 años que viva o trabaje en cualquiera de los 9 barrios de Vicente López. También pueden presentar propuestas las instituciones de bien público registradas en el Partido y las instituciones educativas de gestión estatal de la Provincia de Buenos Aires con sede en el Partido de Vicente López.</span></p>' },
{ 'order': 3, 'question': '¿cuántos proyectos puede presentar una entidad?', 'answer': '<p><span>entidades que desarrollen sus actividades en más de un barrio del Partido, podrán presentar hasta un máximo de 2 proyectos en 2 barrios (es decir, 1 por cada barrio).</span></p>' },
{ 'order': 4, 'question': '¿cómo se elaboran los proyectos?', 'answer': '<p><span>En una serie de reuniones informativas, los vecinos y los representantes de las entidades se encuentran con funcionarios municipales para presentarles propuestas para cada barrio. Las propuestas siempre deben cargarse en esta plataforma, utilizando el formulario de presentación de propuestas.</span></p>' },
{ 'order': 5, 'question': '¿qué tipo de proyectos puedo presentar?', 'answer': '<p>Podés presentar:</p><p><br></p><ol><li>Propuestas de obras o equipamiento para: espacios públicos, escuelas de gestión pública, centros de salud municipales, polideportivos, sociedades de fomento, centros de jubilados, sociedades de fomento, clubes, entre otros. La condición es que sean entidades sin fines de lucro.</li><li>También propuestas de campaSñas o talleres sobre un determinado tema. En ese caso, se limitarán exclusivamente al año de ejecución que le corresponda a esa propuesta, en caso de que los vecinos la elijan.</li><li>Las propuestas no pueden involucrar gastos en recursos humanos que incrementen la planta de empleados municipales.</li><li>Tenés que acotarla a un barrio (localidad) en concreto. No puede ser una propuesta para todo el Municipio.</li><li>El presupuesto máximo de la propuesta no puede superar un monto determinado (para los proyectos a ejecutar en 2022 será de $5.000.000).</li><li>La propuesta no puede referirse a un espacio que no esté en jurisdicción del Municipio de Vicente López, a excepción de las escuelas públicas de gestión provincial.</li></ol>' },
{ 'order': 6, 'question': '¿cómo se decide qué proyectos van a votación?', 'answer': '<p><span>Para que una propuesta pueda convertirse en un proyecto votable, luego del trabajo conjunto con funcionarios, se pasa a una etapa de verificación legal, técnica y presupuestaria. En esta instancia se termina de definir la factibilidad del proyecto y los costos estimados del mismo.</span></p>' },
{ 'order': 7, 'question': '¿quién puede votar los proyectos?', 'answer': '<p>Cualquier mayor de 16 años que viva o trabaje en Vicente López puede votar los proyectos. Para ello, tenés que acreditar domicilio particular o laboral en el Partido de Vicente López.</p><p>En el caso de los proyectos de escuelas públicas de gestión provincial o municipal, también pueden votar los alumnos mayores de 16 años y un mayor de 16 años por cada alumno menor de 16 años inscriptos en la escuela respectiva, que no tenga domicilio en el Partido de Vicente López. Estas personas solo podrán elegir el proyecto de la escuela y deberán estar registradas en un padrón especial que debe confeccionar la escuela y enviar a la Subsecretaría de Participación Ciudadana oportunamente.</p><p>En el caso de proyectos presentados por entidades intermedias, sus directivos, asociados e inscriptos en talleres brindados por las mismas que no tengan domicilio en el Partido de Vicente López también podrán votar pero solo podrán elegir el proyecto de la entidad y deberán estar registrados en un padrón especial que debe confeccionar la entidad y enviar a la Subsecretaría de Participación Ciudadana oportunamente.</p>' },
{ 'order': 8, 'question': '¿por qué pueden participar con propuestas las escuelas públicas de gestión provincial en el presupuesto participativo?', 'answer': '<p><span ">Si bien las escuelas públicas de gestión provincial que funcionan en Vicente López dependen presupuestariamente de la Provincia de Buenos Aires, desde el año 2014 y dado el estado de las mismas, el Departamento Ejecutivo Municipal permite que dichas escuelas presenten propuestas al Presupuesto Participativo. Para ello, se estableció un monto límite por barrio ($5.000.000) y se plantearon 2 requisitos: Para presentar la propuesta, la escuela debe contar con la aprobación del Consejo Escolar y, de resultar un proyecto factible, debe ganarse el derecho a ser realizado en igualdad de condiciones que el resto de los proyectos, es decir, a través del voto directo de las personas habilitadas para votar.</span></p>' },
{ 'order': 9, 'question': '¿cuándo y cómo se vota en 2022?', 'answer': '<p>La votación de proyectos para ejecutar en 2023 se realizará únicamente a través de la modalidad online durante 31 (treinta y un) días consecutivos a partir del&nbsp;sábado 1 de octubre de 2022 a las 00 hs hasta el lunes 31 de octubre de 2022 a las 23.59 hs. Por razones de fuerza mayor la Subsecretaría podrá modificar el periodo de votación, en cuyo caso lo comunicará en la plataforma web&nbsp;<a href="https://presupuestoparticipativo.vicentelopez.gob.ar/" target="_blank">aqui</a>.</p><p>Las personas podrán emitir su voto a través de un dispositivo electrónico personal (computadora, tablet, teléfono celular con acceso a internet), en dispositivos instalados en las Delegaciones Municipales o en puntos móviles de votación en la vía pública.</p>' },
{ 'order': 10, 'question': '¿cómo se definen los proyectos ganadores?', 'answer': '<p><span ">Los proyectos ganadores de cada barrio, surgen de tu voto y el de tus vecinos. Los proyectos más votados, que no superen el monto asignado a cada barrio, serán realizados durante el año siguiente a la votación. Puede ocurrir que por orden de prioridad de votos, un proyecto supere por presupuesto el monto total establecido para el barrio; en ese caso, se pasará al proyecto que siga en cantidad de votos hasta agotar el monto asignado al barrio.</span></p>' },
{ 'order': 11, 'question': '¿qué hago si tengo una pregunta que no se ha respondido aquí?', 'answer': '<p><span ">Consultá el reglamento del PPVL para 2022-2023 haciendo&nbsp;</span><a href="https://celeste.blob.core.windows.net/pp-vicentelopez/assets/reglamento-pp-vicente-lopez-2022.pdf" target="_blank" style="color: rgb(61, 105, 158);">click acá</a><span ">, envianos un WhatsApp al +5491162426741 o envianos un mail a&nbsp;</span><a href="mailto:participacion.ciudadana@vicentelopez.gov.ar" target="_blank" style="color: rgb(61, 105, 158);">participacion.ciudadana@vicentelopez.gov.ar</a><span ">&nbsp;y te responderemos a la brevedad.</span></p>' },
{ 'order': 12, 'question': '¿dónde encuentro los términos y condiciones de la plataforma?', 'answer': '<p><span ">Los términos y condiciones los podés encontrar haciendo&nbsp;</span><a href="https://presupuestoparticipativo.vicentelopez.gob.ar/s/terminos-y-condiciones" target="_blank" style="background-color: rgb(245, 245, 245); color: rgb(61, 105, 158);">click acá</a><span ">.</span></p>' }
]

/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises { }
exports.up = function up (done) {
  dbReady()
    // Primero chequear si ya no hay cosas cargadas
    .then(() => {
      return new Promise((resolve, reject) => {
        aboutUs.collection.count({}, (err, count) => {
          if (err) reject(new Error(err))
          if (count) {
            console.log('Ya hay (%s) preguntas y respuestas cargadas', count)
            reject(new SaltearPromises())
          }
          resolve()
        })
      })
    })
    // Agregamos preguntas y respuestas
    .then(() => aboutUs.collection.insertMany(aboutUsData))
    // Devolvemos al Migrator (de lib/migrations)
    .then(() => {
      console.log(`-- Agregadas las preguntas y respuestas de la seccion "acerca de"`)
      done()
    })
    .catch((err) => {
      if (err instanceof SaltearPromises) {
        done()
      } else {
        console.log('-- Actualizacion de acerca de no funcionó! Error: ', err)
        done(err)
      }
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done()
}
