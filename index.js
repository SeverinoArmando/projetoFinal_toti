const express = require('express');
const mongoose = require("mongoose");

const app = express();

app.set('port', (process.env.PORT || 8081));
app.use(express.json());

//requerindo as rotas
const routes = require('./routes/routes');
routes(app);

mongoose.connect('mongodb://localhost/healthFood', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Falha ao se conectar ao Banco de Dados: ' ));

db.once('open', function () {
    console.log('Conectado o com sucesso ao Banco de Dados');

    app.listen(app.get('port'), function () {
        console.log(`App rodando na url http://localhost:${app.get('port')}`);
    });
});