const mongoose = require('mongoose');

//const Schema = mongoose.Schema;
const cliente = new mongoose.Schema({

  idCliente:{
    type:String,
    required:true
  },
  
  CNPJ:{
    type:String,
    required:true
  },

  url_foto: { 
    type: String,
    required: true 
    }
});

module.exports = mongoose.model('Cliente', cliente)