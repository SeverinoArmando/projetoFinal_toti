const express = require("express");
const mongoose =require('mongoose');
const swaggerUi = require('swagger-ui-express');

const app =express();

app.use(express.json());

app.set('port',(process.env.PORT || 8081));

mongoose.connect('mongodb://localhost:27017/healthFood');

const bancoDados =mongoose.connection;

bancoDados.on('erro',console.error.bind(console,'Falha ao conectar-se: '));

bancoDados.once('connect',()=>{
    console.log('Conectado com sucesso!')


    app.listen(app.get('port'),()=>{
        console.log(`App rodando na url http:localhost:${app.get('port')}`)
    })
})





