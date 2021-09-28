const mongoose = require('mongoose');

const restaurante = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  url_img_logo: {
    type: String,
    required: true 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Restaurante', restaurante)