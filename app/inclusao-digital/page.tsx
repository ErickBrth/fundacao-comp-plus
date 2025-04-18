"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InclusaoDigitalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-600 text-white text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Inclusão Digital</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Iniciativas para democratizar o acesso à tecnologia em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Tecnologia como ferramenta de transformação</h2>
            <p>
              A Fundação COMP+ acredita que a tecnologia deve ser acessível a todos. Nossos projetos de inclusão digital
              têm como objetivo reduzir as barreiras tecnológicas em comunidades de baixa renda, promovendo o
              desenvolvimento social e educacional.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Capacitação em informática básica e internet</li>
              <li>Doação e recondicionamento de equipamentos</li>
              <li>Oficinas em escolas públicas e centros comunitários</li>
              <li>Projetos com foco em jovens, idosos e pessoas com deficiência</li>
            </ul>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/projetos/inclusao-digital">Conheça os Projetos</Link>
            </Button>
          </div>

          <div className="w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Aula de informática em comunidade"
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
          <h2 className="text-3xl font-bold mb-4">Quer apoiar a Inclusão Digital?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Seja um voluntário, parceiro ou doador. Juntos podemos ampliar o acesso à tecnologia e transformar vidas.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contato">
              <Button className="bg-blue-600 hover:bg-blue-700">Entre em Contato</Button>
            </Link>
            <Link href="/doacoes">
              <Button variant="outline">Faça uma Doação</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
