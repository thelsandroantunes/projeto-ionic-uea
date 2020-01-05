const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://restadmin:rest123@cluster0-mho0h.mongodb.net/test'
    }
}

module.exports = variables;