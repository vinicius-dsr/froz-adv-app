import { Phone, FileSearch, Gavel } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Agende sua Consulta",
    description:
      "Entre em contato conosco e agende uma análise inicial do seu caso sem compromisso.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Análise do Caso",
    description:
      "Nossa equipe de advogados irá analisar toda a documentação e orientá-lo sobre as melhores estratégias.",
  },
  {
    icon: Gavel,
    step: "03",
    title: "Resolução",
    description:
      "Atuamos de forma decisiva para resolver sua questão jurídica com eficiência e transparência.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-3 text-lg text-foreground/60">
            Um processo simples e transparente para cuidar do seu caso
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <item.icon className="size-7" />
              </div>
              <div className="mb-2 text-sm font-bold text-primary/40">
                Passo {item.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {item.description}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full bg-border md:block md:w-[calc(100%-4rem)] md:left-[calc(50%+2rem)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
