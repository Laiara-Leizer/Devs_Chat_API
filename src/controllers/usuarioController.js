// const token = require("../util/token");
// const usuarioModel = require('../models/usuarioModel');

// exports.entrar=async(nick)=>{
//     let resp = await usuarioModel.registrarUsuario(nick);
//     if(resp.insertedId){
//         return {
//         "iduser":resp.insertedId,
//         "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ""),nick),
//         //""
//         "nick":nick
//         }
//     }    
// }































//PRINCIPAL
// const token = require("../util/token");
// const usuarioModel = require('../models/usuarioModel');

// exports.entrar=async(nick)=>{
//     let resp = await usuarioModel.registrarUsuario(nick);
//     if(resp.insertedId){
//         return {
//         "iduser":resp.insertedId,
//         "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ""),nick),
//         //""
//         "nick":nick
//         }
//     }    
    
// }




const token = require("../util/token");
const usuarioModel = require('../models/usuarioModel');

exports.entrar = async (nick) => {
  if (!nick) {
    throw new Error("Nick não fornecido");
  }
  
  let resp = await usuarioModel.registrarUsuario(nick);
  if (resp.insertedId) {
    return {
      "iduser": resp.insertedId,
      "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ""), nick),
      "nick": nick
    }
  } else {
    throw new Error("Falha ao registrar usuário");
  }
}

