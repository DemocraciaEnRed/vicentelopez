const dbReady = require("lib/models").ready;

const Forum = require("lib/models").Forum;


/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises {}
exports.up = function up(done) {
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

            let fieldDescription = forumProyecto.topicsAttrs.find(
              (el) => el.name === "título"
            );
            fieldDescription.description =
              "Copiar aqui el titulo original del vecino - No es visible";

            forumProyecto.markModified("topicsAttrs");

            Forum.collection.save(forumProyecto, (err) => {
              if (err) reject(new Error(err));
              resolve();
            });
          }
        );
      });
    })
    // Devolvemos al Migrator (de lib/migrations)
     .then(() => {
      console.log(`-- Actualizados nuevos campos en forum topic attrs`)
      done()
    })
    .catch((err) => {
      if (err instanceof SaltearPromises)
        done()
      else{
        console.log('-- Actualizacion nuevos campos en forum topic attrs no funcionó! Error: ', err)
        done(err)
      }
    });
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
