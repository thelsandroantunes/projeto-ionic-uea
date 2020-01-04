'use strict'

const app = require('../Rest.Api/bin/express');
const variables = require('../Rest.Api/bin/configuration/variables');

app.listen(3000, () => {
    console.log(`API inicializada  com sucesso na porta ${variables.Api.port}`);
    
})