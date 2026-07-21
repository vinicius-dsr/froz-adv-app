import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Froz Advogados",
  image: "https://frozadvogados.com.br/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paulista, 1000 - Sala 1201",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+55-11-99999-9999",
  email: "contato@frozadvogados.com.br",
  url: "https://frozadvogados.com.br",
  priceRange: "$$",
  areaServed: "São Paulo, Brasil",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Jurídicos",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Civil" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Trabalhista" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Empresarial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria Jurídica" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cobrança de Dívidas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Parecer Jurídico" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Froz Advogados | Advocacia Estratégica em São Paulo"
        description="Assessoria jurídica completa em São Paulo. Advogados especializados em direito civil, trabalhista e empresarial. Agende sua consulta."
        url="/"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <Banner />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
