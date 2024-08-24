exports.get = async (req, res) => {

  const salaModel = require('../models/SalaModel');
    return await salaModel.listarSalas();
  }

  // 
  
  exports.entrar= async (iduser,idsala)=>{
    
    const salaModel = require('../models/SalaModel');
    const sala = await salaModel.buscarSala(idsala);


    let usuarioModel=require('../models/usuarioModel');
    let user= await usuarioModel.buscarUsuario(iduser);

    user.sala={_id:sala._id, nome:sala.nome, tipo:sala.tipo};

    if(await usuarioModel.alterarUsuario(user)){
      return {msg:"OK", timestamp:timestamp=Date.now()};
    }
    return false;
  }


  // 





exports = {};