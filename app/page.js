import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Services />
      </main>
      <Footer />
    </>
  );
}
