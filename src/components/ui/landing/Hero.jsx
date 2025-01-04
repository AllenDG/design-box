import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Typewriter from "typewriter-effect";
import Buttons from "@/components/ui/landing/Buttons"; // Import the Buttons component

export default function Hero() {
  // Refs for detecting scroll
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  // Detect if sections are in view
  const isLeftSectionInView = useInView(leftSectionRef, { once: true });
  const isRightSectionInView = useInView(rightSectionRef, { once: true });

  return (
    <section className="flex flex-col items-center justify-between gap-8 md:flex-row">
      {/* Left Section with Typewriter Effect */}
      <motion.div
        ref={leftSectionRef}
        className="max-w-lg text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isLeftSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Buttons />
        </motion.div>
      </motion.div>

      {/* Right Section with Static Image */}
      <motion.div
        ref={rightSectionRef}
        className="w-full max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={isRightSectionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/test-2ac5c.appspot.com/o/Screenshot_20241203-121607.jpg?alt=media&token=675f0c84-a56d-495b-8691-303f280e431d" // Replace with your actual image URL
          alt="Freelance Visual"
          className="h-50 w-full rounded-lg object-cover shadow-lg" // Resized image with fixed height
        />
      </motion.div>
    </section>
  );
}
