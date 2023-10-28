const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

client.connect()
        .then(async () => {
            console.log('conectado')
        })
        .catch(err => console.log(`Error al intentar conectar: ${err}`))