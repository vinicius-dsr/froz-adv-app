import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "@/components/auth";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden bg-[url('/image.jpg')] bg-cover bg-center backdrop-blur-sm lg:flex lg:items-center lg:justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-12 text-center">
          <Image
            src="/logo.png"
            alt="Logo Fróz Advogados"
            width={200}
            height={200}
          />
          <p className="max-w-sm text-lg text-white/80">
            Acesse sua área exclusiva para acompanhar seus casos e documentos
            importantes.
          </p>
        </div>
      </div>

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
  );
}
