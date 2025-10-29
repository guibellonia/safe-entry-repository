import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  PageContainer,
  HeaderBar,
  TitleGroup,
  Title,
  Subtitle,
  BackButton,
  HeroImageWrapper,
  ContentStack,
  SectionCard,
  SectionRow,
  SectionTitle,
  Text,
  TechList,
  TechTag,
  LinkBar,
  techColors,
  TechDot,
  Container,
} from "./styles";
import {
  ChevronLeft,
  BrainCircuit,
  Notebook,
  KanbanSquare,
  Projector,
  Trophy,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getProjectContent(slug: string) {
  if (slug === "safe-entry") {
    return {
      tecnologias: [
        "React Native",
        "Expo",
        "C#",
        "Supabase",
        "MongoDB",
        "Azure",
      ],
      brainstorming: [
        "Identificamos que os métodos tradicionais de controle de acesso (registros manuais, autorizações verbais) são ineficientes, suscetíveis a falhas e fraudes.",
        "O problema central é a dificuldade na auditoria, falta de rastreabilidade em tempo real e a burocracia do processo.",
        "A questão norteadora foi: 'Como garantir um controle de entrada que seja rápido, seguro e fácil de gerenciar para moradores e porteiros?'",
        "A solução proposta foi o 'Safe Entry', um sistema SaaS que utiliza QR Codes para autorização de visitantes, permitindo um controle mais ágil e seguro.",
      ],
      planejamento: [
        "Objetivo Geral: Desenvolver um sistema SaaS para controle de acesso, permitindo que moradores autorizem visitantes via QR Codes com validade configurável e revogação instantânea.",
        "Objetivos Específicos: Implementar cadastro e autenticação, geração e validação de QR Codes, histórico de acessos para auditoria e uma interface intuitiva (web e mobile).",
        "A metodologia seguiu uma abordagem ágil (Scrum), com gerenciamento de tarefas no Trello.",
        "Definimos como local de validação o 'Condomínio Terra Nova', com participação de moradores e porteiros.",
      ],
      processo: [
        "Backend desenvolvido em C# e frontend em React Native com Expo. O projeto também utilizou NextJS e banco de dados Postgres.",
        "O design de interface foi criado no Figma, e o código-fonte versionado no GitHub.",
        "Utilizamos Azure Devops para o pipeline de CI/CD e metodologias ágeis (Scrum) para gerenciamento.",
        "O desenvolvimento focou em pilares teóricos: Segurança da Informação (criptografia, logs), Usabilidade (interfaces intuitivas) e Escalabilidade (modelo SaaS).",
      ],
      entrega:
        "O desenvolvimento resultou em uma solução funcional, intuitiva e segura, atendendo plenamente aos objetivos. Foram entregues todas as telas principais, incluindo Login, Home (com leitor QR e listagem de convites), Cadastro de Morador, Histórico de acessos para auditoria e o fluxo completo de criação e visualização de convites. A validação com usuários reais demonstrou a viabilidade e eficácia da proposta.",
      achievements: [
        "1º lugar na ExpoTech (categoria soluções para cidades)",
      ],
    } as const;
  }

  if (slug === "fazendata") {
    return {
      tecnologias: ["React Native", "Expo", "NestJS", "Supabase"],
      brainstorming: [
        "Identificamos uma carência de soluções eficientes e intuitivas para o registro e acompanhamento de gado. Muitos sistemas existentes não têm interface funcional ou persistência e confiabilidade de dados.",
        "O problema central é a falta de ferramentas práticas que integrem persistência de dados com sincronização, algo crucial em ambientes com conectividade limitada como fazendas.",
        "Embora a tecnologia NFC seja utilizada, as soluções existentes são 'pouco amigáveis'. Nosso foco foi preencher essa lacuna.",
        "Definimos o escopo da 'ficha digital': vacinas (aplicadas e futuras), peso, pais, raça, dieta e doenças recentes.",
      ],
      planejamento: [
        "Objetivo Geral: Desenvolver um app móvel com NFC para gerenciar informações de animais, garantindo persistência offline e sincronização automática.",
        "Objetivos Específicos: Implementar leitura/gravação NFC e criar mecanismo de sincronização automática.",
        "A gestão do projeto foi feita com Trello, organizando a divisão de tarefas. O design da interface foi criado e validado no Figma.",
        "Produto Esperado: Um aplicativo móvel capaz de operar e sincronizar com um banco de dados remoto.",
      ],
      processo: [
        "Backend construído com NestJS (API) e Supabase (BaaS, DB PostgreSQL), com deploy contínuo na Onrender.",
        "Frontend desenvolvido em React Native, utilizando Expo 51 para gerenciar o ciclo de vida do app e Styled-Components para a estilização.",
        "O fluxo iniciou com a prototipagem de alta fidelidade no Figma, seguida pela organização de sprints e tarefas no Trello.",
        "Implementamos a funcionalidade de leitura NFC para gravar e recuperar dados, garantindo a persistência mesmo offline.",
      ],
      entrega:
        "Entregamos um aplicativo móvel funcional que atendeu a todos os objetivos propostos. As telas desenvolvidas incluem Login, Home, visualização de Fazenda e o Modal de Leitor NFC. Como próximos passos, planejamos refatorar o código para otimizar a arquitetura e adicionar novas funcionalidades.",
      achievements: [
        "1º lugar na ExpoTech (categoria agritech)",
      ],
    } as const;
  }

  return {
    tecnologias: [],
    brainstorming: [],
    planejamento: [],
    processo: [],
    entrega: "",
    achievements: [],
  } as const;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await (params as Promise<{ slug: string }>);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const content = getProjectContent(slug);

  return (
    <PageContainer>
      <Container>
        <HeaderBar>
          <TitleGroup>
            <Title>{project.title}</Title>
            <Subtitle>{project.description}</Subtitle>
          </TitleGroup>
          <BackButton href="/#projetos">
            <ChevronLeft size={18} /> Voltar
          </BackButton>
        </HeaderBar>

        <HeroImageWrapper>
          <Image
            src={project.img.src}
            alt={project.img.alt ?? project.title}
            width={1440}
            height={720}
            style={{ width: "100%", height: "auto" }}
          />
        </HeroImageWrapper>

        <ContentStack>
          {content.tecnologias.length > 0 && (
            <SectionCard>
              <SectionTitle>Tecnologias escolhidas</SectionTitle>
              <TechList>
                {content.tecnologias.map((t) => (
                  <TechTag key={t} $type={t as keyof typeof techColors}>
                    <TechDot $type={t as keyof typeof techColors} />
                    {t}
                  </TechTag>
                ))}
              </TechList>
            </SectionCard>
          )}

          <SectionRow>
            <SectionCard>
              <SectionTitle>
                <BrainCircuit /> Brainstorming
              </SectionTitle>
              {content.brainstorming.map((p, i) => (
                <Text key={i}>{p}</Text>
              ))}
            </SectionCard>

            <SectionCard>
              <SectionTitle>
                <Notebook /> Planejamento
              </SectionTitle>
              {content.planejamento.map((p, i) => (
                <Text key={i}>{p}</Text>
              ))}
            </SectionCard>
          </SectionRow>

          <SectionRow>
            <SectionCard>
              <SectionTitle>
                <KanbanSquare /> Processo de Desenvolvimento
              </SectionTitle>
              {content.processo.map((p, i) => (
                <Text key={i}>{p}</Text>
              ))}
            </SectionCard>

            <SectionCard>
              <SectionTitle>
                <Projector /> Entrega
              </SectionTitle>
              <Text>{content.entrega}</Text>
            </SectionCard>
          </SectionRow>

          <SectionCard>
            <SectionTitle>
              <Trophy size={20} /> Achievements
            </SectionTitle>
            {content.achievements.map((a, i) => (
              <Text key={i}>{a}</Text>
            ))}
          </SectionCard>

          {(project.github || project.liveUrl) && (
            <LinkBar>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  Código no GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Ver ao vivo
                </a>
              )}
            </LinkBar>
          )}
        </ContentStack>
      </Container>
    </PageContainer>
  );
}
