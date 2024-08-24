const db = require("./db");

let listarSalas = async () => {
  console.log(listarSalas);
    let salas = await db.findAll("salas");
    return salas;
};



let buscarSala = async (idsala)=>{
  console.log(buscarSala);
    return db.findOne("salas",idsala);
  }


// console.log(listarSalas);
// Aparece


module.exports = { listarSalas, buscarSala };