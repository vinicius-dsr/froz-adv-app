import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
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
