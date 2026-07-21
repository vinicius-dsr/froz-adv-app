import { Shield } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Shield className="size-8" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          Painel Administrativo
        </h1>
        <p className="text-sm text-foreground/60">
          Conteúdo em breve
        </p>
      </div>
    </div>
  );
}
