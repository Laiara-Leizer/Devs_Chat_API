const db = require("./db");

let listarSalas = async () => {
    return await db.findAll("salas");
};

let buscarSala = async (idsala) => {
    const sala = await db.findOne("salas", idsala);
    if (!sala) {
        console.error(`Sala com ID ${idsala} não encontrada.`);
        return null;
    }
    return sala;
};

let atualizarMensagens = async (sala) => {
    return await db.updateOne("salas", sala, { _id: sala._id });
};

let buscarMensagens = async (idsala, timestamp) => {
    let sala = await buscarSala(idsala);
    if (!sala) {
        console.error("Sala não encontrada.");
        return [];
    }

    if (sala.msgs) {
        return sala.msgs.filter((msg) => msg.timestamp >= timestamp);
    }
    return [];
};

module.exports = { listarSalas, buscarSala, atualizarMensagens, buscarMensagens };
