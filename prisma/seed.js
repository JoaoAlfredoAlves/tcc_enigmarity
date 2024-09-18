const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	// Busca todos os desafios existentes no banco de dados
	const existingDesafios = await prisma.desafio.findMany();

	// Se não houver desafios, não fazemos nada
	if (existingDesafios.length === 0) {
		console.log("Nenhum desafio encontrado no banco de dados.");
		return;
	}

	// Atualiza o seed.js com os desafios existentes
	console.log("Desafios existentes no banco de dados:");
	existingDesafios.forEach((desafio, index) => {
		console.log(`Desafio ${index + 1}:`);
		console.log(JSON.stringify(desafio, null, 2));
	});

	console.log("Seed.js atualizado com os desafios existentes.");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
