"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarDays, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

const eventosMock = {
  "workshop-ia": {
    titulo: "Workshop de Inteligência Artificial",
    data: "15 de Abril, 2025",
    descricao:
      "Um workshop prático sobre as mais recentes técnicas de IA e suas aplicações no mercado atual.",
    local: "Auditório Central, UFCG",
  },
  "conferencia-seguranca": {
    titulo: "Conferência de Segurança Cibernética",
    data: "22 de Maio, 2025",
    descricao:
      "Especialistas nacionais e internacionais discutem os desafios atuais da segurança cibernética.",
    local: "Centro de Convenções, Campina Grande",
  },
  "hackathon-sustentabilidade": {
    titulo: "Hackathon de Sustentabilidade",
    data: "10-12 de Junho, 2025",
    descricao:
      "Desenvolva soluções tecnológicas para problemas ambientais em um evento de 48 horas.",
    local: "Hub de Inovação, Campina Grande",
  },
  "webinar-ciencia-dados": {
    titulo: "Webinar: Carreira em Ciência de Dados",
    data: "5 de Julho, 2025",
    descricao:
      "Profissionais experientes compartilham dicas e insights sobre carreira em ciência de dados.",
    local: "Online (Zoom)",
  },
  "curso-dev-web": {
    titulo: "Curso de Desenvolvimento Web",
    data: "15-19 de Agosto, 2025",
    descricao:
      "Curso intensivo de 5 dias sobre desenvolvimento web moderno com React e Node.js.",
    local: "Laboratório de Computação, UFCG",
  },
  "simposio-computacao": {
    titulo: "Simpósio de Computação Aplicada",
    data: "10-12 de Setembro, 2025",
    descricao:
      "Apresentação de trabalhos acadêmicos e palestras sobre aplicações da computação em diversas áreas.",
    local: "Centro de Ciências e Tecnologia, UFCG",
  },
}

export default function InscricaoPage() {
  const router = useRouter()
  const [eventoKey, setEventoKey] = useState<string | null>(null)
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" })

  // Pegar a query string manualmente (sem useSearchParams)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const evento = params.get("evento")
      setEventoKey(evento || "webinar-ciencia-dados")
    }
  }, [])

  const evento = eventoKey ? eventosMock[eventoKey] : null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá os detalhes por e-mail.",
    })
    console.log("Inscrição:", form)
    router.push("/") // redirecionar se quiser
  }

  if (!evento) {
    return <p className="text-center mt-20">Carregando evento...</p>
  }

  return (
    <div className="flex flex-col min-h-screen py-12 px-4 md:px-6 lg:px-32">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{evento.titulo}</CardTitle>
          <CardDescription className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" /> {evento.data}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {evento.local}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome completo</Label>
              <Input name="nome" id="nome" value={form.nome} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" name="email" id="email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input type="tel" name="telefone" id="telefone" value={form.telefone} onChange={handleChange} />
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
              Confirmar Inscrição
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
