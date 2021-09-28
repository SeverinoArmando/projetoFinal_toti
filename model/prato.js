const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// nome_do_prato, igredientes, preço e foto
const prato = new Schema({
  //Baseando-se na collection do Cliente(Restaurante)
  usuario:{
    type:Schema.Types.ObjectId,
    ref:"Cadastro",
    required:true
  },

  nome_do_prato: { 
    type: String,
    required: true,
    index:{unique:true}
    },
  ingredientes: { 
    type: Array,
    required: true 
    },
  preco: {
    type: Number,
    required: true,
    min: 0
    },
    quantidade:{
      type:Number,
      default:1
    },
  url_foto: { 
    type: String,
    required: true,
    default:"Imagem em processamento" 
    },
    data:{type:Date, default:Date.now}
});

module.exports = mongoose.model("Prato", prato)