import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Handshake, Users } from "lucide-react"

export default function Parcerias() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Parcerias
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Conheça nossos parceiros e saiba como sua organização pode colaborar com a Fundação COMP+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcerias Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="parceiros" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="parceiros">Nossos Parceiros</TabsTrigger>
              <TabsTrigger value="como-parceiro">Como se Tornar um Parceiro</TabsTrigger>
              <TabsTrigger value="beneficios">Benefícios das Parcerias</TabsTrigger>
            </TabsList>
            <TabsContent value="parceiros" className="mt-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Nossos Parceiros</h2>
                  <p className="text-muted-foreground max-w-[800px]">
                    A Fundação COMP+ trabalha em colaboração com diversas instituições e empresas para promover a
                    pesquisa, o desenvolvimento e a inovação na área de computação.
                  </p>
                </div>
                <div className="space-y-8">
                  <h3 className="text-xl font-bold">Parceiros Acadêmicos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="UFCG" className="mb-4" />
                      <h4 className="text-center font-medium">Universidade Federal de Campina Grande</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="UEPB" className="mb-4" />
                      <h4 className="text-center font-medium">Universidade Estadual da Paraíba</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="IFPB" className="mb-4" />
                      <h4 className="text-center font-medium">Instituto Federal da Paraíba</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="USP" className="mb-4" />
                      <h4 className="text-center font-medium">Universidade de São Paulo</h4>
                    </Card>
                  </div>
                </div>
                <div className="space-y-8">
                  <h3 className="text-xl font-bold">Parceiros Empresariais</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Empresa 1" className="mb-4" />
                      <h4 className="text-center font-medium">TechSolutions Brasil</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Empresa 2" className="mb-4" />
                      <h4 className="text-center font-medium">Inovação Digital</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Empresa 3" className="mb-4" />
                      <h4 className="text-center font-medium">DataSystems</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Empresa 4" className="mb-4" />
                      <h4 className="text-center font-medium">CloudTech Brasil</h4>
                    </Card>
                  </div>
                </div>
                <div className="space-y-8">
                  <h3 className="text-xl font-bold">Parceiros Institucionais</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Instituição 1" className="mb-4" />
                      <h4 className="text-center font-medium">Ministério da Ciência e Tecnologia</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Instituição 2" className="mb-4" />
                      <h4 className="text-center font-medium">CNPq</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Instituição 3" className="mb-4" />
                      <h4 className="text-center font-medium">FINEP</h4>
                    </Card>
                    <Card className="flex flex-col items-center justify-center p-6">
                      <Image src="/placeholder-logo.svg" width="120" height="60" alt="Instituição 4" className="mb-4" />
                      <h4 className="text-center font-medium">Governo do Estado da Paraíba</h4>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="como-parceiro" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Como se Tornar um Parceiro</h2>
                  <p className="text-muted-foreground">
                    A Fundação COMP+ está sempre aberta a novas parcerias com instituições e empresas que compartilham
                    nossa visão de promover o avanço da computação no Brasil.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Tipos de Parcerias</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Building className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Parcerias Acadêmicas</h4>
                        <p className="text-sm text-muted-foreground">
                          Colaboração com universidades e instituições de ensino para desenvolvimento de projetos de
                          pesquisa, intercâmbio de conhecimento e formação de recursos humanos.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Handshake className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Parcerias Empresariais</h4>
                        <p className="text-sm text-muted-foreground">
                          Colaboração com empresas para desenvolvimento de projetos de inovação, transferência de
                          tecnologia, capacitação de profissionais e patrocínio de eventos.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Parcerias Institucionais</h4>
                        <p className="text-sm text-muted-foreground">
                          Colaboração com órgãos governamentais, agências de fomento e outras instituições para
                          desenvolvimento de políticas públicas e projetos de impacto social.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-6">Processo de Parceria</h3>
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>
                      <span className="font-medium">Contato Inicial:</span> Entre em contato conosco através do
                      formulário de contato ou pelo e-mail parcerias@compmais.org.br.
                    </li>
                    <li>
                      <span className="font-medium">Reunião Exploratória:</span> Agendaremos uma reunião para discutir
                      interesses mútuos e possibilidades de colaboração.
                    </li>
                    <li>
                      <span className="font-medium">Proposta de Parceria:</span> Elaboração de uma proposta formal de
                      parceria, detalhando objetivos, atividades e responsabilidades.
                    </li>
                    <li>
                      <span className="font-medium">Formalização:</span> Assinatura de um termo de cooperação ou
                      convênio, estabelecendo os termos da parceria.
                    </li>
                    <li>
                      <span className="font-medium">Implementação:</span> Início das atividades previstas na parceria,
                      com acompanhamento e avaliação periódica.
                    </li>
                  </ol>
                  <div className="mt-6">
                    <Link href="/contato">
                      <Button className="bg-blue-600 hover:bg-blue-700">Entre em Contato</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Parcerias"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="beneficios" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Benefícios das Parcerias</h2>
                  <p className="text-muted-foreground">
                    Ao se tornar um parceiro da Fundação COMP+, sua organização terá acesso a diversos benefícios e
                    oportunidades.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Para Empresas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Acesso a Talentos:</span> Contato direto com estudantes e
                        pesquisadores qualificados para recrutamento.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Desenvolvimento de Projetos:</span> Possibilidade de desenvolver
                        projetos de P&D em colaboração com pesquisadores especializados.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Visibilidade:</span> Exposição da marca em eventos, publicações e
                        no site da fundação.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Incentivos Fiscais:</span> Possibilidade de obter incentivos
                        fiscais para investimentos em P&D.
                      </div>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mt-6">Para Instituições Acadêmicas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Intercâmbio de Conhecimento:</span> Troca de experiências e
                        conhecimentos com outras instituições.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Oportunidades para Estudantes:</span> Bolsas, estágios e projetos
                        para estudantes.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Acesso a Recursos:</span> Compartilhamento de infraestrutura e
                        recursos para pesquisa.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <span className="font-medium">Projetos Colaborativos:</span> Desenvolvimento de projetos de
                        pesquisa em colaboração.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Depoimentos de Parceiros</h3>
                  <Card className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-4">
                        <p className="italic">
                          "A parceria com a Fundação COMP+ tem sido fundamental para o desenvolvimento de nossos
                          projetos de inovação. O acesso a pesquisadores qualificados e a infraestrutura de pesquisa tem
                          acelerado nosso processo de desenvolvimento de produtos."
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-200 flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Ricardo Mendes</p>
                            <p className="text-sm text-muted-foreground">Diretor de Inovação, TechSolutions Brasil</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-4">
                        <p className="italic">
                          "Como instituição acadêmica, nossa parceria com a Fundação COMP+ tem proporcionado
                          oportunidades valiosas para nossos estudantes e pesquisadores, através de projetos
                          colaborativos, eventos e intercâmbio de conhecimento."
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-200 flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Profa. Dra. Maria Costa</p>
                            <p className="text-sm text-muted-foreground">Coordenadora de Pesquisa, UEPB</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="mt-6">
                    <Link href="/parcerias/casos-sucesso">
                      <Button className="bg-blue-600 hover:bg-blue-700">Ver Casos de Sucesso</Button>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vamos Trabalhar Juntos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Entre em contato conosco para discutir como podemos colaborar para promover o avanço da computação no
                Brasil.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/contato">
                <Button className="bg-blue-600 hover:bg-blue-700">Entre em Contato</Button>
              </Link>
              <Link href="/sobre-nos">
                <Button variant="outline">Conheça Mais Sobre Nós</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
