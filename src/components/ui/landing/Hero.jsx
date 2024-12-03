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

      {/* Right Section with Resized Image */}
      <div className="w-full max-w-lg">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/test-2ac5c.appspot.com/o/Screenshot_20241203-121607.jpg?alt=media&token=675f0c84-a56d-495b-8691-303f280e431d" // Replace with your actual image URL
          alt="Freelance Visual"
          className="h-50 w-full rounded-lg object-cover shadow-lg" // Resized image with fixed height
        />
      </div>
    </section>
  );
}
