"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { MapPin } from "lucide-react"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica para enviar o formulário
    console.log(formData)
    toast({
      title: "Mensagem enviada",
      description: "Agradecemos seu contato. Responderemos em breve.",
    })
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: ""
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Contato
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Entre em contato com a Fundação COMP+ para dúvidas, sugestões ou parcerias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Fale Conosco</h2>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo para entrar em contato conosco. Responderemos sua mensagem o mais breve possível.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input 
                      id="nome" 
                      name="nome" 
                      placeholder="Seu nome completo" 
                      value={formData.nome}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="seu.email@exemplo.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input 
                      id="telefone" 
                      name="telefone" 
                      placeholder="(00) 00000-0000" 
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input 
                      id="assunto" 
                      name="assunto" 
                      placeholder="Assunto da mensagem" 
                      value={formData.assunto}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea 
                      id="mensagem" 
                      name="mensagem" 
                      placeholder="Digite sua mensagem" 
                      value={formData.mensagem}
                      onChange={handleChange}
                      required 
                      className="min-h-[150px]" 
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensagem</Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Informações de Contato</h2>
              <p className="text-muted-foreground">
                Você também pode entrar em contato conosco diretamente através dos seguintes canais:
              </p>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Endereço</h3>
                        <address className="not-italic text-muted-foreground">
                          <p>Av. Aprígio Veloso, 882</p>
                          <p>Campina Grande, PB</p>
                          <p>CEP: 58429-900</p>
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        \
