const dbReady = require("lib/models").ready;

const Forum = require("lib/models").Forum;

const attrsToChange = [
  { name: "título", keyToChange: "description", newValue: "" },
  { name: "description", keyToChange: "order", newValue: 0 },
  { name: "description", keyToChange: "description", newValue: "Este campo será visible en las tarjetas de los proyectos de pre votación y proyectos ganadores" },
  { name: "description", keyToChange: "group", newValue: "" },
  { name: "album", keyToChange: 'description', newValue: 'Ingrese un link de imagen por renglón (Dando ENTER entre cada uno). Evite espacios innecesarios. Las imágenes deben ser en formato .png o .jpg'},
  { name: "album", keyToChange: 'title', newValue: 'Álbum de imágenes'}

];

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
            
            // aumentar un valor al orden de los campos del grupo principal
            
            let fieldDescription = forumProyecto.topicsAttrs.filter(
              (el) => el.group === ""
            );

            fieldDescription.map((el) => {
              el.order = el.order + 1;
              return el;
            });

            // cambiando valores de los attrs que de encuentran almacenados en la constante attrsToChange

            attrsToChange.forEach((attr) => {
              let fieldToChange = forumProyecto.topicsAttrs.find(
                (el) => el.name === attr.name
              );
              fieldToChange[attr.keyToChange] = attr.newValue;
            });

            forumProyecto.markModified("topicsAttrs");

            //guardando cambios

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
      console.log(`-- cambiando datos en attrs de topics`);
      done();
    })
    .catch((err) => {
      if (err instanceof SaltearPromises) done();
      else {
        console.log(
          "-- Actualizacion nuevos campos en forum topic attrs no funcionó! Error: ",
          err
        );
        done(err);
      }
    });
};

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
exports.down = function down(done) {
  done();
};
