import type { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "A senha deve ter no mínimo 6 caracteres" });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(409).json({ error: "Este email já está cadastrado" });
  }

  const hashedPassword = await hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
}
