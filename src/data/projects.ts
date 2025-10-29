export type Project = {
  slug: string;
  title: string;
  description: string;
  img: { src: string; alt?: string };
  iconName?: string; // opcional
  tech?: string[]; // opcional: lista de tecnologias
  github?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "safe-entry",
    title: "Safe Entry",
    description:
      "Projeto desenvolvido com React Native, Expo, C#, Supabase, MongoDB e Azure, com o objetivo de aumentar a segurança e facilitar o controle de entradas para condomínios. Oferece registro digital de entradas, QR Codes para visitantes e comunicação integrada com a administração.",
    img: { src: "/images/call-to-action.png", alt: "Safe Entry preview" },
    tech: ["React Native", "Expo", "C#", "Supabase", "MongoDB", "Azure"],
    github: "",
    liveUrl: ""
  },
  {
    slug: "fazendata",
    title: "Fazendata",
    description:
      "Aplicativo de gestão de gado leiteiro com foco em produtividade e integração NFC.",
    img: { src: "/images/fazendata-call-to-action.png", alt: "Fazendata preview" },
    tech: ["React Native", "Expo", "NestJS", "Supabase"],
    github: "",
    liveUrl: ""
  }
];