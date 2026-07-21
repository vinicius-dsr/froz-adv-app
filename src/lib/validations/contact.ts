import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email inválido"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(val),
      "Formato de telefone inválido"
    ),
  message: z
    .string()
    .min(1, "Mensagem é obrigatória")
    .min(10, "Mensagem deve ter no mínimo 10 caracteres"),
});

export type ContactInput = z.infer<typeof contactSchema>;
