import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Reasons } from "@/components/sections/Reasons";
import { Join } from "@/components/sections/Join";
import { Posters } from "@/components/sections/Posters";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Reasons />
      <About />
      <Posters />
      <Join />
      <Footer />
    </main>
  );
}
