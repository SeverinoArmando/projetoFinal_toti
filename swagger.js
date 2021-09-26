const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/routes.js']



const doc = {
    info: {
        version: "1.0.0",
        title: "REST API healthFood",
        description: "API para gerenciar o app Healthfood"
    },
    host: "localhost:8081",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: "User",
            description: "Endpoints"
        }
    ],
    /*securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    }*/definitions: {
        Restaurante: {
            idRest: "Pizzaria Boa Vista",
            cnpj: "01.256.45/1000-78",
            url_img_logo: "qwertyu.jpg"
        },
        Prato: {
            idRest: "Pizzaria Boa Vista",
            nome_do_prato: "Pizza 4 queijos",
            ingredientes: ["queijo1", "queijo2", "queijo3", "queijo4"],
            preco: 35,
            url_foto: "qwertyuiop12.jpg"
        }
        /*InserirRestaurante: {
            $idRest: "Pizzaria Boa Vista",
            $CNPJ: "01.256.45/1000-78",
            $url_foto: "qwertyu.jpg",
        }*/
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
})