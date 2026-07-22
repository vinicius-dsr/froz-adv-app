import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <SEO
        title="Política de Privacidade | Fróz Advogados"
        description="Conheça como a Fróz Advogados coleta, utiliza e protege suas informações pessoais."
        url="/politica-de-privacidade"
      />
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="mb-8 text-4xl font-bold text-foreground">
          Política de Privacidade
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Última atualização: Julho de 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-foreground/80">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Introdução
            </h2>
            <p>
              A Fróz Advogados ("escritório"), inscrita no CNPJ sob o nº
              [inserir CNPJ], com sede em [inserir endereço], preza pela
              proteção dos dados pessoais de seus clientes, visitantes e
              usuários. Esta Política de Privacidade descreve como coletamos,
              utilizamos, armazenamos e compartilhamos suas informações,
              em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei
              nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Dados Pessoais Coletados
            </h2>
            <p className="mb-3">
              Podemos coletar os seguintes dados pessoais:
            </p>
            <ul className="list-inside list-disc space-y-1 text-foreground/70">
              <li>Nome completo, CPF e RG;</li>
              <li>Endereço, e-mail e telefone;</li>
              <li>Dados profissionais e empresariais;</li>
              <li>Informações bancárias, quando necessárias;</li>
              <li>Dados de navegação (IP, cookies, dispositivo).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Finalidade do Tratamento
            </h2>
            <p className="mb-3">
              Os dados pessoais são tratados para as seguintes finalidades:
            </p>
            <ul className="list-inside list-disc space-y-1 text-foreground/70">
              <li>Prestação de serviços jurídicos;</li>
              <li>Comunicação sobre andamento de processos;</li>
              <li>Cumprimento de obrigações legais e regulatórias;</li>
              <li>Envio de informações sobre serviços contratados;</li>
              <li>Melhoria da experiência de navegação no site.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Seus dados poderão ser compartilhados apenas com: (i) órgãos
              judiciários e administrativos, quando necessário para a condução
              de processos; (ii) parceiros e prestadores de serviços que atuem
              sob instruções do escritório; (iii) autoridades competentes, em
              cumprimento de obrigação legal. O escritório não vende nem
              comercializa dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Armazenamento e Segurança
            </h2>
            <p>
              Seus dados são armazenados em servidores seguros com controle de
              acesso e medidas técnicas adequadas para protegê-los contra acesso
              não autorizado, alteração, divulgação ou destruição. O escritório
              mantém as medidas de segurança previstas na LGPD e no Marco Civil
              da Internet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Retenção de Dados
            </h2>
            <p>
              Os dados pessoais serão mantidos pelo tempo necessário para
              cumprir as finalidades para as quais foram coletados, observados
              os prazos legais e regulatórios aplicáveis. Após o término do
              tratamento, os dados serão eliminados ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Direitos do Titular
            </h2>
            <p className="mb-3">
              Nos termos da LGPD, você tem direito a:
            </p>
            <ul className="list-inside list-disc space-y-1 text-foreground/70">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos seus dados pessoais;</li>
              <li>Correção de dados incompletos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portabilidade dos dados;</li>
              <li>Eliminação dos dados tratados com consentimento;</li>
              <li>Informação sobre compartilhamento de dados;</li>
              <li>Revogação do consentimento.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Cookies
            </h2>
            <p>
              O site pode utilizar cookies para melhorar a experiência de
              navegação, analisar tráfego e personalizar conteúdo. Você pode
              configurar seu navegador para recusar cookies, embora isso possa
              afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Alterações nesta Política
            </h2>
            <p>
              O escritório reserva-se o direito de atualizar esta Política de
              Privacidade a qualquer momento. As alterações serão publicadas
              nesta página, com a data da última atualização.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              10. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta
              Política de Privacidade, entre em contato pelo e-mail{" "}
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
