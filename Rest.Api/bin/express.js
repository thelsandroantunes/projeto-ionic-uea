const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//Criando  a API/Server Web do Express
const app = express(variables.Database.connection);

//Configuração parser do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Configurando a conexão com MongoDB

mongoose.connect(variables.Database.connection, { 
    useUnifiedTopology: true ,
    useNewUrlParser: true 
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(`MongoDB connection error: ${err}`));;


//Configuração das rotas
app.use('/API/categoria', categoriaRouter);
app.use('/API/produto', produtoRouter);

module.exports = app;