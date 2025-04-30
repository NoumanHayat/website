import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanySummary from "@/components/CompanySummary";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <CompanySummary />
        </ScrollReveal>
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Cta />
        </ScrollReveal>
        <ScrollReveal>
          <Team />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
