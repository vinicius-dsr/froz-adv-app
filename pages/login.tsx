import Link from "next/link";
import { Scale } from "lucide-react";
import { LoginForm } from "@/components/auth";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden bg-gradient-to-br from-primary/90 to-primary lg:flex lg:items-center lg:justify-center">
        <div className="absolute inset-0 bg-[url('/placeholder-login.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-12 text-center text-white">
          <Scale className="size-16" strokeWidth={1} />
          <h2 className="text-3xl font-bold">Froz Advogados</h2>
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
            className="mb-8 inline-flex items-center gap-2 text-xl font-bold text-primary lg:hidden"
          >
            <Scale className="size-6" />
            Froz<span className="text-foreground">Adv</span>
          </Link>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
