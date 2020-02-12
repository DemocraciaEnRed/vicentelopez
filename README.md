# DemocracyOS Extension Example

This is an example demonstrating how to extend DemocracyOS using [Docker](https://www.docker.com/).

## Getting Started

1. Clone this repo
2. Make sure to have [Docker](https://www.docker.com/) installed on your machine.
3. Copy the file `docker-compose.override.yml.example` to `docker-compose.override.yml`, and set the email that you're going to signup with on STAFF. This way you will be able to setup DemocracyOS on the first run.
4. Run DemocracyOS with `docker-compose up --build` _(this could take a while)_
5. Go to [http://localhost:3000](http://localhost:3000)
6. Signup, setup your instance, and that's all :)

### Refs

* The file `docker-compose.override.yml` is added to the `.gitignore` so it's not uploaded to your Git repo to avoid disclosing any sensitive data or keys.
* If you want to know more about `docker-compose`, here's the docs: https://docs.docker.com/compose/
* The complete documentation on overriding the default docker-compose.yml can be found here: https://docs.docker.com/compose/extends/
* On your `docker-compose.override.yml` you can configure DemocracyOS using environment variables. All the available options are here: http://docs.democracyos.org/configuration.html
* The port `27017` is exposed so you can connect to mongo from your machine using any mongo client such as [Robomongo](https://robomongo.org/).
* If you already have a mongo 3.2 server running on your machine you can comment out the `mongo` service on `docker-compose.yml` and change the `MONGO_URL` environment variable
* All the customized views/endpoints are located on the `/ext` folder. Following the same folders pattern as DemocracyOS/democracyos.
* New frontend builds, which allows you to use your custom frontend code, are defined [here](https://github.com/DemocracyOS/extension-example/blob/master/ext/lib/build/entries.json).
* To use the last version of topics (with attributes such as state, year or town, run `NODE_PATH=. DEBUG=democracyos* node ./ext/bin/migrate-pp.js`)

## Commands

```
# Spin up your development server with:
docker-compose up
```

```
# If you change any dependency you have to re-build your Docker image with:
docker-compose up --build
```

```
# Enter to the running DemocracyOS container with:
docker exec -it dos bash
```

## Running on Production
Use as reference the repo [DemocracyOS/onpremises](https://github.com/DemocracyOS/onpremises). It uses Ansible for provisioning, and Docker Compose to run the server, there you will find more detailed documentation.

---

## Nueva versión
### Formulario de proyectos personalizado
El formulario de carga de proyectos/propuestas tiene campos personalizados (`lib/admin/admin-topics-form/attrs/component.js`) que se toman de la BBDD. Estos están en la tabla `forum`, en su único registro, en el campo `topicsAttrs`.

Para conectarnos a la consola:

```
// docker exec -it <nombre_container> mongo <nombre_base_de_datos>
// por ejemplo:
docker exec -it mongodb-vl mongo DemocracyOS-dev
```

Algunos comandos útiles de la consola de mongo para manipular estos campos son:
```
// ver todo el topicsAttrs
db.forums.find({},{'topicsAttrs': 1}).pretty()

// mostrar solo nombre y width
db.forums.find({},{'topicsAttrs.name': 1, 'topicsAttrs.width': 1}).pretty()

// actualizar un ícono fitrando por nombre
db.forums.update({'topicsAttrs.name': 'state'}, {$set:{ 'topicsAttrs.$.icon': 'stop.png' }})

// borrar las migrations para que vuelvan a correr
db.migrations.remove({"name" : "extend-forum-attrs"})
db.migrations.remove({"name" : "set-default-forum-attrs"})
```

Esto solo se deberá hacer para testear cosas. Para cambios finales siembre usar **migrations** así se guardan los cambios realizados para futuras réplicas del sistema.

