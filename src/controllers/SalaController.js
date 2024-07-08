
//tava aqui a constante

// exports.get=async()=>{
//     return await salaModel.listarSalas();
// }

exports.get = async() => {
    // let salaModel = require('../models/SalaModel');
    
    const salaModel = require('../models/SalaModel');
//  s   minusculo e maiusculo

    return await salaModel.listarSalas();
}
