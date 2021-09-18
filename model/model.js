const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// nome_do_prato, igredientes, preço e foto
var Cardapio = new Schema({
  
  nome_do_prato: { type: String },
  ingredientes: { type: Array },
  preco: {type: Number},
  url_foto: { Type: String }
});

module.exports = mongoose.model("Cardapio", Cardapio)