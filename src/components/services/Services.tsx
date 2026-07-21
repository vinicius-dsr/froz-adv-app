import Link from "next/link";
import { ArrowRight, Gavel, FilePlus, Building2, Banknote, MessageCircle, FileSearch } from "lucide-react";

const services = [
  {
    icon: Gavel,
    title: "Tenho um processo",
    description: "Acompanhamento processual, defesa e representação judicial em todas as etapas.",
    href: "#",
  },
  {
    icon: FilePlus,
    title: "Quero entrar com uma ação",
    description: "Análise do seu caso e propositura da ação mais adequada para defender seus direitos.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Sou empresa",
    description: "Assessoria jurídica completa para empresas: contratos, compliance e contencioso.",
    href: "#",
  },
  {
    icon: Banknote,
    title: "Quero cobrar dívida",
    description: "Cobrança judicial e extrajudicial de dívidas com eficiência e agilidade.",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "Quero uma consulta simples",
    description: "Orientação jurídica pontual para esclarecer dúvidas e tomar decisões seguras.",
    href: "#",
  },
  {
    icon: FileSearch,
    title: "Preciso de um parecer jurídico",
    description: "Análise técnica e fundamentada sobre questões jurídicas específicas.",
    href: "#",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Como podemos ajudar?
          </h2>
          <p className="mt-3 text-lg text-foreground/60">
            Escolha a situação que melhor descreve sua necessidade:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col gap-4 rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:gap-2.5">
                Ver soluções
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
