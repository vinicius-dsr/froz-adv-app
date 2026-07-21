import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";

const footerLinks = {
  servicos: [
    { name: "Pessoa Física", href: "#servicos" },
    { name: "Pessoa Jurídica", href: "#servicos" },
    { name: "Consultoria", href: "#servicos" },
    { name: "Pareceres", href: "#servicos" },
    { name: "Cobranças", href: "#servicos" },
  ],
  empresa: [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ],
  contato: [
    { name: "(11) 99999-9999", href: "tel:+5511999999999" },
    {
      name: "contato@frozadvogados.com.br",
      href: "mailto:contato@frozadvogados.com.br",
    },
    { name: "Av. Paulista, 1000 - Sala 1201", href: "#" },
  ],
};

const social = [
  { icon: BsInstagram, href: "" },
  { icon: BsWhatsapp, href: "" },
  { icon: BsLinkedin, href: "" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-[#4a1a0a] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo Fróz Advogados"
                width={200}
                height={150}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Advocacia estratégica, atuação ética, moderna e focada em
              resultados.
            </p>
            <div className="flex items-center gap-4">
              {social.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <s.icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase text-white">
              Navegação
            </h4>
            {footerLinks.empresa.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase text-white">
              Serviços
            </h4>
            {footerLinks.servicos.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase text-white">
              Contato
            </h4>
            {footerLinks.contato.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <div>
            &copy; {new Date().getFullYear()} Froz Advogados. Todos os direitos
            reservados.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Termos de Uso
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
