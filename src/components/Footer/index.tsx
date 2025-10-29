"use client";
import Image from "next/image";
import {
  FooterContainer,
  FooterInner,
  Brand,
  Moto,
  Links,
  StyledLink,
  Socials,
  SocialIcon,
  StyledText,
  Column,
  StyledLinksWrapper,
  SocialGroup,
  Person,
  StyledSocialLink,
} from "./styles";
import { Link, Mail, Speech } from "lucide-react";

export default function Footer() {
  const groups = [
    {
      name: "Guilherme Bellonia",
      instagram: "https://www.instagram.com/belloniagui/",
      linkedin: "https://www.linkedin.com/in/guilherme-bellonia-2b27a7268/",
    },
    {
      name: "Thiago Silva",
      instagram: "https://www.instagram.com/taigakilla/",
      linkedin: "https://www.linkedin.com/in/thiago1287/",
    },
    {
      name: "João Pedro",
      instagram: "https://www.instagram.com/joaopedrosmbraga/",
      linkedin: "https://www.linkedin.com/in/joaopedrosmbraga/",
    },
    {
      name: "Maurício Hansen",
      instagram: "https://www.instagram.com/hansen_simoes/",
      linkedin: "https://www.linkedin.com/in/hansen-simoes/",
    },
  ];

  return (
    <FooterContainer>
      <FooterInner>
        <Brand>
          <Image
            src="/images/logo-typed.svg"
            alt="FourCoding"
            width={64}
            height={64}
          />
          <Moto>
            Construindo soluções de hoje, ao infinito e além — Junte-se a nós e
            tenha seu negócio nas estrelas!
          </Moto>
        </Brand>

        <Links>
          <Column>
            <StyledText>
              <Link size={18} />
              Acesso Rápido
            </StyledText>
            <StyledLinksWrapper>
              <StyledLink
                href="https://fourcoding.com"
                rel="noreferrer"
              >
                Início
              </StyledLink>
              <StyledLink
                href="https://fourcoding.com/projects/safe-entry"
                rel="noreferrer"
              >
                Safe Entry
              </StyledLink>
              <StyledLink
                href="https://fourcoding.com/projects/fazendata"
                rel="noreferrer"
              >
                Fazendata
              </StyledLink>
            </StyledLinksWrapper>
          </Column>
          <Column>
            <StyledText>
              <Mail size={18} />
              Contato
            </StyledText>
            <StyledLinksWrapper>
              <StyledLink href="mailto:four4coding@gmail.com">
                four4coding@gmail.com
              </StyledLink>
            </StyledLinksWrapper>
          </Column>
          <Column>
          <StyledText>
              <Speech size={18} />
              Socials
            </StyledText>
            <StyledLinksWrapper>
              {groups.map((g) => (
                <SocialGroup key={g.name}>
                  <Person>{g.name}</Person>
                  <Socials>
                    <StyledSocialLink href={g.instagram} target="_blank" rel="noreferrer" aria-label={`${g.name} instagram`}>
                      <SocialIcon icon="mdi-instagram" fontSize={24} />
                    </StyledSocialLink>
                    <StyledSocialLink href={g.linkedin} target="_blank" rel="noreferrer" aria-label={`${g.name} linkedin`}>
                      <SocialIcon icon="mdi-linkedin" fontSize={24} />
                    </StyledSocialLink>
                  </Socials>
                </SocialGroup>
              ))}
            </StyledLinksWrapper>
          </Column>
        </Links>
      </FooterInner>
    </FooterContainer>
  );
}
