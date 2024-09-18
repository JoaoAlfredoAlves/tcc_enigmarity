const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Rota para obter todos os desafios
router.get("/", async (req, res) => {
	try {
		const desafios = await prisma.desafio.findMany();
		console.log("Desafios encontrados:", desafios); // Adicione esta linha
		res.json(desafios);
	} catch (err) {
		console.error("Erro ao buscar desafios:", err); // Adicione esta linha
		res.status(500).json({ message: err.message });
	}
});

// Rota para obter um desafio específico
router.get("/:id", async (req, res) => {
	try {
		const desafios = await prisma.desafio.findMany();
		const desafioId = parseInt(req.params.id);
		if (desafioId < desafios.length) {
			res.json(desafios[desafioId]);
		} else {
			res.status(404).json({ message: "Desafio não encontrado" });
		}
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
