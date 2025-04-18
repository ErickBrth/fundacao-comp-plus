"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BolsasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-600 text-white text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Programa de Bolsas COMP+</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Apoio financeiro para estudantes de computação focados em excelência acadêmica e impacto social.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Sobre o Programa</h2>
            <p>
              A Fundação COMP+ oferece bolsas de estudo para estudantes de graduação e pós-graduação em Computação que
              se destacam pelo desempenho acadêmico, engajamento em projetos de pesquisa ou extensão, e condições
              socioeconômicas que justifiquem o apoio.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Ajuda mensal para custos acadêmicos</li>
              <li>Prioridade em cursos, eventos e workshops promovidos pela fundação</li>
              <li>Acompanhamento de mentores e projetos</li>
            </ul>
            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
              <Link href="/bolsas/inscricao">Inscreva-se Agora</Link>
            </Button>
          </div>

          <div className="w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Estudantes com notebooks"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6 space-y-6 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Quem pode se candidatar?</h2>
          <p>
            Estudantes regularmente matriculados em cursos da área de Computação, com histórico escolar satisfatório e
            motivação para contribuir com a comunidade acadêmica e tecnológica.
          </p>
          <p className="text-muted-foreground">
            Também serão considerados critérios socioeconômicos e envolvimento prévio em atividades extracurriculares.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full py-16 text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-4">Pronto para dar o próximo passo?</h2>
          <p className="text-muted-foreground mb-6">
            Candidate-se agora ao programa de bolsas e receba o suporte necessário para transformar seu potencial.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/bolsas/inscricao">Preencher Inscrição</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
