const express = require("express");
const bcrypt = require("bcrypt");
const Cliente = require("../model/cliente");
const criar_token = require("../utils/criartoken");
const verificar_token = require("../middleware/verificartoken");

const route = express.Router();

route.get("/", (req, res) => {
  Cliente.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao processar dados -> ${erro}` });
    res.status(200).send({ output: "ok", payload: dados });
  });
});


route.post("/cadastro", verificar_token, (req, res) => {
  const dados = new Cliente(req.body);
  dados
  .save()
      .then((result) => {
        res.status(201).send({ output: "Cadastro realizado", payload: result });
      })
      .catch((erro) =>
        res.status(500).send({ output: `Erro ao cadastrar -> ${erro}` })
      );
  
});

route.post("/listarclientes/", verificar_token, (req, res) => {
  
  Cliente.find({ new: true }, (erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao processar a atualização-> ${erro}` });
    if (!dados)
      return res
        .status(400)
        .send({ output: `Não foi possível atualizar -> ${erro}` });
    return res.status(202).send({ output: "Atualizado", payload: dados });
    
  });

});



route.put("/atualizardados/:id", verificar_token, (req, res) => {
  
  Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true }, (erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao processar a atualização-> ${erro}` });
    if (!dados)
      return res
        .status(400)
        .send({ output: `Não foi possível atualizar -> ${erro}` });
    return res.status(202).send({ output: "Atualizado", payload: dados });
    
  });

});

module.exports = route;
