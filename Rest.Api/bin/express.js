const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');


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

mongoose.set('useCreateIndex', true);

//Configuração das rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);

module.exports = app;