const mongoose = require('mongoose');

//const Schema = mongoose.Schema;
const restaurante = new mongoose.Schema({

  idRest:{
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

module.exports = mongoose.model('Restaurante', restaurante)