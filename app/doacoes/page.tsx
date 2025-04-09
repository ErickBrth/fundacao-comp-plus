import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, CreditCard, Heart, Users } from "lucide-react"

export default function Doacoes() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Doações
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Apoie a Fundação COMP+ e contribua para o avanço da computação no Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doações Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="por-que-doar" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="por-que-doar">Por que Doar</TabsTrigger>
              <TabsTrigger value="formas-doar">Formas de Doar</TabsTrigger>
              <TabsTrigger value="reconhecimento">Reconhecimento</TabsTrigger>
            </TabsList>
            <TabsContent value="por-que-doar" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Por que Doar para a Fundação COMP+</h2>
                  <p className="text-muted-foreground">
                    Sua doação para a Fundação COMP+ tem um impacto direto no avanço da computação no Brasil,
                    contribuindo para a formação de profissionais qualificados, o desenvolvimento de pesquisas
                    inovadoras e a inclusão digital.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Impacto das Doações</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Formação de Talentos</h4>
                        <p className="text-sm text-muted-foreground">
                          Suas doações ajudam a financiar bolsas de estudo para estudantes talentosos em todos os níveis
                          acadêmicos, contribuindo para a formação da próxima geração de profissionais de computação.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Pesquisa e Inovação</h4>
                        <p className="text-sm text-muted-foreground">
                          Apoiamos projetos de pesquisa em áreas estratégicas da computação, como inteligência
                          artificial, segurança cibernética e computação sustentável, contribuindo para o avanço do
                          conhecimento e o desenvolvimento de soluções inovadoras.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Heart className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Inclusão Digital</h4>
                        <p className="text-sm text-muted-foreground">
                          Desenvolvemos projetos que visam democratizar o acesso à tecnologia em comunidades carentes,
                          promovendo a inclusão digital e reduzindo a desigualdade social.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-6">Transparência</h3>
                  <p className="text-muted-foreground">
                    A Fundação COMP+ está comprometida com a transparência na gestão dos recursos recebidos. Todos os
                    doadores têm acesso a relatórios detalhados sobre a aplicação das doações e o impacto gerado.
                  </p>
                  <div className="mt-6">
                    <Link href="#formas-doar">
                      <Button className="bg-blue-600 hover:bg-blue-700">Faça sua Doação</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Impacto das Doações"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="formas-doar" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Formas de Doar</h2>
                  <p className="text-muted-foreground">
                    A Fundação COMP+ oferece diversas formas de doação, para que você possa escolher a que melhor se
                    adapta às suas possibilidades.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Doação Única</h3>
                  <p className="text-muted-foreground">
                    Faça uma doação pontual de qualquer valor para apoiar nossos projetos.
                  </p>
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Escolha o Valor da Doação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <Button variant="outline">R$ 50</Button>
                        <Button variant="outline">R$ 100</Button>
                        <Button variant="outline">R$ 200</Button>
                        <Button variant="outline">R$ 500</Button>
                        <Button variant="outline">R$ 1000</Button>
                        <Button variant="outline">Outro</Button>
                      </div>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Outro valor" />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Doar Agora
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <h3 className="text-xl font-bold mt-6">Doação Mensal</h3>
                  <p className="text-muted-foreground">
                    Torne-se um doador recorrente e contribua mensalmente para a sustentabilidade de nossos projetos.
                  </p>
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Escolha o Valor Mensal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <Button variant="outline">R$ 20/mês</Button>
                        <Button variant="outline">R$ 50/mês</Button>
                        <Button variant="outline">R$ 100/mês</Button>
                      </div>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Outro valor mensal" />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Doar Mensalmente
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Doação Corporativa</h3>
                  <p className="text-muted-foreground">
                    Empresas podem se tornar parceiras da Fundação COMP+ através de doações corporativas, patrocínios de
                    projetos específicos ou programas de responsabilidade social.
                  </p>
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Doação Corporativa</CardTitle>
                      <CardDescription>Entre em contato para discutir as possibilidades de parceria.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Input type="text" placeholder="Nome da Empresa" />
                        <Input type="email" placeholder="E-mail Corporativo" />
                        <Input type="tel" placeholder="Telefone" />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Solicitar Contato</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <h3 className="text-xl font-bold mt-6">Outras Formas de Apoio</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Doação de Equipamentos:</span> Doe computadores, servidores e
                        outros equipamentos para nossos projetos de inclusão digital.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Voluntariado:</span> Contribua com seu tempo e conhecimento como
                        voluntário em nossos projetos.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Mentoria:</span> Seja mentor de estudantes e empreendedores em
                        nossos programas.
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/contato">
                      <Button variant="outline">Entre em Contato</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reconhecimento" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Reconhecimento aos Doadores</h2>
                  <p className="text-muted-foreground">
                    A Fundação COMP+ reconhece e agradece a todos os doadores que contribuem para o sucesso de nossa
                    missão.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Programa de Reconhecimento</h3>
                  <p className="text-muted-foreground">
                    Nosso programa de reconhecimento oferece diferentes níveis de visibilidade e benefícios para os
                    doadores, de acordo com o valor e a frequência das doações.
                  </p>
                  <div className="space-y-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Amigo da COMP+</CardTitle>
                        <CardDescription>Doações até R$ 1.000</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Certificado de agradecimento</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Menção no relatório anual</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Newsletter exclusiva</div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Parceiro da COMP+</CardTitle>
                        <CardDescription>Doações de R$ 1.001 a R$ 10.000</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Todos os benefícios do nível Amigo</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Logo no site da fundação</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Convites para eventos exclusivos</div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Patrono da COMP+</CardTitle>
                        <CardDescription>Doações acima de R$ 10.000</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Todos os benefícios do nível Parceiro</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Nomeação de bolsas ou projetos</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Participação em comitês consultivos</div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>Relatórios personalizados de impacto</div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Histórias de Impacto</h3>
                  <p className="text-muted-foreground">
                    Conheça algumas histórias de como as doações têm impactado positivamente a vida de pessoas e o
                    avanço da computação no Brasil.
                  </p>
                  <Card className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-4">
                        <p className="italic">
                          "Graças à bolsa de estudos financiada por doadores da Fundação COMP+, pude concluir meu
                          mestrado em Ciência da Computação e hoje trabalho em uma empresa de tecnologia, desenvolvendo
                          soluções que impactam positivamente a vida de milhares de pessoas."
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-200 flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Carlos Silva</p>
                            <p className="text-sm text-muted-foreground">Ex-bolsista da Fundação COMP+</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-4">
                        <p className="italic">
                          "O projeto de inclusão digital da Fundação COMP+ transformou nossa comunidade. Crianças e
                          jovens que nunca tinham tido acesso a um computador agora estão aprendendo programação e
                          desenvolvendo habilidades que abrem novas oportunidades para o futuro."
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-200 flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Maria Oliveira</p>
                            <p className="text-sm text-muted-foreground">Líder comunitária</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="mt-6">
                    <Link href="/impacto">
                      <Button className="bg-blue-600 hover:bg-blue-700">Ver Mais Histórias de Impacto</Button>
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Faça a Diferença Hoje</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sua doação, independentemente do valor, pode fazer a diferença na vida de muitas pessoas e contribuir
                para o avanço da computação no Brasil.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="#formas-doar">
                <Button className="bg-blue-600 hover:bg-blue-700">Doe Agora</Button>
              </Link>
              <Link href="/contato">
                <Button variant="outline">Entre em Contato</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
