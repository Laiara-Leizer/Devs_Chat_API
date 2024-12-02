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

// await async

const salaController = require("./controllers/SalaController.js");
const token = require("./util/token.js");
const { listarSalas } = require("./models/SalaModel.js");

    app.use("/salas",router.get("/salas", async (req, res,next) => {
      if(await token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) {
        let resp = await salaController.get();
        res.status(200).send(resp);
      }else{
        res.status(400).send({msg:"Usuário não autorizado"});
      }

    }));
    
    
  //   app.use("/entrar",router.post("/entrar", async(req, res, next) => {
  //     const usuarioController = require("./controllers/usuarioController");   
  //     let resp= await usuarioController.entrar(req.body.nick);
  //     res.status(200).send(resp);
  // }));

  app.post("/entrar", async(req, res) => {
    const usuarioController = require("./controllers/usuarioController");   
    try {
      let resp = await usuarioController.entrar(req.body.nick);
      res.status(200).json(resp);
    } catch (error) {
      console.error("Erro ao entrar:", error);
      res.status(500).json({ error: "Erro interno do servidor" 
      });
    }
  });






  app.use('/sala/entrar', router.put('/sala/entrar', async (req, res)=>{
    if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
    let resp= await salaController.entrar(req.headers.iduser, req.query.idsala);
    res.status(200).send(resp);
  }))


  app.use("/sala/mensagem/", router.post("/sala/mensagem", async (req, res) => {
    if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
    let resp = await salaController.enviarMensagem(req.headers.nick, req.body.msg,req.body.idsala);
    res.status(200).send(resp);
  }));
  

  app.use("/sala/mensagens/", router.get("/sala/mensagens", async (req, res) => {
    if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
    let resp= await salaController.buscarMensagens(req.query.idsala, req.query.timestamp);
    res.status(200).send(resp);
  }));
  //aqui
  

    module.exports = app;



    // console.log(listarSalas);
    // console.log(token);
    // console.log(salaController);












// const express = require("express");
// var app = express();
// app.use(express.urlencoded({extended : true}));
// app.use(express.json());

// const router = express.Router();

// app.use('/', router.get('/', (req, res)=>{
//     res.status(200).send("<h1>API - CHAT</h1>")
// }))

// //module export: exporta o objeto que quero usar em outro lugar

// app.use("/",router.get("/",(req,res, next) => {
//     res.status(200).send("<h1>API - CHAT</h1>");
//     }));
    
//     app.use("/",router.get("/sobre", (req, res, next) => {
//     res.status(200) .send({
//     "nome": "API - CHAT",
//     "versão": "1.0.0",
//     "autor": "Laiara Leizer"
//     })
// }));

// // await async

// const salaController = require("./controllers/SalaController.js");
// const token = require("./util/token.js");
// const { listarSalas } = require("./models/SalaModel.js");

//     app.use("/salas",router.get("/salas", async (req, res,next) => {
//       if(await token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) {
//         let resp = await salaController.get();
//         res.status(200).send(resp);
//       }else{
//         res.status(400).send({msg:"Usuário não autorizado"});
//       }

//     }));
    
    
//     app.use("/entrar",router.post("/entrar", async(req, res, next) => {
//       const usuarioController = require("./controllers/usuarioController");   
//       let resp= await usuarioController.entrar(req.body.nick);
//       res.status(200).send(resp);
//   }));

//   app.use('/sala/entrar', router.put('/sala/entrar', async (req, res)=>{
//     if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
//     let resp= await salaController.entrar(req.headers.iduser, req.query.idsala);
//     res.status(200).send(resp);
//   }))


//   app.use("/sala/mensagem/", router.post("/sala/mensagem", async (req, res) => {
//     if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
//     let resp = await salaController.enviarMensagem(req.headers.nick, req.body.msg,req.body.idsala);
//     res.status(200).send(resp);
//   }));
  

//   app.use("/sala/mensagens/", router.get("/sala/mensagens", async (req, res) => {
//     if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
//     let resp= await salaController.buscarMensagens(req.query.idsala, req.query.timestamp);
//     res.status(200).send(resp);
//   }));
//   //aqui
  

//     module.exports = app;



//     // console.log(listarSalas);
//     // console.log(token);
//     // console.log(salaController);