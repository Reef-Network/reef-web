import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { TrendingApps } from "../components/landing/TrendingApps";
import { Terminal } from "../components/landing/Terminal";
import { Footer } from "../components/layout/Footer";

export function LandingPage() {
  return (
    <div>
      <Hero />
      <Features />
      <TrendingApps />
      <Terminal />
      <Footer />
    </div>
  );
}
