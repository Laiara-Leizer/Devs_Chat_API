// exports.get = async (req, res) => {

//   const salaModel = require('../models/SalaModel');
//     return await salaModel.listarSalas();
//   }

//   exports.entrar = async (iduser, idsala) => {
//     const salaModel = require("../models/SalaModel");
//     const sala = await salaModel.buscarSala(idsala);
//     const usuarioModel = require("../models/usuarioModel");
//     const user = await usuarioModel.buscarUsuario(iduser);

//     if (!user) {
//       console.error("Usuário não encontrado.");
//       return false;
//     }
//     user.sala = { _id: sala._id, nome: sala.nome, tipo: sala.tipo };

//     if (await usuarioModel.alterarUsuario(user)) {
//       return { msg: "OK", timestamp: Date.now() };
//     } else {
//       console.error("Erro ao atualizar o usuário.");
//       return false;
//     }
//   };

// exports.enviarMensagem= async (nick, msg, idsala)=>{
//   const salaModel = require('../models/SalaModel');
// 	const sala = await salaModel.buscarSala(idsala);
//   console.log(msg);

//   if (!sala) {
//     console.error("Sala não encontrada.");
//     return { msg: "Erro: Sala não encontrada." };
// }
// 		if(!sala.msgs){
// 		sala.msgs=[""];
// 	}
// 	timestamp=Date.now()
// 	sala.msgs.push(
// 		{
// 			timestamp:timestamp,
// 			msg:msg,
// 			nick:nick
// 		}
// 	)
// 	let resp = await salaModel.atualizarMensagens(sala);
// 	return {"msg":"OK", "timestamp":timestamp};
// }

// exports.buscarMensagens = async (idsala, timestamp)=>{
//   const salaModel = require('../models/SalaModel');
//   let mensagens=await salaModel.buscarMensagens(idsala, timestamp);
//   return {
//     "timestamp":mensagens[mensagens.length - 1].timestamp,
//     "msgs":mensagens
//   };
// }  
// exports = {};


exports.get = async (req, res) => {

  const salaModel = require('../models/SalaModel');
    return await salaModel.listarSalas();
  }

  exports.entrar = async (iduser, idsala) => {
    const salaModel = require("../models/SalaModel");
    const sala = await salaModel.buscarSala(idsala);
    const usuarioModel = require("../models/usuarioModel");
    const user = await usuarioModel.buscarUsuario(iduser);

    if (!user) {
      console.error("Usuário não encontrado.");
      return false;
    }
    user.sala = { _id: sala._id, nome: sala.nome, tipo: sala.tipo };

    if (await usuarioModel.alterarUsuario(user)) {
      return { msg: "OK", timestamp: Date.now() };
    } else {
      console.error("Erro ao atualizar o usuário.");
      return false;
    }
  };

exports.enviarMensagem= async (nick, msg, idsala)=>{
  const salaModel = require('../models/SalaModel');
	const sala = await salaModel.buscarSala(idsala);
  console.log(msg);

  if (!sala) {
    console.error("Sala não encontrada.");
    return { msg: "Erro: Sala não encontrada." };
}
		if(!sala.msgs){
		sala.msgs=[""];
	}
	timestamp=Date.now()
	sala.msgs.push(
		{
			timestamp:timestamp,
			msg:msg,
			nick:nick
		}
	)
	let resp = await salaModel.atualizarMensagens(sala);
	return {"msg":"OK", "timestamp":timestamp};
}

exports.buscarMensagens = async (idsala, timestamp)=>{
  const salaModel = require('../models/SalaModel');
  let mensagens=await salaModel.buscarMensagens(idsala, timestamp);
  return {
    "timestamp":mensagens[mensagens.length - 1].timestamp,
    "msgs":mensagens
  };
}  
exports = {};