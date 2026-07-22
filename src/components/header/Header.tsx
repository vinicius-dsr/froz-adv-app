"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
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
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dashboardHref =
    session?.user?.role === "ADMIN" ? "/admin" : "/cliente";
  const dashboardLabel =
    session?.user?.role === "ADMIN" ? "Painel Admin" : "Área do Cliente";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-xs",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo Fróz Advogados"
            width={150}
            height={150}
          />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-shadow-2xs text-foreground/70 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href={session ? dashboardHref : "/login"}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "px-6 h-10",
            )}
          >
            {session ? dashboardLabel : "Entrar"}
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center md:hidden bg-primary/20 p-4 rounded-full"
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
            href={session ? dashboardHref : "/login"}
            onClick={() => setMobileOpen(false)}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full px-6 text-center",
            )}
          >
            {session ? dashboardLabel : "Entrar"}
          </Link>
        </div>
      )}
    </header>
  );
};
