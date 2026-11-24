import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
