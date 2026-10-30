import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cover from "@/components/Cover";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cover />
        <Works />
        <Services />
      </main>
      <Footer />
    </>
  );
}
