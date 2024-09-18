const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/desafios", require("./routes/desafios"));

prisma.$connect()
	.then(() => console.log("Conectado ao banco de dados"))
	.catch((e) => {
		console.error("Erro ao conectar ao banco de dados:", e);
		process.exit(1); // Encerra o processo se não conseguir conectar ao banco de dados
	});

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
