const dbReady = require('lib/models').ready

const Forum = require('lib/models').Forum

/*const newFields = [
	{ "name": "order"},
	{ "name": "group", "defaultValue": 'Atributos' },
	{ "name": "groupOrder", "defaultValue": 0 },
	{ "name": "width", "defaultValue": 12 },
	{ "name": "icon" }
]*/
const groups = [
	{ name: '', order: 0},
	{ name: 'Presupuestos', order: 1},
	{ name: 'Datos de titular', order: 2},
	{ name: 'Información de propuesta', order: 3}
]
// group: X equivale al indice en el array anterior (p.ej. 2=Datos de titular)
const attrsData = [
	{name: 'anio', order: 0, group: 0, icon: ''},
	{name: 'barrio', order: 1, group: 0, icon: ''},
	{name: 'state', order: 2, group: 0, icon: ''},
	{name: 'admin-comment-referencia', order: 3, group: 0, icon: ''},
	{name: 'admin-comment', order: 4, group: 0, icon: ''},

	{name: 'project-budget-preparacion', order: 10, group: 1, icon: ''},
	{name: 'project-budget-compra', order: 11, group: 1, icon: ''},
	{name: 'project-budget-ejecucion', order: 12, group: 1, icon: ''},
	{name: 'project-budget-finalizado', order: 13, group: 1, icon: ''},

	{name: 'nombre', order: 20, group: 2, icon: ''},
	{name: 'documento', order: 21, group: 2, icon: ''},
	{name: 'telefono', order: 22, group: 2, icon: ''},
	{name: 'email', order: 23, group: 2, icon: ''},
	{name: 'domicilio', order: 24, group: 2, icon: ''},

	{name: 'titulo', order: 30, group: 3, icon: ''},
	{name: 'problema', order: 31, group: 3, icon: ''},
	{name: 'solucion', order: 32, group: 3, icon: ''},
	{name: 'beneficios', order: 33, group: 3, icon: ''},
	{name: 'description', order: 34, group: 3, icon: ''},
	{name: 'votos', order: 35, group: 3, icon: ''},
]
const attrsDataKeyd = {}
attrsData.forEach(attr => attrsDataKeyd[attr.name] = attr)
//console.log(attrsDataKeyd)

const deepCopy = obj => {
	return JSON.parse(JSON.stringify(obj))
}

/**
 * Make any changes you need to make to the database here
 */
class SaltearPromises { }
exports.up = function up (done) {
  dbReady()
    .then(() => {
      return new Promise((resolve, reject) => {
	      Forum.findOne({name: 'proyectos'}, (err, forumProyecto) => {
	        if (err) reject(new Error(err))
					if (!forumProyecto || !forumProyecto.topicsAttrs) reject(new Error('No forum proyectos or no topicAttrs in it found'))

					forumProyecto.topicsAttrs.forEach((topicAttr, i) => {
							let newAttrData = attrsDataKeyd[topicAttr.name]
							if (!newAttrData) return

							let updTopicAttr = deepCopy(topicAttr)
							let newGroup = groups[newAttrData.group]
							updTopicAttr.order = newAttrData.order
							updTopicAttr.icon = newAttrData.icon
							updTopicAttr.group = newGroup.name
							updTopicAttr.groupOrder = newGroup.order

							//console.log(updTopicAttr)
							forumProyecto.topicsAttrs[i] = updTopicAttr
					})

					forumProyecto.markModified('topicsAttrs')

					Forum.collection.save(forumProyecto, (err) => {
						if (err) reject(new Error(err))
						resolve()
					})
	      })
			})
		})
    // Devolvemos al Migrator (de lib/migrations)
    .then(() => {
      console.log(`-- Actualizados valores de extended forum topic attrs`)
      done()
    })
    .catch((err) => {
      if (err instanceof SaltearPromises)
        done()
      else{
        console.log('-- Actualizacion de valores de extended forum topic attrs no funcionó! Error: ', err)
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
