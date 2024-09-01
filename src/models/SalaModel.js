const db = require("./db");

let listarSalas = async () => {
    // console.log(listarSalas);
    let salas = await db.findAll("salas");
    // console.log(salas);
    return salas;
};

let buscarSala = async (idsala)=>{
  // console.log(buscarSala);
    return db.findOne("salas",idsala);
  }

  let atualizarMensagens=async (sala)=>{
    return await db.updateOne("salas", sala,{_id:sala._id});
  }


// console.log(listarSalas);
// Aparece

module.exports = { listarSalas, buscarSala, atualizarMensagens };