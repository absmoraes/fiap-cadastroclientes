const mongoose = require("mongoose");


const SchemaUsers = new mongoose.Schema({
  nomecliente: { type: String, required: true, unique: true },
  cpf: { type: String, required: true },
  idade: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  status: { type: String, required: true },
  datacriacao: { type: Date, default: Date.now },
});

module.exports = mongoose.model("cliente", SchemaUsers);

