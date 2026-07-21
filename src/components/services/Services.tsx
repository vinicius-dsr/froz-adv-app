import { Building2, Users, Briefcase, Handshake, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Direito Empresarial",
    description:
      "Assessoria completa para empresas, desde a constituição até questões contratuais e societárias.",
  },
  {
    icon: Users,
    title: "Direito Civil",
    description:
      "Resolução de conflitos familiares, contratos, indenizações e questões patrimoniais.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Defesa dos direitos do trabalhador e do empregador em reclamações e negociações coletivas.",
  },
  {
    icon: Handshake,
    title: "Mediação e Conciliação",
    description:
      "Resolução alternativa de conflitos de forma rápida e menos onerosa que o processo judicial.",
  },
  {
    icon: FileText,
    title: "Consultoria Jurídica",
    description:
      "Orientação preventiva para evitar problemas legais e proteger seus interesses.",
  },
  {
    icon: Shield,
    title: "Direito Digital",
    description:
      "Proteção de dados, compliance digital e questões relacionadas à tecnologia.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-3 text-lg text-foreground/60">
            Oferecemos soluções jurídicas completas para atender suas
            necessidades
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/50 bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
