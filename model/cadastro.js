const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// nome_do_prato, igredientes, preço e foto
const cadastro = new Schema({

  nome_da_empresa: { 
    type: String,
    required: true,
    index:{unique:true}
    },
  cnpj: { 
    type: String,
    required: true 
    },
  endereco: {
    type: String,
    required: true,
    },
  email:{
      type:String
    },
  data:{type: Date, default:Date.now}
});

module.exports = mongoose.model("Cadastro", cadastro)