const { connect } = require('mongoose')
const { promisify } = require('util')

const connectPromisify = promisify(connect)

const prodURI = `mongodb+srv://${ process.env.DB_USERNAME }:${ process.env.DB_PSSWD }@${ process.env.DB_HOST }/${ process.env.DB_NAME }`
const devURI = `mongodb://${ process.env.DB_HOST }:${ String(process.env.DB_PORT) }/${ process.env.DB_NAME }`

try {
    const uri = process.env.NODE_ENV !== 'production' ? devURI : prodURI
    connectPromisify(uri, { 
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
} catch (error) {
    console.error('Database connection error:', error)
}
