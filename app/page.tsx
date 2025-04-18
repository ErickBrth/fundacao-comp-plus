import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ChevronRight, Code, GraduationCap, Lightbulb, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Fundação COMP+</h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Apoiando a pesquisa científica, desenvolvimento, inovação e prestação de serviços técnicos
                especializados desde 2012.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/programas-projetos">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Explore Nossos Projetos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/eventos">
                  <Button variant="outline" className="text-white border-white bg-white/10">
                    Participe de Nossos Eventos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
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
                <line
                  x1="300"
                  y1="150"
                  x2="300"
                  y2="250"
                  stroke="#fff"
                  strokeWidth="10"
                />
                <line
                  x1="250"
                  y1="200"
                  x2="350"
                  y2="200"
                  stroke="#fff"
                  strokeWidth="10"
                />

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
      </section>

      {/* Sobre a Fundação */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre a Fundação COMP+</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fundada em 2012, a Fundação COMP+ oferece suporte administrativo a Instituições Científicas e
                Tecnológicas (ICTs) e Universidades Públicas para a execução de projetos voltados à pesquisa científica,
                desenvolvimento, inovação e prestação de serviços técnicos especializados.
              </p>
            </div>
            <Link href="/sobre-nos">
              <Button variant="outline" className="mt-4">
                Saiba Mais Sobre Nós
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques dos Programas */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Programas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conheça os principais programas da Fundação COMP+ que estão transformando a área de computação.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                <Link href="/bolsas">
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
                  Organizamos hackathons temáticos que conectam estudantes, pesquisadores e empresas para desenvolver
                  soluções inovadoras.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/hackathons">
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
                <Link href="/inclusao-digital">
                  <Button variant="outline">Saiba Mais</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Eventos e Workshops */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Próximos Eventos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Participe dos nossos eventos e workshops para expandir seu conhecimento e rede de contatos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Workshop de Inteligência Artificial</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  15 de Abril, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Um workshop prático sobre as mais recentes técnicas de IA e suas aplicações no mercado atual.</p>
              </CardContent>
              <CardFooter>
                <Link href="/eventos/inscricao?evento=workshop-ia">
                  <Button>Inscreva-se</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conferência de Segurança Cibernética</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  22 de Maio, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Especialistas nacionais e internacionais discutem os desafios atuais da segurança cibernética.</p>
              </CardContent>
              <CardFooter>
                <Link href="/eventos/inscricao?evento=conferencia-seguranca">
                  <Button>Inscreva-se</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hackathon de Sustentabilidade</CardTitle>
                <CardDescription className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  10-12 de Junho, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Desenvolva soluções tecnológicas para problemas ambientais em um evento de 48 horas.</p>
              </CardContent>
              <CardFooter>
                <Link href="/eventos/inscricao?evento=hackathon-sustentabilidade">
                  <Button>Inscreva-se</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/eventos">
              <Button variant="outline">Ver Todos os Eventos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos e Impacto */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Depoimentos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Veja o que dizem os participantes dos nossos programas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="italic">
                    "A bolsa de estudos da Fundação COMP+ foi fundamental para que eu pudesse concluir meu mestrado em
                    Ciência da Computação. Hoje trabalho em uma empresa de tecnologia e continuo colaborando com a
                    fundação como voluntário."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-200 flex items-center justify-center">
                      <Users className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">Carlos Silva</p>
                      <p className="text-sm text-muted-foreground">Mestre em Ciência da Computação</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="italic">
                    "Participar do hackathon organizado pela COMP+ abriu portas para minha carreira. Minha equipe
                    desenvolveu uma solução que acabou se tornando uma startup, e hoje temos investidores e clientes
                    reais."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-200 flex items-center justify-center">
                      <Users className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">Ana Oliveira</p>
                      <p className="text-sm text-muted-foreground">CEO da TechSolve</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
