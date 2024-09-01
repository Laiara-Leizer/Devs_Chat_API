exports.get = async (req, res) => {

  const salaModel = require('../models/SalaModel');
    return await salaModel.listarSalas();
  }




  exports.entrar = async (iduser, idsala) => {
    const salaModel = require('../models/SalaModel');
    const sala = await salaModel.buscarSala(idsala);
    const usuarioModel = require('../models/usuarioModel');
    const user = await usuarioModel.buscarUsuario(iduser);

    if (!user) {
        console.error("Usuário não encontrado.");
        return false;
    }

    // Inicialize a propriedade sala no objeto user
    user.sala = { _id: sala._id, nome: sala.nome, tipo: sala.tipo };

    if (await usuarioModel.alterarUsuario(user)) {
        return { msg: "OK", timestamp: Date.now() };
    } else {
        console.error("Erro ao atualizar o usuário.");
        return false;
    }
};

exports = {};