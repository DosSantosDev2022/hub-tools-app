// app/page.tsx
'use client';

import { FileText, Calculator, Wrench, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";

// Array simples para destacar os principais HUBs de ferramentas
const featuredHubs = [
  {
    title: "Financeiro",
    description: "Controle suas finanças com conversores de moedas e calculadoras úteis.",
    icon: Calculator,
    url: "/tools/currency-converter", // Link para a primeira ferramenta pronta
  },
  {
    title: "Documentos & PDF",
    description: "Ferramentas para comprimir, converter e unir seus arquivos PDF.",
    icon: FileText,
    url: "/tools/Compress-pdf",
  },
  {
    title: "Utilitários",
    description: "Soluções rápidas como geradores de senhas e contadores de caracteres.",
    icon: Wrench,
    url: "/tools/qr-code-generator",
  },
];

export default function HomePage() {
  return (
    <div className="p-6 md:p-10 min-h-screen">

      <header className="mb-12 border-b pb-8 border-border">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Bem-vindo ao <span className="text-primary">HUB TOOLS</span>!
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Seu centro de soluções digitais. Encontre todas as ferramentas que você precisa para tarefas diárias e projetos complexos, tudo em um só lugar.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
          Explore Nossos Principais Hubs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredHubs.map((hub) => (
            <Link
              key={hub.title}
              href={hub.url}
              className="bg-card p-6 rounded-lg shadow-lg hover:bg-accent/50 transition duration-300 border border-border hover:border-primary block group"
            >
              <hub.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{hub.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{hub.description}</p>
              <div className="flex items-center text-primary group-hover:underline">
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted p-8 rounded-xl border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          O Futuro das Ferramentas
        </h2>
        <p className="text-muted-foreground max-w-4xl mb-6">
          O HUB TOOLS está em constante desenvolvimento. Novas funcionalidades e utilitários são adicionados frequentemente para garantir que você tenha as melhores e mais rápidas soluções. Verifique o menu lateral para ver todas as categorias!
        </p>
      </section>
    </div>
  );
}