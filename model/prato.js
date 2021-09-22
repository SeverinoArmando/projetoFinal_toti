const mongoose = require("mongoose");

const pratoSchema = mongoose.Schema({
	nomeDoPrato: { type: String },
	ingredientes: { type: Array },
	preco: { type: Number },
	urlFoto: { type: String },
});

module.exports = mongoose.model("Prato", pratoSchema);
