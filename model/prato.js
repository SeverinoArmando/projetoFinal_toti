const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const prato = Schema({
  idRestaurante: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurante',
    required: true
  },
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
}, {
  timestamps: true
});

module.exports = mongoose.model("Prato", prato)