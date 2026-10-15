import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { CaseStudy } from "@/components/sections/case-study";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <CaseStudy />
        <Experience />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
