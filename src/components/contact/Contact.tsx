"use client";

import { useState } from "react";
import { Send, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
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
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border/50 bg-background p-8">
              <p className="text-lg leading-relaxed text-foreground/80 italic">
                &ldquo;Cada caso merece atenção personalizada. Entre em contato
                e descubra como podemos ajudá-lo a encontrar a melhor solução
                jurídica.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  FA
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Froz Advogados
                  </p>
                  <p className="text-xs text-foreground/50">
                    Advocacia Estratégica
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background px-4 py-3">
                <Phone className="size-4 text-primary" />
                <span className="text-sm text-foreground/70">
                  (91) 8477-3039
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background px-4 py-3">
                <Mail className="size-4 text-primary" />
                <span className="text-sm text-foreground/70">
                  contato@froz...
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background px-4 py-3">
                <Clock className="size-4 text-primary" />
                <span className="text-sm text-foreground/70">
                  Seg - Sex, 8h - 18h
                </span>
              </div>
            </div>

            <Link
              href="https://wa.me/5591984773039"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "gap-2",
              )}
            >
              Fale pelo WhatsApp
              <ArrowRight className="size-4" />
            </Link>
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
