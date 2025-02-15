import { HeroSection } from "@/components/Hero";
import { AboutSection } from "@/components/About";
import { PrayerSection } from "@/components/Prayer";
import Posts from "@/components/Posts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="prayer">
        <PrayerSection />
      </section>
      <section id="post">
        <Posts />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
