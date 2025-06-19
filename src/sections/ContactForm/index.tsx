"use client";
import { useState } from "react";
import {
  ContactContainer,
  ErrorWrapper,
  FormWrapper,
  InputWrapper,
  StyledErrorMessage,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "./styles";
import Button from "@/components/Button";
import { contactFormSchema, ContactFormType } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { theme } from "@/constants/theme";
import { StyledSubtitle, StyledTitle, TitleWrapper } from "../styles";
import { sendContactEmail } from "@/lib/actions/sendContactEmail";
import { useEmailStore } from "@/stores";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedField, setSelectedField] = useState<
    keyof ContactFormType | null
  >(null);
  const errorToast = () =>
    toast("Ocorreu um erro ao enviar o e-mail", {
      type: "error",
      theme: "light",
    });
  const successToast = () =>
    toast("E-mail enviado com sucesso", { type: "success", theme: "light" });

  const { setHasSend, hasSend } = useEmailStore();

  const [formData, setFormData] = useState<ContactFormType>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormType, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormType, string>> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof ContactFormType;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("Formulário válido! Enviar dados:", formData);
    setIsLoading(true);
    try {
      await sendContactEmail(formData);
      successToast();
      setHasSend(true);
    } catch (err) {
      errorToast();
      setHasSend(false);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactContainer id="contato">
      <TitleWrapper>
        <StyledTitle>Contate-nos</StyledTitle>
        <StyledSubtitle>
          Entre em contato conosco através do nosso e-mail!
        </StyledSubtitle>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <StyledLabel htmlFor="nome">Nome Completo</StyledLabel>
          <StyledInput
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            $error={!!errors.nome?.toString()}
            $isSelected={selectedField === "nome"}
            onFocus={() => setSelectedField("nome")}
            onBlur={() => setSelectedField(null)}
          />
          {errors.nome && (
            <ErrorWrapper>
              <Icon icon={"mdi:error-outline"} color={theme.colors.red} />
              <StyledErrorMessage>{errors.nome}</StyledErrorMessage>
            </ErrorWrapper>
          )}
        </InputWrapper>

        <InputWrapper>
          <StyledLabel htmlFor="email">E-mail</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            $error={!!errors.email?.toString()}
            $isSelected={selectedField === "email"}
            onFocus={() => setSelectedField("email")}
            onBlur={() => setSelectedField(null)}
          />
          {errors.email && (
            <ErrorWrapper>
              <Icon icon={"mdi:error-outline"} color={theme.colors.red} />
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            </ErrorWrapper>
          )}
        </InputWrapper>

        <InputWrapper>
          <StyledLabel htmlFor="mensagem">Mensagem</StyledLabel>
          <StyledTextArea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Digite sua mensagem"
            $error={!!errors.mensagem?.toString()}
            $isSelected={selectedField === "mensagem"}
            onFocus={() => setSelectedField("mensagem")}
            onBlur={() => setSelectedField(null)}
          />
          {errors.mensagem && (
            <ErrorWrapper>
              <Icon icon={"mdi:error-outline"} color={theme.colors.red} />
              <StyledErrorMessage>{errors.mensagem}</StyledErrorMessage>
            </ErrorWrapper>
          )}
        </InputWrapper>

        <Button
          color="secondary"
          text="Enviar Mensagem"
          type="submit"
          disabled={hasSend ? hasSend : false}
          isLoading={isLoading}
        />
      </FormWrapper>
    </ContactContainer>
  );
}
