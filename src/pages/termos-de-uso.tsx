import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function TermosDeUso() {
  return (
    <>
      <SEO
        title="Termos de Uso | Fróz Advogados"
        description="Leia os termos e condições de uso do site da Fróz Advogados."
        url="/termos-de-uso"
      />
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-8 text-4xl font-bold text-foreground">
          Termos de Uso
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Última atualização: Julho de 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar o site da Fróz Advogados
              (frozadvogados.com.br), você concorda com estes Termos de Uso. Se
              não concordar com algum dos termos, solicitamos que não utilize o
              site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Natureza das Informações
            </h2>
            <p>
              O conteúdo disponibilizado neste site tem caráter meramente
              informativo e educacional, não constituindo assessoria jurídica
              personalizada. O uso das informações aqui disponibilizadas é de
              responsabilidade do usuário. Para orientação jurídica específica,
              recomendamos o contato direto com nossos advogados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo deste site — incluindo textos, logotipos,
              imagens, gráficos, código-fonte e design — é de propriedade da
              Fróz Advogados ou de seus licenciados, sendo protegido pelas
              leis de propriedade intelectual brasileiras. É vedada a
              reprodução, distribuição, modificação ou uso comercial de qualquer
              conteúdo sem autorização prévia e por escrito.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Uso do Site
            </h2>
            <p className="mb-3">O usuário se compromete a:</p>
            <ul className="list-inside list-disc space-y-1 text-foreground/70">
              <li>
                Utilizar o site de forma lícita e em conformidade com estes
                Termos;
              </li>
              <li>
                Não interferir no funcionamento do site ou em seus servidores;
              </li>
              <li>
                Não tentar acessar áreas restritas sem autorização;
              </li>
              <li>
                Não utilizar o site para fins fraudulentos ou ilícitos.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Links Externos
            </h2>
            <p>
              O site pode conter links para páginas de terceiros. A Fróz
              Advogados não se responsabiliza pelo conteúdo, políticas de
              privacidade ou práticas de sites externos. O acesso a esses links
              é de inteira responsabilidade do usuário.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Isenção de Responsabilidade
            </h2>
            <p>
              A Fróz Advogados não garante a disponibilidade ininterrupta do
              site, nem se responsabiliza por danos diretos ou indiretos
              decorrentes do uso das informações nele contidas. O escritório
              reserva-se o direito de modificar, suspender ou descontinuar
              qualquer parte do site a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Legislação Aplicável e Foro
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República
              Federativa do Brasil. Fica eleito o foro da Comarca de Belém do
              Pará para dirimir quaisquer questões oriundas destes Termos, com
              renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Alterações nestes Termos
            </h2>
            <p>
              A Fróz Advogados reserva-se o direito de alterar estes Termos de
              Uso a qualquer momento, sem aviso prévio. As alterações entram em
              vigor imediatamente após a publicação nesta página. O uso
              continuado do site após as alterações constitui aceitação dos
              novos termos.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato
              pelo e-mail{" "}
              <span className="font-medium text-primary">
                contato@frozadvogados.com.br
              </span>{" "}
              ou pelo telefone{" "}
              <span className="font-medium text-primary">
                (91) 8477-3039
              </span>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
