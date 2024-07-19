exports.get = async() => {
    
    const SalaModel = require('../models/SalaModel');

    return await SalaModel.listarSalas();
}

// exports = {}