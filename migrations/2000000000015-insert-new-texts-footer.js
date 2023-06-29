const dbReady = require('lib/models').ready

const Text = require('lib/models').Text

const Forum = require("lib/models").Forum;


const textsData = [
	{ "name": "footer-info-text", "text": "<div><b>Subsecretaría de Participación Ciudadana</b></div><div>Secretaría de Gobierno y Legal y Técnica</div><div>D. de Acassuso 1750</div><div>CP1636, Olivos.</div><div>Tel: 4851-2000 opción 6</div><div>WhatsApp para consultas: +5491162426741</div><div>Mail: participacion.ciudadana@vicentelopez.gov.ar</div>" },

  { "name": "datos-icono1-imagen", "text": "https://i.ibb.co/8KBXSvh/tiempo.png" },
  { "name": "datos-icono1-titulo", "text": "9 años de" },
  { "name": "datos-icono1-text", "text": "Presupuesto Participativo" },

  { "name": "datos-icono2-imagen", "text": "https://i.ibb.co/FzmMGTd/dinero.png" },
  { "name": "datos-icono2-titulo", "text": "Total invertido" },
  { "name": "datos-icono2-text", "text": "$ 360  millones" },

  { "name": "datos-icono3-imagen", "text": "https://i.ibb.co/F6vwpzb/proyectos.png" },
  { "name": "datos-icono3-titulo", "text": "Más de 450" },
  { "name": "datos-icono3-text", "text": "proyectos  ejecutados" },

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
        Forum.findOne(
          { "topicsAttrs.name": "título" },
          (err, forumProyecto) => {
            if (err) reject(new Error(err));
            if (!forumProyecto || !forumProyecto.topicsAttrs)
              reject(
                new Error("No forum proyectos or no topicAttrs in it found")
              );
            
            // aumentar un valor de width del campo descripcion
            
            let fieldDescription = forumProyecto.topicsAttrs.find(
              (el) => el.name === "description"
            );

            
            fieldDescription.width = 12
            
            forumProyecto.markModified("topicsAttrs");

            Forum.collection.save(forumProyecto, (err) => {
              if (err) reject(new Error(err));
              resolve();
            });
          }
        );
        resolve()
      })
    })
    // Agregamos textos
    .then(() => Text.collection.insertMany(textsData))
    // Devolvemos al Migrator (de lib/migrations)
    .then(() => {
      console.log(`-- Agregados textos de portada`)
      done()
    })
    .catch((err) => {
      if (err instanceof SaltearPromises)
        done()
      else{
        console.log('-- Actualizacion de textos de portada no funcionó! Error: ', err)
        done(err)
      }
    })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
