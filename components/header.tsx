"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-full">
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-blue-600">
          COMP+
        </Link>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <DesktopNav />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu className="justify-end">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sobre-nos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sobre Nós</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programas e Projetos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/programas-projetos/bolsas" title="Bolsas de Estudo">
                Apoio financeiro para estudantes de computação.
              </ListItem>
              <ListItem href="/programas-projetos/hackathons" title="Hackathons">
                Eventos de programação intensiva para resolver problemas reais.
              </ListItem>
              <ListItem href="/programas-projetos/inclusao-digital" title="Inclusão Digital">
                Iniciativas para democratizar o acesso à tecnologia.
              </ListItem>
              <ListItem href="/programas-projetos" title="Ver Todos">
                Conheça todos os nossos programas e projetos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/eventos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Eventos</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/recursos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Recursos</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/parcerias" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Parcerias</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/noticias" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Notícias</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/doacoes" legacyBehavior passHref>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 ml-2">
              Doações
            </Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center space-x-2 mb-6 font-bold text-xl text-blue-600">
            COMP+
          </Link>
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Link href="/sobre-nos" className="text-lg font-medium">
            Sobre Nós
          </Link>
          <Link href="/programas-projetos" className="text-lg font-medium">
            Programas e Projetos
          </Link>
          <Link href="/eventos" className="text-lg font-medium">
            Eventos
          </Link>
          <Link href="/recursos" className="text-lg font-medium">
            Recursos
          </Link>
          <Link href="/parcerias" className="text-lg font-medium">
            Parcerias
          </Link>
          <Link href="/noticias" className="text-lg font-medium">
            Notícias
          </Link>
          <Link href="/doacoes" className="text-lg font-medium">
            Doações
          </Link>
          <Link href="/contato" className="text-lg font-medium">
            Contato
          </Link>
          <div className="mt-6">
            <Link href="/doacoes">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Faça uma Doação</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
