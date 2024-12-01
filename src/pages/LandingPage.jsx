import Typewriter from "typewriter-effect";

export default function LandingPage() {
  return (
    <div className="flex h-screen items-center justify-center px-6 py-8 gap-16">
      {/* Left Section with Text and Buttons */}
      <div className="max-w-lg text-left">
        {/* Main Heading with Typewriter Effect */}
        <h1 className="mb-4 text-4xl font-extrabold text-gray-800">
          Freelance{" "}
          <span className="text-blue-500">
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

        {/* Subheading Paragraph */}
        <p className="mb-6 text-lg text-gray-600">
          I am a freelance professional offering high-quality services to help
          you bring your ideas to life. Let&apos;s work together on your next
          project!
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Learn More Button */}
          <button
            className="rounded-lg bg-blue-500 px-6 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-blue-600"
            onClick={() => (window.location.href = "#learn-more")}
          >
            Learn More
          </button>

          {/* Portfolio Button */}
          <button
            className="rounded-lg bg-gray-800 px-6 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-gray-900"
            onClick={() => (window.location.href = "#portfolio")}
          >
            Portfolio
          </button>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="w-full max-w-md">
        <img
          src="https://via.placeholder.com/400" // Replace with your actual image URL
          alt="Freelance Visual"
          className="h-auto w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
