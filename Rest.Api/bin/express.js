const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');
const pedidoRouter = require('../routes/pedido-router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

//Configurando a conexão com MongoDB

mongoose.connect(variables.Database.connection, { 
    useUnifiedTopology: true ,
    useNewUrlParser: true 
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(`MongoDB connection error: ${err}`));;

mongoose.set('useCreateIndex', true);


//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/pedido', pedidoRouter);


//Exportando nossa Api
module.exports = app;


// Api -> MIDDLEWARES -> Rotas -> Controller -> Repository -> Banco