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
    console.log("Iniciando processo de entrada para nick:", nick);
    if (!nick) {
      throw new Error("Nick não fornecido");
    }
    
    try {
      let resp = await usuarioModel.registrarUsuario(nick);
      console.log("Resposta do usuarioModel:", resp);
      if (resp.insertedId) {
        const tokenGerado = await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ""), nick);
        console.log("Token gerado:", tokenGerado);
        return {
          "iduser": resp.insertedId,
          "token": tokenGerado,
          "nick": nick
        }
      } else {
        throw new Error("Falha ao registrar usuário");
      }
    } catch (error) {
      console.error("Erro no usuarioController:", error);
      throw error;
    }
  }

