import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Portfolio from "@/components/Portfolio";
import Analog from "@/components/Analog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Portfolio />
        <Analog />
      </main>
      <Footer />
    </>
  );
}
