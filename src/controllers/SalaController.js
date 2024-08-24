// exports.get = async() => {
    
//     const SalaModel = require('../models/SalaModel');

//     return await SalaModel.listarSalas();
// }


exports.get= async (req, res) => {
    return await salaModel.listarSalas();
  }
  

// exports = {}