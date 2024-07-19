const { MongoClient, ObjectId } = require("mongodb");

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
    // console.log(collection);
    const db = await connect();

    const resp =await db.collection(collection).find().toArray();

    // console.log(resp);

    return resp;
}

// const db = require("./db");

module.exports = {findAll}





//pega o token do header a 

 
// jwt(id,key,time)

//key é o nick do usuario


