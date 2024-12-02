// const db = require("./db");
// async function registrarUsuario(nick) {
// return await db.insertOne("usuario",{"nick": nick});
// }


// let buscarUsuario = async (iduser)=>{
// 	let user = await db.findOne("usuario",iduser);
// 	return user;
// }

// let alterarUsuario = async (user)=>{
// 	return await db.updateOne("usuario", user,{_id:user._id});
// }


  
// module.exports = {registrarUsuario, buscarUsuario, alterarUsuario}


const db = require("./db");

async function registrarUsuario(nick) {
	console.log("Tentando registrar usuário com nick:", nick);
	try {
	  const result = await db.insertOne("usuario", {"nick": nick});
	  console.log("Resultado do registro:", result);
	  return result;
	} catch (error) {
	  console.error("Erro ao registrar usuário:", error);
	  throw error;
	}
  }


  async function buscarUsuario(iduser) {
	console.log("Tentando buscar usuário com id:", iduser);
	try {
	  const result = await db.findOne("usuario", iduser);
	  console.log("Resultado da busca:", result);
	  return result;
	} catch (error) {
	  console.error("Erro ao buscar usuário:", error);
	  throw error;
	}
  }

let alterarUsuario = async (user)=>{
	return await db.updateOne("usuario", user,{_id:user._id});
}


  
module.exports = {registrarUsuario, buscarUsuario, alterarUsuario}



