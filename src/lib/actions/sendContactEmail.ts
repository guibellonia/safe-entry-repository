"use server";
import { resend } from "@/lib/resend";

interface SendContactEmailParams {
  nome: string;
  email: string;
  mensagem: string;
}

export async function sendContactEmail({
  nome,
  email,
  mensagem,
}: SendContactEmailParams) {
  try {
    const response = await resend.emails.send({
      from: `accounts@fourcoding.com`,
      to: ["four4coding@gmail.com", "accounts@fourcoding.com"],
      subject: `Novo contato de ${nome}`,
      html: `
        <div style="font-family: 'DM Sans', 'Figtree', Arial, sans-serif; max-width: 600px; margin: auto; background-color: #1F1F1F; color: #FEFEFE; border-radius: 10px; padding: 20px; border: 1px solid #333;">
          <h2 style="color: #F9F9F9; text-align: left; margin-bottom: 20px;">📧 Novo Contato Recebido</h2>

          <p style="font-size: 16px; color: #E5E5E5;"><strong>Nome:</strong> ${nome}</p>
          <p style="font-size: 16px; color: #E5E5E5;"><strong>Email:</strong> ${email}</p>

          <p style="font-size: 16px; color: #E5E5E5; margin-top: 20px;"><strong>Mensagem:</strong></p>
          <div style="font-size: 15px; color: #F9F9F9; background-color: #333; padding: 15px; border-radius: 6px; border: 1px solid #444;">
            ${mensagem}
          </div>

          <p style="font-size: 12px; color: #AAAAAA; text-align: center; margin-top: 30px;">
            Este e-mail foi gerado automaticamente através do formulário de contato do site <strong>fourcoding.com</strong>
          </p>
        </div>
      `,
    });

    const userResponse = await resend.emails.send({
      from: `accounts@fourcoding.com`,
      to: [email],
      subject: `Recebemos seu contato!`,
      html: `
          <div style="font-family: 'DM Sans', 'Figtree', Arial, sans-serif; max-width: 600px; margin: auto; background-color: #1F1F1F; color: #FEFEFE; border-radius: 10px; padding: 20px; border: 1px solid #333; box-sizing: border-box;">
            <h2 style="color: #F9F9F9; text-align: left; margin-bottom: 20px;">✔️ Contato recebido com sucesso!</h2>

          <p style="font-size: 16px; color: #E5E5E5;">Olá ${nome},</p>

          <p style="font-size: 15px; color: #E5E5E5;">
            Recebemos sua mensagem e em breve nossa equipe entrará em contato com você.
          </p>

          <p style="font-size: 15px; color: #E5E5E5;">Aqui está uma cópia da sua mensagem:</p>

          <div style="font-size: 15px; color: #F9F9F9; background-color: #333; padding: 15px; border-radius: 6px; border: 1px solid #444;">
            ${mensagem}
          </div>

          <p style="font-size: 14px; color: #AAAAAA; margin-top: 20px;">
            Enquanto isso, se precisar falar com a gente, é só responder este e-mail.
          </p>
          
          <div style="width: 100%; margin: 32px 0 32px 0;">
              <a href="https://www.fourcoding.com" target="_blank" style="text-decoration: none; background-color: #2F2F2F; padding: 0.5rem 0rem; border-radius: 8px; border: 1px solid #4F4F4F; text-align: center;">
                  <button style="width: 100%; background: none; border: none; outline: none; cursor: pointer; color: #F9F9F9">
                  Nosso Site
                  </button>
              </a>
          </div>

          <div style="text-align: center;">
            <p style="font-size: 15px; color: #E5E5E5;">Atenciosamente, Equipe FourCoding</p>
          </div>
        </div>
      `,
    });

    return { success: true, data: response, user: userResponse };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false, error };
  }
}
