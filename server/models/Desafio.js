const mongoose = require("mongoose");

const DesafioSchema = new mongoose.Schema({
	titulo: String,
	descricao: String,
	dificuldade: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Dificuldade",
	},
	tema: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Tema",
	},
	dica: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Dica",
	},
	imagem: {
		type: String,
		default: null,
	},
	resposta: String,
});

module.exports = mongoose.model("Desafio", DesafioSchema);
