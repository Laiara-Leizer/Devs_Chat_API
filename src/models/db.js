//pega o token do header a  
// jwt(id,key,time)
//key é o nick do usuario

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
    // console.log(findAll);
    return await db.collection(collection).find().toArray();
  }

async function insertOne(collection, objeto){
    const db = await connect();
    // console.log(insertOne);
    return db.collection(collection).insertOne(objeto);
}




let findOne = async (collection, _id)=>{
    const db = await connect();
    let obj = await db.collection(collection).find({'_id':new ObjectId(_id)}).toArray();
    console.log(obj);
    if(obj)
      return obj[0];
    return false;
  }





  
  
  let updateOne= async (collection, object, param)=>{
    const db = await connect();
    
    let result= await db.collection(collection).updateOne(param, { $set: object} );
    console.log(result);
    return result;
  }
  



module.exports = {findAll, insertOne, findOne, updateOne}