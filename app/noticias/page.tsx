import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ChevronRight } from "lucide-react"

export default function Noticias() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Notícias
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Fique por dentro das últimas novidades da Fundação COMP+ e do mundo da computação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notícias Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter mb-8">Últimas Notícias</h2>
              <div className="space-y-8">
                <Card>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative aspect-video overflow-hidden rounded-l-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Notícia em Destaque"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-2xl mb-2">
                        <Link href="/noticias/fundacao-comp-lanca-programa-bolsas" className="hover:text-blue-600">
                          Fundação COMP+ lança novo programa de bolsas para estudantes de computação
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center mb-4">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        15 de Março, 2025
                      </CardDescription>
                      <p className="text-muted-foreground mb-4">
                        A Fundação COMP+ anunciou hoje o lançamento de um novo programa de bolsas para estudantes de
                        graduação e pós-graduação em computação, com foco em pesquisa em inteligência artificial e
                        segurança cibernética.
                      </p>
                      <Link
                        href="/noticias/fundacao-comp-lanca-programa-bolsas"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Leia mais <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="relative aspect-video overflow-hidden rounded-t-lg mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Hackathon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">
                        <Link href="/noticias/hackathon-sustentabilidade" className="hover:text-blue-600">
                          Hackathon de Sustentabilidade reunirá desenvolvedores em junho
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        10 de Março, 2025
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        O evento, que acontecerá entre os dias 10 e 12 de junho, desafiará os participantes a
                        desenvolverem soluções tecnológicas para problemas ambientais.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/noticias/hackathon-sustentabilidade"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Leia mais <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="relative aspect-video overflow-hidden rounded-t-lg mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Parceria"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">
                        <Link href="/noticias/parceria-empresas-tecnologia" className="hover:text-blue-600">
                          Fundação COMP+ firma parceria com empresas de tecnologia
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4" />5 de Março, 2025
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        A parceria visa promover a capacitação de profissionais em tecnologias emergentes e o
                        desenvolvimento de projetos inovadores.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/noticias/parceria-empresas-tecnologia"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Leia mais <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="relative aspect-video overflow-hidden rounded-t-lg mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Workshop"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">
                        <Link href="/noticias/workshop-ia" className="hover:text-blue-600">
                          Workshop de Inteligência Artificial com inscrições abertas
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4" />1 de Março, 2025
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        O workshop, que acontecerá no dia 15 de abril, abordará as mais recentes técnicas de IA e suas
                        aplicações no mercado atual.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="/noticias/workshop-ia" className="text-blue-600 hover:underline flex items-center">
                        Leia mais <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="relative aspect-video overflow-hidden rounded-t-lg mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Inclusão Digital"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">
                        <Link href="/noticias/projeto-inclusao-digital" className="hover:text-blue-600">
                          Projeto de inclusão digital atinge marca de 1000 beneficiados
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        25 de Fevereiro, 2025
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        O projeto, que visa democratizar o acesso à tecnologia em comunidades carentes, já beneficiou
                        mais de 1000 pessoas desde seu início.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/noticias/projeto-inclusao-digital"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Leia mais <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">Carregar Mais Notícias</Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-6">Categorias</h2>
              <div className="space-y-4">
                <Link href="/noticias/categoria/eventos" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  Eventos
                </Link>
                <Link href="/noticias/categoria/projetos" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  Projetos
                </Link>
                <Link
                  href="/noticias/categoria/parcerias"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                >
                  Parcerias
                </Link>
                <Link href="/noticias/categoria/educacao" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  Educação
                </Link>
                <Link
                  href="/noticias/categoria/tecnologia"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                >
                  Tecnologia
                </Link>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter mt-8 mb-6">Arquivos</h2>
              <div className="space-y-4">
                <Link href="/noticias/arquivo/2025" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  2025
                </Link>
                <Link href="/noticias/arquivo/2024" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  2024
                </Link>
                <Link href="/noticias/arquivo/2023" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  2023
                </Link>
                <Link href="/noticias/arquivo/2022" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  2022
                </Link>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter mt-8 mb-6">Newsletter</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Inscreva-se na nossa newsletter</CardTitle>
                  <CardDescription>
                    Receba as últimas notícias e atualizações diretamente no seu e-mail.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Seu e-mail" />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Inscrever</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
