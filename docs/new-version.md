# New version

## Para crear variables de entorno nuevas
Se deben crear primeramente en `config/defaults.json` con un valor por defecto. Si se quiere que sea accesible desde el frontend, agregarla al array de la llave `"client"`.

Para probar valores distintos en desarrollo local editar `config/development.json`.

Una vez registrada la variable nueva en `defaults.json` ya es configurable en el docker-compose/swarm, utilizando la forma traducida __variablesDeEntorno__ a __VARIABLE_DE_ENTORNO__.

### Formulario de proyectos personalizado
El formulario de carga de proyectos/propuestas tiene campos personalizados (`lib/admin/admin-topics-form/attrs/component.js`) que se toman de la BBDD. Estos están en la tabla `forum`, en su único registro, en el campo `topicsAttrs`. El modelo de este campo está definido en `lib/models/forum/topics-attrs.js`. Si desean agregar un campo a `topicsAttrs` primero hacerlo allí.

Para conectarnos a la consola de mongo:

```
// docker exec -it <nombre_container> mongo <nombre_base_de_datos>
// por ejemplo:
docker exec -it mongodb-vl mongo DemocracyOS-dev
```

Algunos comandos útiles de la consola de mongo para manipular estos campos son:
```
// ver todo el topicsAttrs
db.forums.find({},{'topicsAttrs': 1}).pretty()

// mostrar solo los campos nombre y width de topicsAttrs
db.forums.find({},{'topicsAttrs.name': 1, 'topicsAttrs.width': 1}).pretty()

// actualizar un ícono fitrando por nombre
db.forums.update({'topicsAttrs.name': 'state'}, {$set:{ 'topicsAttrs.$.icon': 'stop.png' }})

// borrar por nombre un elemento de topicsAttrs
db.forums.update({}, { $pull:{ 'topicsAttrs': {name: 'beneficiario'} } })

// borrar las migrations para que vuelvan a correr
db.migrations.remove({"name" : "extend-forum-attrs"})
db.migrations.remove({"name" : "set-default-forum-attrs"})
```

Este tipo de modificaciones solo se debe hacer para testear cosas.

Para cambios finales siembre usar **migrations** así se guardan los cambios realizados para futuras réplicas del sistema.
