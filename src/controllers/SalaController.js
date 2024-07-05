exports.get=async(req,res)=>{

    return {"status": "OK", "controller":"Sala"};
}

const salaModel = require(' .. /models/salaModel');

exports.get=async()=>{
return await salaModel.listarSalas();
}