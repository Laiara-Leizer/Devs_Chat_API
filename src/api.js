const express = requere("express");
var app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();


app.use('/', router.get('/', (req, res)=>{
    res.status(200).send("<h1>API - CHAT</h1>")
}))

module.exports=app;


//module export: exporta o objeto que quero usar em outro lugar




require("dotenv").config(); 
const app = require("../src/api");

app.use((req,res, next) => {
next();
});
                     //API_PORT
let port = process.env.API_PORT || 5000; //mudar pra minha

app.listen(port);

console.log("Iniciando na porta " + port);


