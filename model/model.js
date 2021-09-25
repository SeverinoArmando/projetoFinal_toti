const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const prato = Schema({
  //Baseando-se na collection do Cliente(Restaurante)
  idCliente:{
    type:String,
    required:true
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
});

module.exports = mongoose.model("Prato", prato)