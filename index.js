const { MongoClient } = require("mongodb")

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dataBase = 'e-com'

async function getData() {
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('products')
    let response = await collection.find({}).toArray()
    console.log(response)
}

getData()