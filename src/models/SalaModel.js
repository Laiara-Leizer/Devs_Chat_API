function listarSalas() {
    return [
    {
    "_id": {
    "$oid": "643ece43ea11e6e5b0421f10"

    },
    "nome" : "Guerreiros da InfoCimol",
    "tipo" : "publica"
    
},{
    "_id": {
    "$oid": "643ecec1ea11e6e5b0421f12"
    
    },
    "nome": "So os confirmados da INFO",
    "tipo": "privada",
    "chave": "at8q4haw"
    
},{
    "_id": {
    "$oid": "643f22a2ea11e6e5b0421f18"
    },

    "nome": "Guerreiros da INFO",
    "tipo": "publico"

      }
    ];
}


exports.get=()=>{
    let salaModel = require(' .. /models/salaModel');
    return salaModel.listarSalas();
}



module.exports = {listarSalas}