// const db = require("./db");

// let listarSalas = async () => {
//     // console.log(listarSalas);
//     let salas = await db.findAll("salas");
//     // console.log(salas);
//     return salas;
// };

// let buscarSala = async (idsala)=>{
//   // console.log(buscarSala);
//     return db.findOne("salas",idsala);
//   }

//   let atualizarMensagens=async (sala)=>{
//     return await db.updateOne("salas", sala,{_id:sala._id});
//   }

//   let buscarMensagens = async (idsala, timestamp)=>{
//     let sala = await buscarSala(idsala);

//     if(!sala){
//       console.error("sala nao encontrada.");
//     }
    
//     if(sala.msgs){
//       let msgs=[];
//       sala.msgs.forEach((msg)=>{
//         if(msg.timestamp >= timestamp){
//           msgs.push(msg);
//         }
//       });
//       return msgs;
//     }
//     return [];
// }

// //aqui

// // console.log(listarSalas);
// // Aparece

// module.exports = { listarSalas, buscarSala, atualizarMensagens, buscarMensagens };

// const db = require("./db");

// const listarSalas = async () => {
//   const salas = await findAll('salas');
//   return salas;
// };






// let listarSalas = async () => {
//     // console.log(listarSalas);
//     let salas = await db.findAll("salas");
//     // console.log(salas);
//     return salas;
// };






























// const { findOne } = require('../util/db');

// Importando a função findAll corretamente
const { findAll, findOne, updateOne } = require("./db");

const listarSalas = async () => {
  // Agora a função findAll está sendo chamada corretamente
  const salas = await findAll('salas');
  return salas;
};

let buscarSala = async (idsala) => {
  return findOne("salas", idsala);
};

let atualizarMensagens = async (sala) => {
  return await updateOne("salas", sala, { _id: sala._id });
};

let buscarMensagens = async (idsala, timestamp) => {
  let sala = await buscarSala(idsala);

  if (!sala) {
    console.error("Sala não encontrada.");
  }

  if (sala.msgs) {
    let msgs = [];
    sala.msgs.forEach((msg) => {
      if (msg.timestamp >= timestamp) {
        msgs.push(msg);
      }
    });
    return msgs;
  }
  return [];
};

module.exports = { listarSalas, buscarSala, atualizarMensagens, buscarMensagens };
