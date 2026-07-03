import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Trusted } from "@/components/trusted";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { Benefits } from "@/components/benefits";
import { Workflow } from "@/components/workflow";
import { Integrations } from "@/components/integrations";
import { Testimonials } from "@/components/testimonials";
import { Metrics } from "@/components/metrics";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trusted />
        <Features />
        <Showcase />
        <Benefits />
        <Workflow />
        <Integrations />
        <Testimonials />
        <Metrics />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
