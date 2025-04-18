import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, MapPin } from "lucide-react"
import CalendarioEventos from "../components/CalendarioEventos"

export default function Eventos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Eventos
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Participe dos eventos organizados pela Fundação COMP+ e amplie seus conhecimentos na área de computação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="proximos" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="proximos">Próximos Eventos</TabsTrigger>
              <TabsTrigger value="passados">Eventos Passados</TabsTrigger>
            </TabsList>
            <TabsContent value="proximos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Auditório Central, UFCG</span>
                    </div>
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
                    <p>
                      Especialistas nacionais e internacionais discutem os desafios atuais da segurança cibernética.
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Centro de Convenções, Campina Grande</span>
                    </div>
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
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Hub de Inovação, Campina Grande</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/eventos/inscricao?evento=hackathon-sustentabilidade">
                      <Button>Inscreva-se</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Webinar: Carreira em Ciência de Dados</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />5 de Julho, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Profissionais experientes compartilham dicas e insights sobre carreira em ciência de dados.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Online (Zoom)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/eventos/inscricao?evento=webinar-ciencia-dados">
                      <Button>Inscreva-se</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Curso de Desenvolvimento Web</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      15-19 de Agosto, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Curso intensivo de 5 dias sobre desenvolvimento web moderno com React e Node.js.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Laboratório de Computação, UFCG</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/eventos/inscricao?evento=curso-dev-web">
                      <Button>Inscreva-se</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Simpósio de Computação Aplicada</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      10-12 de Setembro, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Apresentação de trabalhos acadêmicos e palestras sobre aplicações da computação em diversas áreas.
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Centro de Ciências e Tecnologia, UFCG</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/eventos/inscricao?evento=simposio-computacao">
                      <Button>Inscreva-se</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="passados" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Workshop de Blockchain</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      10 de Janeiro, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Workshop sobre fundamentos de blockchain e suas aplicações além das criptomoedas.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Auditório Central, UFCG</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/eventos/workshop-blockchain">
                      <Button variant="outline">Ver Gravação</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Hackathon de Saúde Digital</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      15-17 de Fevereiro, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Desenvolvimento de soluções tecnológicas para desafios na área da saúde.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Hub de Inovação, Campina Grande</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/eventos/hackathon-saude">
                      <Button variant="outline">Ver Resultados</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Conferência de Inteligência Artificial</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      5-6 de Março, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Conferência internacional sobre os avanços e desafios da inteligência artificial.</p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Centro de Convenções, Campina Grande</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/eventos/conferencia-ia">
                      <Button variant="outline">Ver Apresentações</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendário Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Calendário de Eventos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Confira todos os eventos programados para 2025 e planeje sua participação.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <CalendarioEventos />

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Organize um Evento Conosco</h2>
              <p className="text-muted-foreground">
                A Fundação COMP+ está aberta a parcerias para a organização de eventos na área de computação. Se você
                representa uma instituição ou empresa e tem interesse em organizar um evento em conjunto, entre em
                contato conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/contato">
                  <Button className="bg-blue-600 hover:bg-blue-700">Entre em Contato</Button>
                </Link>
                <Link href="/parcerias">
                  <Button variant="outline">Saiba Mais Sobre Parcerias</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/evento_comp.png?height=300&width=500"
                alt="Organize um Evento"
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
