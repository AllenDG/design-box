import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  // Refs for scroll detection
  const firstRowLeftRef = useRef(null);
  const secondRowRightRef = useRef(null);

  // Detect if the components are in view
  const isFirstRowLeftInView = useInView(firstRowLeftRef, { once: true });
  const isSecondRowRightInView = useInView(secondRowRightRef, { once: true });

  return (
    <div className="mt-28 grid gap-4 md:grid-cols-2 md:grid-rows-2">
      {/* First Row - First Column (Aligned to the left) */}
      <motion.div
        ref={firstRowLeftRef}
        className="mb-20 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isFirstRowLeftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold">Get the website you deserve</h1>
        <p className="mb-4 mt-4 text-lg">
          Transform your ideas into stunning online experiences with modern,
          responsive designs tailored just for you.
        </p>
        <motion.button
          className="rounded-lg border border-secondary-100 px-4 py-2 text-sm font-bold text-secondary-600 transition duration-300 hover:bg-secondary-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-secondary-800 dark:hover:text-secondary-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Work Together
        </motion.button>
      </motion.div>

      {/* Empty space - Second Column */}
      <motion.div
        className="text-right md:col-start-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Add content here if needed */}
      </motion.div>

      {/* Empty space - First Column */}
      <motion.div
        className="text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Add content here if needed */}
      </motion.div>

      {/* Second Row - Second Column */}
      <motion.div
        ref={secondRowRightRef}
        className="text-right md:col-start-2"
        initial={{ opacity: 0, x: 50 }}
        animate={isSecondRowRightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold">Design your project</h1>
        <p className="mb-4 mt-4 text-lg">
          Bring your visions to life with seamless functionality and
          user-friendly interfaces, designed to make an impact.
        </p>
        <motion.button
          className="rounded-lg border border-secondary-100 px-4 py-2 text-sm font-bold text-secondary-600 transition duration-300 hover:bg-secondary-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-secondary-800 dark:hover:text-secondary-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Work Together
        </motion.button>
      </motion.div>
    </div>
  );
}
