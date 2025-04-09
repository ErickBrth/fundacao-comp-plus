import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GraduationCap, Lightbulb, Users } from "lucide-react"

export default function ProgramasProjetos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Programas e Projetos
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Conheça as iniciativas da Fundação COMP+ para promover a pesquisa, o desenvolvimento e a inovação na
                área de computação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="bolsas">Bolsas</TabsTrigger>
              <TabsTrigger value="eventos">Eventos</TabsTrigger>
              <TabsTrigger value="inclusao">Inclusão Digital</TabsTrigger>
            </TabsList>
            <TabsContent value="todos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <GraduationCap className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Bolsas de Estudo</CardTitle>
                    <CardDescription>
                      Apoio financeiro para estudantes de computação em todos os níveis acadêmicos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Oferecemos bolsas para estudantes de graduação, mestrado e doutorado em áreas relacionadas à
                      computação.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/programas-projetos/bolsas">
                      <Button variant="outline">Saiba Mais</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Code className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Hackathons</CardTitle>
                    <CardDescription>Eventos de programação intensiva para resolver problemas reais.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Organizamos hackathons temáticos que conectam estudantes, pesquisadores e empresas para
                      desenvolver soluções inovadoras.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/programas-projetos/hackathons">
                      <Button variant="outline">Saiba Mais</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Lightbulb className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Inclusão Digital</CardTitle>
                    <CardDescription>Iniciativas para democratizar o acesso à tecnologia.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Projetos que visam reduzir a exclusão digital e promover o acesso à tecnologia em comunidades
                      carentes.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/programas-projetos/inclusao-digital">
                      <Button variant="outline">Saiba Mais</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Users className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Mentoria Tecnológica</CardTitle>
                    <CardDescription>Programa de mentoria para jovens talentos em tecnologia.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Conectamos profissionais experientes com jovens talentos para orientação de carreira e
                      desenvolvimento de habilidades.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/programas-projetos/mentoria">
                      <Button variant="outline">Saiba Mais</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Code className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Pesquisa e Desenvolvimento</CardTitle>
                    <CardDescription>Apoio a projetos de pesquisa em computação.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Financiamento e suporte administrativo para projetos de pesquisa em diversas áreas da computação.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/programas-projetos/pesquisa">
                      <Button variant="outline">Saiba Mais</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Lightbulb className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Incubadora de Startups</CardTitle>
                    <CardDescription>Apoio a startups de base tecnológica.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Oferecemos infraestrutura, mentoria e networking para startups em estágio inicial na área de
                      tecnologia.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/programas-projetos/incubadora">
                      <Button variant="outline">Saiba Mais</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="bolsas" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Programa de Bolsas</h2>
                  <p className="text-muted-foreground">
                    O Programa de Bolsas da Fundação COMP+ tem como objetivo apoiar estudantes talentosos em diferentes
                    níveis acadêmicos, contribuindo para a formação de profissionais qualificados na área de computação.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Tipos de Bolsas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Bolsas de Iniciação Científica:</span> Para estudantes de
                        graduação interessados em desenvolver projetos de pesquisa.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Bolsas de Mestrado e Doutorado:</span> Para estudantes de
                        pós-graduação desenvolvendo pesquisas inovadoras.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Bolsas de Desenvolvimento Tecnológico:</span> Para profissionais
                        envolvidos em projetos de inovação.
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/programas-projetos/bolsas/inscricao">
                      <Button className="bg-blue-600 hover:bg-blue-700">Inscreva-se</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Programa de Bolsas"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="eventos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Eventos e Hackathons</h2>
                  <p className="text-muted-foreground">
                    A Fundação COMP+ organiza diversos eventos ao longo do ano, incluindo hackathons, workshops,
                    conferências e competições de programação.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Hackathons</h3>
                  <p className="text-muted-foreground">
                    Nossos hackathons são eventos intensivos de programação onde equipes trabalham para desenvolver
                    soluções inovadoras para problemas reais. Os participantes têm a oportunidade de aprender, colaborar
                    e competir por prêmios.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Próximos Eventos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Hackathon de Sustentabilidade:</span> 10-12 de Junho, 2025
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Workshop de Inteligência Artificial:</span> 15 de Abril, 2025
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Conferência de Segurança Cibernética:</span> 22 de Maio, 2025
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/eventos">
                      <Button className="bg-blue-600 hover:bg-blue-700">Ver Todos os Eventos</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Hackathons"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="inclusao" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Inclusão Digital</h2>
                  <p className="text-muted-foreground">
                    O programa de Inclusão Digital da Fundação COMP+ visa democratizar o acesso à tecnologia e promover
                    a alfabetização digital em comunidades carentes.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Iniciativas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Laboratórios Comunitários:</span> Instalação de laboratórios de
                        informática em comunidades carentes.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Cursos de Informática Básica:</span> Capacitação em informática
                        básica para pessoas de todas as idades.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Programação para Jovens:</span> Introdução à programação para
                        jovens de escolas públicas.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Doação de Equipamentos:</span> Recondicionamento e doação de
                        computadores para escolas e comunidades.
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/programas-projetos/inclusao-digital/voluntariado">
                      <Button className="bg-blue-600 hover:bg-blue-700">Seja Voluntário</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Inclusão Digital"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Participe dos Nossos Programas</h2>
              <p className="text-muted-foreground">
                Seja como bolsista, participante de eventos, voluntário ou parceiro, há diversas formas de se envolver
                com a Fundação COMP+ e contribuir para o avanço da computação no Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/contato">
                  <Button className="bg-blue-600 hover:bg-blue-700">Entre em Contato</Button>
                </Link>
                <Link href="/doacoes">
                  <Button variant="outline">Apoie Nossos Projetos</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Participe"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
