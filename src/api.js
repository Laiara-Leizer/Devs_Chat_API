const express = require("express");
var app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();

app.use('/', router.get('/', (req, res)=>{
    res.status(200).send("<h1>API - CHAT</h1>")
}))




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
    

    app.use("/entrar",router.post("/entrar", async(req, res, next) => {
        const usuarioController = require("./controllers/usuarioController");
        let resp= await usuarioController.entrar(req.body.nick);
        res.status(200).send(resp);

    }));
// await async

const salaController = require("./controllers/SalaController");
const token = require("./util/token.js");


    app.use("/salas",router.get("/salas", async (req, res,next) => {

      

        if(await token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) {
        let resp= await salaController.get();
        res.status(200).send(resp);
      }else{
        res.status(400).send({msg:"Usuário não autorizado"});
      }

    }));

    

 

    module.exports=app;