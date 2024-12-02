// LandingPage.jsx
import About from "@/components/ui/landing/About";
import Hero from "@/components/ui/landing/Hero"; // Import the Hero component
import Offer from "@/components/ui/landing/Offer";
import TechStack from "@/components/ui/landing/TechStack";

export default function LandingPage() {
  return (
    <main className="mx-auto w-full max-w-5xl pt-10">
      <div className="grid grid-cols-1 gap-12 p-4">
        {/* Hero Section */}
        <Hero />

        <TechStack />
        <About />
        <Offer />
      </div>
    </main>
  );
}
