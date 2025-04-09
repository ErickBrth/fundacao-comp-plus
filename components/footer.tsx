import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo-comp-plus.svg"
                alt="Fundação COMP+"
                width={60}
                height={40}
                className="h-10 w-auto mr-2"
              />
              <h3 className="text-xl font-bold text-white">Fundação COMP+</h3>
            </div>
            <p className="text-gray-400">
              Apoiando a pesquisa científica, desenvolvimento, inovação e prestação de serviços técnicos especializados
              desde 2012.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/programas-projetos" className="text-gray-400 hover:text-white">
                  Programas e Projetos
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-400 hover:text-white">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-400 hover:text-white">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <address className="not-italic text-gray-400">
              <p>Av. Aprígio Veloso, 882</p>
              <p>Campina Grande, PB</p>
              <p>CEP: 58429-900</p>
              <p className="mt-2">contato@compmais.org.br</p>
              <p>(83) 3333-4444</p>
            </address>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">
              Inscreva-se para receber novidades sobre eventos, programas e oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Seu e-mail" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-blue-600 hover:bg-blue-700">Inscrever</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fundação COMP+. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
