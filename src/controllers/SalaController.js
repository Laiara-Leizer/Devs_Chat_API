
// exports.get = async() => {
    

//     return await SalaModel.listarSalas();
// }


exports.get = async (req, res) => {

  const salaModel = require('../models/SalaModel');


  // console.log(salaModel);
  // console.log(salaModel.listarSalas);


    return await salaModel.listarSalas();

    
  }
  
  
exports = {};