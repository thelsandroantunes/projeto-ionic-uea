const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://admin:<rest#123>@cluster0-04viw.mongodb.net/test?retryWrites=true&w=majority'
    }
}

module.exports = variables;