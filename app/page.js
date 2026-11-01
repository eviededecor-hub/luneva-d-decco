import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Works from "@/components/Works";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Panel-panel krem di atas latar marun */}
      <main className="flex flex-col gap-3 px-3 pt-3 md:gap-6 md:px-6 md:pt-6">
        <Hero />
        <Experience />
        <Works />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
