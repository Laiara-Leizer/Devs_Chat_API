const db = require("./db");

async function registrarUsuario(nick) {
    return await db.insertOne("usuario",{"nick": nick});
  }





//ULTIMA MODIFICACAO ANTES DO HELPE


let buscarUsuario = async (idUser)=>{
    let user = await db.findOne("usuario",idUser);
    console.log(buscarUsuario);
    return user;
  }
  
let alterarUsuario = async (user)=>{
  console.log(alterarUsuario);
    return await db.updateOne("usuarios", user, {_id: user._id});
    
  };

 
  

module.exports = {registrarUsuario, buscarUsuario, alterarUsuario}