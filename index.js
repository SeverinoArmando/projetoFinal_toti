const express = require('express');
const mongoose = require("mongoose")
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger_output.json')


const app = express();

//requerindo o model
const cardapio = require('./model/model')
const cliente = require('./model/cliente')


app.set('port', (process.env.PORT || 8081));

app.use(express.json());

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
require('./routes/routes')(app)

//requerindo as rotas
const routes = require('./routes/routes')
routes(app); 

mongoose.connect('mongodb://localhost/healthFood', { useNewUrlParser: true })


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Falha ao se conectar ao Banco de Dados: ' ));

db.once('open', function () {
    console.log('Conectado com sucesso ao Banco de Dados')

    app.listen(app.get('port'), function () {
        console.log(`App rodando na url http://localhost:${app.get('port')}`)
    })
})