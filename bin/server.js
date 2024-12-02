// require("dotenv").config(); 
// const app = require("../src/api");

// app.use((req,res, next) => {
// next();
// });

// let port = process.env.PORT || 3000;

// app.listen(port);

// console.log("Iniciando na porta " + port);


require('dotenv').config();
const app = require('../src/api');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});