const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://restadmin:rest123@cluster0-mho0h.mongodb.net/restdb'
    },
    Security: {
        secretykey: '1fff620ac2147415d67916d297db7b99|9dcecdfcb95428b54715174f5cc6a649'
    }
}

module.exports = variables;