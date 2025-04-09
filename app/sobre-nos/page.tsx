import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users } from "lucide-react"

export default function SobreNos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Sobre Nós
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Conheça a história, missão e equipe da Fundação COMP+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="historia" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="historia">História e Missão</TabsTrigger>
              <TabsTrigger value="equipe">Equipe e Governança</TabsTrigger>
              <TabsTrigger value="relatorios">Relatórios e Transparência</TabsTrigger>
            </TabsList>
            <TabsContent value="historia" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Nossa História</h2>
                  <p className="text-muted-foreground">
                    Fundada em 2012, a Fundação COMP+ surgiu da necessidade de oferecer suporte administrativo a
                    Instituições Científicas e Tecnológicas (ICTs) e Universidades Públicas para a execução de projetos
                    voltados à pesquisa científica, desenvolvimento, inovação e prestação de serviços técnicos
                    especializados.
                  </p>
                  <p className="text-muted-foreground">
                    Ao longo dos anos, expandimos nossa atuação e hoje somos reconhecidos como uma das principais
                    fundações de apoio à pesquisa e inovação na área de computação no Brasil.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Promover o avanço da ciência e tecnologia na área de computação, apoiando projetos de pesquisa,
                    desenvolvimento e inovação, e contribuindo para a formação de profissionais qualificados.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Nossa Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência nacional em apoio à pesquisa e inovação na área de computação, contribuindo para o
                    desenvolvimento tecnológico e social do país.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Nossos Valores</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Excelência e qualidade</li>
                    <li>Ética e transparência</li>
                    <li>Inovação e criatividade</li>
                    <li>Inclusão e diversidade</li>
                    <li>Compromisso social</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-[600px] h-[400px]">
                    <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                      {/* Definição de um gradiente de fundo */}
                      <defs>
                        <linearGradient id="gradient-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#0056b3", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#00aaff", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Fundo com o gradiente */}
                      <rect width="600" height="400" fill="url(#gradient-bg)" />

                      {/* Elemento circular com contorno tracejado */}
                      <circle
                        cx="300"
                        cy="200"
                        r="70"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="10"
                        strokeDasharray="10,10"
                      />

                      {/* Símbolo de adição (+) centralizado */}
                      <line x1="300" y1="150" x2="300" y2="250" stroke="#fff" strokeWidth="10" />
                      <line x1="250" y1="200" x2="350" y2="200" stroke="#fff" strokeWidth="10" />

                      {/* Texto com o nome da Fundação */}
                      <text
                        x="300"
                        y="380"
                        fontFamily="Montserrat, sans-serif"
                        fontSize="36"
                        fill="#fff"
                        textAnchor="middle"
                      >
                        COMP+
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="equipe" className="mt-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Nossa Equipe</h2>
                  <p className="text-muted-foreground max-w-[800px]">
                    A Fundação COMP+ conta com uma equipe de profissionais qualificados e comprometidos com nossa
                    missão.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="rounded-full overflow-hidden w-16 h-16 bg-gray-200 flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <div>
                        <CardTitle>Dr. Roberto Almeida</CardTitle>
                        <CardDescription>Diretor Presidente</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Professor Titular de Ciência da Computação com mais de 20 anos de experiência em pesquisa e
                        gestão acadêmica.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="rounded-full overflow-hidden w-16 h-16 bg-gray-200 flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <div>
                        <CardTitle>Dra. Carla Santos</CardTitle>
                        <CardDescription>Diretora Científica</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Pesquisadora com doutorado em Inteligência Artificial e vasta experiência em projetos de
                        inovação tecnológica.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="rounded-full overflow-hidden w-16 h-16 bg-gray-200 flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <div>
                        <CardTitle>Dr. Paulo Oliveira</CardTitle>
                        <CardDescription>Diretor Administrativo</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Administrador com MBA em Gestão de Projetos e ampla experiência em gestão de organizações sem
                        fins lucrativos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <h3 className="text-2xl font-bold tracking-tighter">Conselho Curador</h3>
                  <p className="text-muted-foreground max-w-[800px]">
                    Nosso Conselho Curador é composto por representantes de instituições parceiras e da sociedade civil.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span>Prof. Dr. João Pereira - Universidade Federal de Campina Grande</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span>Profa. Dra. Maria Costa - Universidade Estadual da Paraíba</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span>Dr. Ricardo Souza - Associação Brasileira de Tecnologia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span>Dra. Fernanda Lima - Conselho Regional de Computação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span>Eng. Carlos Mendes - Federação das Indústrias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span>Dra. Patrícia Silva - Secretaria de Ciência e Tecnologia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="relatorios" className="mt-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Relatórios e Transparência</h2>
                  <p className="text-muted-foreground max-w-[800px]">
                    A Fundação COMP+ está comprometida com a transparência e a prestação de contas. Aqui você encontra
                    nossos relatórios anuais e documentos institucionais.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <FileText className="h-10 w-10 text-blue-600 mb-2" />
                      <CardTitle>Relatórios Anuais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Relatório Anual 2024
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Relatório Anual 2023
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Relatório Anual 2022
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Ver todos os relatórios
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <FileText className="h-10 w-10 text-blue-600 mb-2" />
                      <CardTitle>Documentos Institucionais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Estatuto da Fundação
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Regimento Interno
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Código de Ética e Conduta
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Política de Privacidade
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <FileText className="h-10 w-10 text-blue-600 mb-2" />
                      <CardTitle>Prestação de Contas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Balanço Financeiro 2024
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Balanço Financeiro 2023
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Balanço Financeiro 2022
                      </Link>
                      <Link href="#" className="text-blue-600 hover:underline block">
                        Ver todos os balanços
                      </Link>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700">Solicitar Informações Adicionais</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
