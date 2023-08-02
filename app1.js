// => Simple check DB connection 

const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://127.0.0.1:27017')

// Connect to database
client.connect().then(() => {
    console.log('Connected Successfully!')
    console.log('Exiting..')
    client.close()
}).catch(error => console.log('Failed to connect!', error))
