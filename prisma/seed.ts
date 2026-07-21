import { PrismaClient } from "../src/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { hash } from "bcryptjs";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = "admin@frozadvogados.com.br";
  const password = "Admin@2026";

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    console.log(`Usuário ${email} já existe, pulando.`);
    return;
  }

  const hashedPassword = await hash(password, 12);

  await prisma.user.create({
    data: {
      name: "Administrador",
      email,
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log(`Usuário admin criado com sucesso:`);
  console.log(`  Email: ${email}`);
  console.log(`  Senha: ${password}`);
}

main()
  .catch((e) => {
    console.error("Erro ao criar usuário admin:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
