const express = require("express");
var app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();

app.use('/', router.get('/', (req, res)=>{
    res.status(200).send("<h1>API - CHAT</h1>")
}))

module.exports=app;


//module export: exporta o objeto que quero usar em outro lugar

app.use("/",router.get("/",(req,res, next) => {
    res.status(200).send("<h1>API - CHAT</h1>");
    }));
    
    app.use("/",router.get("/sobre", (req, res, next) => {
    res.status(200) .send({
    "nome": "API - CHAT",
    "versão": "1.0.0",
    "autor": "Laiara Leizer"
    })
}));
    

// await async
    
    app.use("/",router.get("/salas", async (req, res, next) => {
    const SalaController = require("./controllers/SalaController");

    // const salaController = require("../controllers/salaController");
    //S de novo mds (falar com o prof)
    let resp = await SalaController.get();
    res.status(200).send(resp);
    
    }));


    module.exports=app;