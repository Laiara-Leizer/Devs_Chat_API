require("dotenv").config(); 
const app = require("../src/api");

app.use((req,res, next) => {
next();
});
                     //API_PORT
let port = process.env.PORT || 5000; //mudar pra minha

app.listen(port);

console.log("Iniciando na porta " + port);

