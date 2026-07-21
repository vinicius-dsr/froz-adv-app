"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <div className="grid min-h-screen grid-cols-1 pt-16 lg:grid-cols-2">
        <div className="relative hidden bg-[url('/image.jpg')] bg-cover bg-center backdrop-blur-sm lg:flex lg:items-center lg:justify-center">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center gap-6 px-12 text-center">
            <Image
              src="/logo.png"
              alt="Logo Fróz Advogados"
              width={200}
              height={200}
            />
            <p className="max-w-sm text-lg text-white/80">
              Crie sua conta e tenha acesso a todos os nossos serviços jurídicos
              de forma prática e segura.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold text-foreground">
                  Crie sua conta
                </h1>
                <p className="text-sm text-foreground/60">
                  Preencha seus dados para começar
                </p>
              </div>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/60"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="confirmPassword">Confirmar senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "mt-2 w-full",
                  )}
                >
                  Cadastrar
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-foreground/40">
                    ou
                  </span>
                </div>
              </div>

              <p className="text-center text-sm text-foreground/60">
                Já tem uma conta?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary hover:underline"
                >
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
