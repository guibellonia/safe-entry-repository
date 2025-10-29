import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <Link href="/#projetos">← Voltar para Projetos</Link>

      <header style={{ marginTop: 16 }}>
        <h1 style={{ margin: 0 }}>{project.title}</h1>
        <p style={{ color: "#666" }}>{project.description}</p>
      </header>

      <section style={{ marginTop: 24 }}>
        <Image
          src={project.img.src}
          alt={project.img.alt ?? project.title}
          width={1200}
          height={600}
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
        />
      </section>

      {project.tech && project.tech.length > 0 && (
        <section style={{ marginTop: 18 }}>
          <h3>Tecnologias</h3>
          <ul style={{ display: "flex", gap: 8, flexWrap: "wrap", listStyle: "none", padding: 0 }}>
            {project.tech.map((t) => (
              <li
                key={t}
                style={{
                  background: "#f3f4f6",
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: 14,
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section style={{ marginTop: 18, display: "flex", gap: 12 }}>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer">
            Código no GitHub
          </a>
        ) : null}

        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Ver ao vivo
          </a>
        ) : null}
      </section>
    </main>
  );
}
