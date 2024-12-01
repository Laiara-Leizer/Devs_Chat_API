// SalaController.js

exports.get = async (req, res) => {
  const salaModel = require('../models/SalaModel');
  return await salaModel.listarSalas();
};

exports.entrar = async (iduser, idsala) => {
  const salaModel = require("../models/SalaModel");
  const sala = await salaModel.buscarSala(idsala);
  const usuarioModel = require("../models/usuarioModel");
  const user = await usuarioModel.buscarUsuario(iduser);

  if (!user) {
    console.error("Usuário não encontrado.");
    return false;
  }

  // Verifique se a sala foi encontrada
  if (!sala) {
    console.error("Sala não encontrada.");
    return false;
  }

  // Se a sala foi encontrada, atribua os dados à propriedade 'sala' do usuário
  user.sala = { _id: sala._id, nome: sala.nome, tipo: sala.tipo };

  if (await usuarioModel.alterarUsuario(user)) {
    return { msg: "OK", timestamp: Date.now() };
  } else {
    console.error("Erro ao atualizar o usuário.");
    return false;
  }
};

exports.enviarMensagem = async (nick, msg, idsala) => {
  const salaModel = require('../models/SalaModel');
  const sala = await salaModel.buscarSala(idsala);

  if (!sala) {
    console.error("Sala não encontrada.");
    return { msg: "Erro: Sala não encontrada." };
  }

  // Se a sala não tiver mensagens, inicializa com um array vazio
  if (!sala.msgs) {
    sala.msgs = [];
  }

  const timestamp = Date.now();
  // Adiciona a nova mensagem
  sala.msgs.push({
    timestamp: timestamp,
    msg: msg,
    nick: nick
  });

  // Atualiza as mensagens da sala no banco de dados
  let resp = await salaModel.atualizarMensagens(sala);
  return { msg: "OK", timestamp: timestamp };
};

exports.buscarMensagens = async (idsala, timestamp) => {
  const salaModel = require('../models/SalaModel');
  let sala = await salaModel.buscarSala(idsala);

  if (!sala) {
    console.error(`Sala com ID ${idsala} não encontrada.`);
    return [];
  }

  if (sala.msgs && sala.msgs.length > 0) {
    console.log(`Mensagens encontradas na sala ${idsala}.`);

    // Filtra as mensagens com timestamp maior ou igual ao fornecido
    let msgs = sala.msgs.filter(msg => msg.timestamp >= timestamp);

    return {
      timestamp: msgs.length > 0 ? msgs[msgs.length - 1].timestamp : timestamp,
      msgs: msgs
    };
  } else {
    console.log(`Nenhuma mensagem encontrada na sala ${idsala}.`);
    return { timestamp: timestamp, msgs: [] };
  }
};
