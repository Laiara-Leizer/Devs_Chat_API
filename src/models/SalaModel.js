const db = require("./db");

let listarSalas = async ()=>{
let salas = await db.findAll("salas");
// console.log(salas);
return salas;

};

module.exports = {listarSalas}