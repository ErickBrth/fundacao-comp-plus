"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { Textarea } from "@/components/ui/textarea"

export default function InscricaoBolsaPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    matricula: "",
    curso: "",
    motivacao: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", form)
    toast({
      title: "Inscrição enviada com sucesso!",
      description: "Você receberá um e-mail de confirmação em breve.",
    })
    setForm({
      nome: "",
      email: "",
      matricula: "",
      curso: "",
      motivacao: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen py-12 px-4 md:px-6 lg:px-32">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Inscrição para Bolsa de Estudos</CardTitle>
          <CardDescription>
            Preencha o formulário abaixo para se candidatar ao programa de bolsas da Fundação COMP+.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail institucional</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="matricula">Matrícula</Label>
              <Input
                id="matricula"
                name="matricula"
                value={form.matricula}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="curso">Curso</Label>
              <Input
                id="curso"
                name="curso"
                value={form.curso}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="motivacao">Por que você deseja a bolsa?</Label>
              <Textarea
                id="motivacao"
                name="motivacao"
                value={form.motivacao}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Enviar Inscrição
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
