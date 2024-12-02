// Hero.jsx
import Typewriter from "typewriter-effect";
import Buttons from "@/components/ui/landing/Buttons"; // Import the Buttons component

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-between gap-8 md:flex-row">
      {/* Left Section with Typewriter Effect */}
      <div className="max-w-lg text-left">
        <h1 className="mb-4 text-4xl font-extrabold">
          Freelance{" "}
          <span className="text-secondary-300">
            <Typewriter
              options={{
                strings: ["Graphic Designer", "Web Developer", "Video Editor"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 1500,
              }}
            />
          </span>
        </h1>
        <p className="mb-6 text-lg">
          I am a freelance professional offering high-quality services to help
          you bring your ideas to life. Let&apos;s work together on your next
          project!
        </p>
        <Buttons />
      </div>

      {/* Right Section with Image */}
      <div className="w-full max-w-md">
        <img
          src="https://via.placeholder.com/400" // Replace with your actual image URL
          alt="Freelance Visual"
          className="h-auto w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
