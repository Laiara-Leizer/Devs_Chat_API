const { MongoClient, ObjectId } = require("mongodb");
const { listarSalas } = require("./SalaModel");

let singleton;

async function connect() {
 
if (singleton) return singleton;
// console.log(process.env.DB_HOST);


const client = new MongoClient(process.env.DB_HOST);
await client.connect();
// console.log(process.env.DB);
singleton = client.db(process.env.DB);
return singleton;
}


let findAll = async (collection)=>{

    const db = await connect();
   
    return await db.collection(collection).find().toArray();

  }





async function insertOne(collection, objeto){
    const db = await connect();
    console.log(insertOne);


    return db.collection(collection).insertOne(objeto);
}

module.exports = {findAll, insertOne}



//pega o token do header a  
// jwt(id,key,time)
//key é o nick do usuario