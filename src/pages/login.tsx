import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "@/components/auth";
import { SEO } from "@/components/seo";

export default function LoginPage() {
  return (
    <>
      <SEO
        title="Entrar | Froz Advogados"
        description="Acesse sua área exclusiva na Froz Advogados para acompanhar seus casos e documentos."
        url="/login"
      />
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden bg-[url('/image.jpg')] bg-cover bg-center backdrop-blur-sm lg:block" />

        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Voltar
            </Link>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
