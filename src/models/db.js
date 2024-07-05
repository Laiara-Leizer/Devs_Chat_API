const { MongoClient, ObjectId } = require("mongodb");


let singleton;

async function connect() {
if (singleton) return singleton;

const client = new MongoClient(process.env.DB_HOST);
await client.connect();

singleton = client.db(process.env.DB_DATABASE);
return singleton;
}

let findAll = async (collection)=>{
    const db = await connect();
    return await db.collection(collection).find().toArray();
}







const db = require("./db");

let listarSalas = async ()=>{
let salas= await db.findAll("salas");
return salas;
};

module.exports = {findAll}