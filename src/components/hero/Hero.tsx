import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[600px] overflow-hidden bg-[url('/hero-edited.png')] bg-cover bg-center lg:min-h-[700px]"
    >
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-6xl items-center px-4 pt-20 lg:min-h-[700px] md:mb-8">
        <div className="flex max-w-xl flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
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
                "gap-2 px-8 h-12",
              )}
            >
              Agende sua Consulta
            </Link>
            <Link
              href="#servicos"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "gap-2 px-8 h-12",
              )}
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
