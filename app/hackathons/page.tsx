"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HackathonsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-600 text-white text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Hackathons COMP+</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Eventos de programação intensiva para resolver problemas reais e promover inovação aberta.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Conectando talentos a desafios reais</h2>
            <p>
              Os hackathons organizados pela Fundação COMP+ reúnem estudantes, pesquisadores e profissionais da
              tecnologia para desenvolver soluções criativas para problemas relevantes da sociedade, do mercado ou da
              ciência.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Temas alinhados com os Objetivos de Desenvolvimento Sustentável (ODS)</li>
              <li>Mentorias técnicas e workshops durante o evento</li>
              <li>Premiação para as melhores soluções</li>
              <li>Oportunidades de networking com empresas e instituições</li>
            </ul>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/eventos?categoria=hackathon">Ver Próximos Hackathons</Link>
            </Button>
          </div>

          <div className="w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Hackathon em andamento"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="w-full py-16 bg-gray-50 text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-4">Quer propor um desafio para um hackathon?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Se você representa uma instituição, empresa ou laboratório de pesquisa e deseja propor um tema ou parceria
            para nossos hackathons, fale conosco.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contato">
              <Button className="bg-blue-600 hover:bg-blue-700">Entrar em Contato</Button>
            </Link>
            <Link href="/parcerias">
              <Button variant="outline">Saiba mais sobre Parcerias</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
