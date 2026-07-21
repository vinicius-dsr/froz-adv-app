import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";

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
    {
      icon: MdOutlinePhone,
      name: "(91) 8477-3039",
      href: "https://wa.me/5591984773039",
    },
    {
      icon: MdOutlineEmail,
      name: "contato@frozadvogados.com.br",
      href: "mailto:contato@frozadvogados.com.br",
    },
    { icon: MdOutlineLocationOn, name: "Todo Territorio Nacional", href: "#" },
  ],
};

const social = [
  { icon: BsInstagram, href: "https://www.instagram.com/froz_advogados" },
  { icon: BsWhatsapp, href: "https://wa.me/5591984773039" },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/company/froz-advogados/",
  },
];

const isExternal = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-[#4a1a0a] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo-footer.png"
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                {...(isExternal(link.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <link.icon />
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
