import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Video } from "lucide-react"

export default function Recursos() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Recursos
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Acesse materiais educacionais, artigos, tutoriais e publicações para aprimorar seus conhecimentos em
                computação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="biblioteca" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="biblioteca">Biblioteca de Recursos</TabsTrigger>
              <TabsTrigger value="ferramentas">Ferramentas e Tutoriais</TabsTrigger>
              <TabsTrigger value="publicacoes">Publicações</TabsTrigger>
            </TabsList>
            <TabsContent value="biblioteca" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <BookOpen className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Artigos Técnicos</CardTitle>
                    <CardDescription>Artigos sobre tecnologias e tendências em computação.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/recursos/artigos/ia-generativa" className="text-blue-600 hover:underline">
                          Inteligência Artificial Generativa: Aplicações e Desafios
                        </Link>
                      </li>
                      <li>
                        <Link href="/recursos/artigos/computacao-quantica" className="text-blue-600 hover:underline">
                          Introdução à Computação Quântica
                        </Link>
                      </li>
                      <li>
                        <Link href="/recursos/artigos/blockchain" className="text-blue-600 hover:underline">
                          Blockchain Além das Criptomoedas
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/recursos/artigos">
                      <Button variant="outline">Ver Todos os Artigos</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Video className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Vídeos e Webinars</CardTitle>
                    <CardDescription>Gravações de palestras, webinars e tutoriais em vídeo.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/recursos/videos/introducao-ia" className="text-blue-600 hover:underline">
                          Introdução à Inteligência Artificial
                        </Link>
                      </li>
                      <li>
                        <Link href="/recursos/videos/desenvolvimento-web" className="text-blue-600 hover:underline">
                          Desenvolvimento Web Moderno
                        </Link>
                      </li>
                      <li>
                        <Link href="/recursos/videos/seguranca-cibernetica" className="text-blue-600 hover:underline">
                          Fundamentos de Segurança Cibernética
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/recursos/videos">
                      <Button variant="outline">Ver Todos os Vídeos</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <FileText className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>E-books e Apostilas</CardTitle>
                    <CardDescription>Materiais didáticos para estudo e consulta.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/recursos/ebooks/programacao-python" className="text-blue-600 hover:underline">
                          Programação em Python para Iniciantes
                        </Link>
                      </li>
                      <li>
                        <Link href="/recursos/ebooks/algoritmos" className="text-blue-600 hover:underline">
                          Estruturas de Dados e Algoritmos
                        </Link>
                      </li>
                      <li>
                        <Link href="/recursos/ebooks/machine-learning" className="text-blue-600 hover:underline">
                          Introdução ao Machine Learning
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/recursos/ebooks">
                      <Button variant="outline">Ver Todos os E-books</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="ferramentas" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Ferramentas e Tutoriais</h2>
                  <p className="text-muted-foreground">
                    Acesse ferramentas úteis para o desenvolvimento de projetos e tutoriais passo a passo para aprender
                    novas tecnologias.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Ferramentas Recomendadas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <Link href="/recursos/ferramentas/vscode" className="font-medium text-blue-600 hover:underline">
                          Visual Studio Code
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Editor de código gratuito e poderoso para desenvolvimento.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <Link href="/recursos/ferramentas/github" className="font-medium text-blue-600 hover:underline">
                          GitHub
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Plataforma de hospedagem de código e colaboração.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <Link href="/recursos/ferramentas/figma" className="font-medium text-blue-600 hover:underline">
                          Figma
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Ferramenta de design de interface e prototipagem.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mt-6">Tutoriais em Destaque</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <Link href="/recursos/tutoriais/react" className="font-medium text-blue-600 hover:underline">
                          Desenvolvimento de Aplicações com React
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Tutorial completo sobre React, desde o básico até conceitos avançados.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <Link
                          href="/recursos/tutoriais/python-data-science"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Python para Ciência de Dados
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Aprenda a utilizar Python para análise de dados e machine learning.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <Link
                          href="/recursos/tutoriais/mobile-dev"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Desenvolvimento Mobile com Flutter
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Tutorial para criar aplicativos móveis multiplataforma com Flutter.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[600px] h-auto aspect-[3/2]">
                    <svg
                      width="600"
                      height="400"
                      viewBox="0 0 600 400"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      {/* Definição de um gradiente de fundo */}
                      <defs>
                        <linearGradient id="gradient-bg-recursos" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#0056b3", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#00aaff", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Fundo com o gradiente */}
                      <rect width="600" height="400" fill="url(#gradient-bg-recursos)" />

                      {/* Elementos decorativos */}
                      <circle cx="150" cy="150" r="50" fill="#ffffff" fillOpacity="0.1" />
                      <circle cx="450" cy="250" r="70" fill="#ffffff" fillOpacity="0.1" />
                      <circle cx="300" cy="100" r="30" fill="#ffffff" fillOpacity="0.1" />

                      {/* Texto */}
                      <text
                        x="300"
                        y="200"
                        fontFamily="Montserrat, sans-serif"
                        fontSize="24"
                        fill="#fff"
                        textAnchor="middle"
                      >
                        Ferramentas e Tutoriais
                      </text>
                      <text
                        x="300"
                        y="240"
                        fontFamily="Montserrat, sans-serif"
                        fontSize="16"
                        fill="#fff"
                        textAnchor="middle"
                      >
                        Recursos para desenvolvimento
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="publicacoes" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Publicações</h2>
                  <p className="text-muted-foreground">
                    Acesse publicações científicas, relatórios técnicos e artigos acadêmicos produzidos com o apoio da
                    Fundação COMP+.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Publicações Recentes</h3>
                  <ul className="space-y-4">
                    <li className="border-b pb-4">
                      <h4 className="font-medium">
                        <Link href="/recursos/publicacoes/ia-etica" className="text-blue-600 hover:underline">
                          Aspectos Éticos da Inteligência Artificial: Um Estudo de Caso
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">Autores: Silva, J., Oliveira, M., Santos, P.</p>
                      <p className="text-sm text-muted-foreground">Revista Brasileira de Computação, 2025</p>
                    </li>
                    <li className="border-b pb-4">
                      <h4 className="font-medium">
                        <Link href="/recursos/publicacoes/seguranca-iot" className="text-blue-600 hover:underline">
                          Segurança em Dispositivos IoT: Desafios e Soluções
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">Autores: Costa, R., Pereira, A., Lima, F.</p>
                      <p className="text-sm text-muted-foreground">
                        Conferência Internacional de Segurança Cibernética, 2024
                      </p>
                    </li>
                    <li className="border-b pb-4">
                      <h4 className="font-medium">
                        <Link href="/recursos/publicacoes/computacao-verde" className="text-blue-600 hover:underline">
                          Computação Verde: Estratégias para Redução do Impacto Ambiental de Data Centers
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Autores: Almeida, T., Souza, C., Ferreira, M.
                      </p>
                      <p className="text-sm text-muted-foreground">Journal of Sustainable Computing, 2024</p>
                    </li>
                    <li>
                      <h4 className="font-medium">
                        <Link href="/recursos/publicacoes/blockchain-saude" className="text-blue-600 hover:underline">
                          Aplicações de Blockchain na Área da Saúde: Um Survey
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">Autores: Martins, L., Gomes, R., Ribeiro, S.</p>
                      <p className="text-sm text-muted-foreground">
                        Simpósio Brasileiro de Computação Aplicada à Saúde, 2023
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Relatórios Técnicos</h3>
                  <ul className="space-y-4">
                    <li className="border-b pb-4">
                      <h4 className="font-medium">
                        <Link href="/recursos/relatorios/tendencias-ti" className="text-blue-600 hover:underline">
                          Tendências em Tecnologia da Informação para 2025
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Relatório técnico sobre as principais tendências em TI para os próximos anos.
                      </p>
                    </li>
                    <li className="border-b pb-4">
                      <h4 className="font-medium">
                        <Link href="/recursos/relatorios/mercado-trabalho" className="text-blue-600 hover:underline">
                          Mercado de Trabalho em Computação no Brasil
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Análise do mercado de trabalho para profissionais de computação no Brasil.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-medium">
                        <Link href="/recursos/relatorios/inclusao-digital" className="text-blue-600 hover:underline">
                          Inclusão Digital no Nordeste Brasileiro
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Estudo sobre o estado atual da inclusão digital no Nordeste do Brasil.
                      </p>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/recursos/publicacoes">
                      <Button className="bg-blue-600 hover:bg-blue-700">Ver Todas as Publicações</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Contribua com Nossos Recursos</h2>
              <p className="text-muted-foreground">
                Você é um especialista em alguma área da computação? Compartilhe seu conhecimento contribuindo com
                artigos, tutoriais ou outros recursos para nossa biblioteca.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/contato">
                  <Button className="bg-blue-600 hover:bg-blue-700">Entre em Contato</Button>
                </Link>
                <Link href="/recursos/contribuir">
                  <Button variant="outline">Saiba Como Contribuir</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] h-auto aspect-[5/3]">
                <svg
                  width="500"
                  height="300"
                  viewBox="0 0 500 300"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Definição de um gradiente de fundo */}
                  <defs>
                    <linearGradient id="gradient-bg-cta" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#4a6fa5", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#6b8cae", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* Fundo com o gradiente */}
                  <rect width="500" height="300" fill="url(#gradient-bg-cta)" />

                  {/* Elementos decorativos */}
                  <circle cx="125" cy="100" r="40" fill="#ffffff" fillOpacity="0.1" />
                  <circle cx="375" cy="200" r="60" fill="#ffffff" fillOpacity="0.1" />
                  <circle cx="250" cy="75" r="25" fill="#ffffff" fillOpacity="0.1" />

                  {/* Texto */}
                  <text
                    x="250"
                    y="150"
                    fontFamily="Montserrat, sans-serif"
                    fontSize="22"
                    fill="#fff"
                    textAnchor="middle"
                  >
                    Compartilhe seu conhecimento
                  </text>
                  <text
                    x="250"
                    y="180"
                    fontFamily="Montserrat, sans-serif"
                    fontSize="16"
                    fill="#fff"
                    textAnchor="middle"
                  >
                    Contribua com a comunidade
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
