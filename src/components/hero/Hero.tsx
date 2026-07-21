import Link from "next/link";
import { Scale, ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Scale className="size-4" />
              Advocacia de Excelência
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-4xl xl:text-5xl">
              Advocacia estratégica para buscar{" "}
              <span className="text-primary">soluções jurídicas</span> claras e
              eficientes.
            </h1>
            <p className="max-w-lg text-lg text-foreground/60">
              Atuação personalizada, transparente e focada em resultados para
              pessoas e empresas.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2 px-8",
                )}
              >
                Agende sua Consulta
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#servicos"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 px-8",
                )}
              >
                Nossos Serviços
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-primary/30">
                  <Scale className="size-24" strokeWidth={1} />
                  <span className="text-sm font-medium">Img do escritório</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-background p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-foreground/60">Casos resolvidos</div>
            </div>
            <div className="absolute -right-6 -top-6 rounded-xl border border-border bg-background p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-foreground/60">
                Anos de experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
