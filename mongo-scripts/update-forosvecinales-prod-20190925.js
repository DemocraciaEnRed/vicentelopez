

var db = connect('127.0.0.1:27017/forosvecinales-prod');
 
print('1/1   Updating forum');

db.getCollection("forums").updateOne({"_id": ObjectId("59a6c123c58c9f1c43ed6e83")},
    { $set: { 
        "topicsAttrs" : [
        {
            "name" : "anio", 
            "title" : "Año", 
            "mandatory" : false, 
            "kind" : "String", 
            "max" : 128.0, 
            "min" : 0.0
        }, 
        {
            "name" : "state", 
            "title" : "Estado", 
            "description" : "Agregar una descripción del estado del proyecto", 
            "mandatory" : true, 
            "kind" : "Enum", 
            "options" : [
                {
                    "name" : "pendiente", 
                    "title" : "Pendiente"
                }, 
                {
                    "name" : "factible", 
                    "title" : "Factible"
                }, 
                {
                    "name" : "no-factible", 
                    "title" : "No factible"
                }, 
                {
                    "name" : "integrado", 
                    "title" : "Integrado"
                }, 
                {
                    "name" : "no-ganador", 
                    "title" : "No ganador"
                }, 
                {
                    "name" : "preparacion", 
                    "title" : "En Preparación"
                }, 
                {
                    "name" : "compra", 
                    "title" : "En Proceso de Compra"
                }, 
                {
                    "name" : "ejecucion", 
                    "title" : "En Ejecución"
                }, 
                {
                    "name" : "finalizado", 
                    "title" : "Finalizado"
                }
            ]
        }, 
        {
            "name" : "project-budget-preparacion", 
            "title" : "En estado de preparación", 
            "description" : "Presupuesto estimado para estado de preparación", 
            "mandatory" : true, 
            "kind" : "String"
        }, 
        {
            "name" : "project-budget-compra", 
            "title" : "En estado de compra", 
            "description" : "Presupuesto asignado al estado de compra", 
            "mandatory" : true, 
            "kind" : "String"
        }, 
        {
            "name" : "project-budget-ejecucion", 
            "title" : "En estado de ejecución", 
            "description" : "Presupuesto asignado para el estado de ejecución", 
            "mandatory" : true, 
            "kind" : "String"
        }, 
        {
            "name" : "project-budget-finalizado", 
            "title" : "En estado finalizado", 
            "description" : "Presupuesto ejecutado en el estado finalizado", 
            "mandatory" : true, 
            "kind" : "String"
        }, 
        {
            "name" : "admin-comment", 
            "title" : "Comentario del Moderador", 
            "description" : "Escribir aquí un comentario en el caso que se cambie el estado a \"Factible\" o \"No factible\"", 
            "mandatory" : true, 
            "kind" : "LongString"
        }, 
        {
            "name" : "admin-comment-referencia", 
            "title" : "Link a proyecto", 
            "description" : "Colocar aquí el link al proyecto final, en el caso que esta propuesta esté integrada junto con otra", 
            "mandatory" : true, 
            "kind" : "String"
        }, 
        {
            "name" : "nombre", 
            "title" : "Nombre y Apellido", 
            "mandatory" : true, 
            "kind" : "String", 
            "max" : 128.0, 
            "min" : 0.0
        }, 
        {
            "name" : "domicilio", 
            "title" : "Domicilio", 
            "mandatory" : true, 
            "kind" : "String", 
            "max" : 200.0, 
            "min" : 0.0
        }, 
        {
            "name" : "documento", 
            "title" : "DNI", 
            "mandatory" : true, 
            "kind" : "String", 
            "max" : 50.0, 
            "min" : 0.0
        }, 
        {
            "name" : "telefono", 
            "title" : "Teléfono", 
            "mandatory" : true, 
            "kind" : "String", 
            "max" : 50.0, 
            "min" : 0.0
        }, 
        {
            "name" : "email", 
            "title" : "Email", 
            "mandatory" : true, 
            "kind" : "String", 
            "max" : 128.0, 
            "min" : 0.0
        }, 
        {
            "name" : "titulo", 
            "title" : "Titulo", 
            "mandatory" : true, 
            "kind" : "String", 
            "max" : 128.0, 
            "min" : 0.0
        }, 
        {
            "name" : "barrio", 
            "title" : "Barrio", 
            "mandatory" : true, 
            "kind" : "Enum", 
            "options" : [
                {
                    "name" : "villa-martelli", 
                    "title" : "Villa Martelli"
                }, 
                {
                    "name" : "villa-adelina", 
                    "title" : "Villa Adelina"
                }, 
                {
                    "name" : "vicente-lopez", 
                    "title" : "Vicente Lopez"
                }, 
                {
                    "name" : "olivos", 
                    "title" : "Olivos"
                }, 
                {
                    "name" : "munro", 
                    "title" : "Munro"
                }, 
                {
                    "name" : "la-lucila", 
                    "title" : "La Lucila"
                }, 
                {
                    "name" : "florida-oeste", 
                    "title" : "Florida Oeste"
                }, 
                {
                    "name" : "florida-este", 
                    "title" : "Florida Este"
                }, 
                {
                    "name" : "carapachay", 
                    "title" : "Carapachay"
                }
            ]
        }, 
        {
            "name" : "problema", 
            "title" : "Problema o necesidad existente", 
            "mandatory" : true, 
            "kind" : "LongString", 
            "max" : NumberInt(2000), 
            "min" : NumberInt(0)
        }, 
        {
            "name" : "solucion", 
            "title" : "Propuesta para solucionar el problema", 
            "mandatory" : true, 
            "kind" : "LongString", 
            "max" : NumberInt(2000), 
            "min" : NumberInt(0)
        }, 
        {
            "name" : "beneficios", 
            "title" : "Beneficios que brindará el proyecto al barrio", 
            "mandatory" : true, 
            "kind" : "LongString", 
            "max" : NumberInt(2000), 
            "min" : NumberInt(0)
        }, 
        {
            "name" : "description", 
            "title" : "Descripción", 
            "mandatory" : false, 
            "kind" : "LongString", 
            "max" : NumberInt(2000), 
            "min" : NumberInt(0)
        }, 
        {
            "name" : "votos", 
            "title" : "Votos", 
            "mandatory" : true, 
            "kind" : "Number", 
            "max" : NumberInt(999999999), 
            "min" : NumberInt(1)
        },
        {
            "name" : "subscribers", 
            "title" : "Suscriptores (No tocar)", 
            "mandatory" : false,
            "description": "NO TOCAR NI MODIFICAR SI NO SABE LO QUE HACE. Son IDs de los usuarios suscriptores." ,
            "kind" : "String",
        },
        {
            "name" : "lat", 
            "title" : "Latitud (Georeferencia)", 
            "mandatory" : false,
            "description": "Latitud del punto coordenada donde se ubica en el mapa. EJ: -34.633654" ,
            "kind" : "String",
        },
        {
            "name" : "long", 
            "title" : "Longitud (Georeferencia)", 
            "mandatory" : false,
            "description": "Latitud del punto coordenada donde se ubica en el mapa. EJ: -58.398971" ,
            "kind" : "String",
        },
        {
            "name" : "album", 
            "title" : "Album de imagenes, ingrese un link a una imagen -POR LINEA- (haga enter por cada imagen). Evite espacios innecesarios en lo posible", 
            "mandatory" : false, 
            "kind" : "LongString", 
            "max" : NumberInt(999999999), 
            "min" : NumberInt(0)
        },
      ]
    }
  }
)

print('* DONE');