"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-3 text-lg text-foreground/60">
            Estamos prontos para ajudá-lo. Agende sua consulta.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative hidden overflow-hidden rounded-2xl shadow-lg lg:block">
            <Image
              src="/image.jpg"
              alt="Escritório Froz Advogados"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg font-semibold text-white">
                Froz Advogados
              </p>
              <p className="text-sm text-white/80">
                Advocacia estratégica e moderna
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" placeholder="(11) 99999-9999" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Mensagem</Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Descreva brevemente seu caso..."
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              />
            </div>
            {submitted ? (
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center text-sm font-medium text-primary">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            ) : (
              <button
                type="submit"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2 self-start px-8",
                )}
              >
                <Send className="size-4" />
                Enviar Mensagem
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
