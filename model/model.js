const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// nome_do_prato, igredientes, preço e foto
var Prato = Schema({
  
  nome_do_prato: { type: String },
  ingredientes: { type: Array },
  preco: {type: Number},
  url_foto: { Type: String }
});

module.exports = mongoose.model("Prato", Prato)