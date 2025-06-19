import { z } from "zod";

export const contactFormSchema = z.object({
  nome: z.string().min(1, "O nome não pode ser vazio!").min(3, "O nome precisa ter pelo menos 3 caracteres!"),
  email: z.string().min(1, "O email não pode ser vazio!").email("E-mail inválido"),
  mensagem: z.string().min(1, "A mensagem não pode ser vazia!").min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;