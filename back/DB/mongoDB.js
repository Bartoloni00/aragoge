import { MongoClient} from "mongodb"
import 'dotenv/config'

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)

client.connect()
        .then(async () => {
            console.log('conectado')
        })
        .catch(err => console.log(`Error al intentar conectar: ${err}`))