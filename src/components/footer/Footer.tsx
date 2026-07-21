import Link from "next/link";
import { Scale } from "lucide-react";

const footerLinks = {
  servicos: [
    { name: "Direito Civil", href: "#servicos" },
    { name: "Direito Trabalhista", href: "#servicos" },
    { name: "Direito Empresarial", href: "#servicos" },
    { name: "Consultoria Jurídica", href: "#servicos" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#" },
    { name: "Nossa Equipe", href: "#" },
    { name: "Casos de Sucesso", href: "#" },
    { name: "Blog", href: "#" },
  ],
  contato: [
    { name: "(11) 99999-9999", href: "tel:+5511999999999" },
    { name: "contato@frozadvogados.com.br", href: "mailto:contato@frozadvogados.com.br" },
    { name: "Av. Paulista, 1000 - Sala 1201", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
              <Scale className="size-6" />
              Froz<span className="text-foreground">Adv</span>
            </Link>
            <p className="text-sm leading-relaxed text-foreground/60">
              Advocacia de excelência com mais de 15 anos de experiência.
              Protegemos seus direitos com dedicação e transparência.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Serviços</h4>
            {footerLinks.servicos.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Empresa</h4>
            {footerLinks.empresa.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Contato</h4>
            {footerLinks.contato.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} Froz Advogados. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};
