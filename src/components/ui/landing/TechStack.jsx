import { motion } from "framer-motion";
import techStack from "@/data/techStack";

export default function TechStack() {
  return (
    <motion.div
      className="relative w-full overflow-hidden py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center gap-6"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10, // Adjust the duration for marquee speed
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <motion.img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className="h-12 w-12 transform rounded-lg"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
