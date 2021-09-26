const mongoose = require('mongoose');

//const Schema = mongoose.Schema;
const restaurante = new mongoose.Schema({

  idRest:{
    type:String,
    required:true
  },
  
  cnpj:{
    type:String,
    required:true
  },

  url_img_logo: { 
    type: String,
    required: true 
    }
});

module.exports = mongoose.model('Restaurante', restaurante)