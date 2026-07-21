"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Contato", href: "#contato" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/*<Link href="/" className="text-xl font-bold text-primary">
          Froz<span className="text-foreground">Adv</span>
        </Link>*/}

        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo Fróz Advogados"
            width={150}
            height={150}
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "px-6",
            )}
          >
            Entrar
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full px-6 text-center",
            )}
          >
            Entrar
          </Link>
        </div>
      )}
    </header>
  );
};
