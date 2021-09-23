const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// nome_do_prato, igredientes, preço e foto
const prato = Schema({
  nome_do_prato: { 
    type: String,
    required: true
    },
  ingredientes: { 
    type: Array,
    required: true 
    },
  preco: {
    type: Number,
    required: true
    },
  url_foto: { 
    type: String,
    required: true 
    }
});

module.exports = mongoose.model("Prato", prato)