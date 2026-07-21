import Head from "next/head";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "lucide-react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  return { props: {} };
};

export default function ClienteDashboard() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Área do Cliente | Froz Advogados</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-muted/30">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="size-8" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Área do Cliente
          </h1>
          <p className="text-sm text-foreground/60">
            Conteúdo em breve
          </p>
        </div>
      </div>
    </>
  );
}
