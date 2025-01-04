import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaDollarSign,
  FaShieldAlt,
  FaUserGraduate,
  FaUndo,
  FaRocket,
} from "react-icons/fa";

export default function Offer() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      {/* Title */}
      <motion.h1
        className="mb-8 text-center text-4xl font-extrabold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Why Me?
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            icon: <FaRegLightbulb className="mx-auto text-4xl" />,
            title: "Modern Design",
            text: "Stay ahead with sleek, modern designs that make your website stand out.",
          },
          {
            icon: <FaDollarSign className="mx-auto text-4xl" />,
            title: "Affordable",
            text: "Get high-quality designs at an affordable price, perfect for your budget.",
          },
          {
            icon: <FaShieldAlt className="mx-auto text-4xl" />,
            title: "Trusted",
            text: "Rely on my proven track record of satisfied clients and successful projects.",
          },
          {
            icon: <FaUserGraduate className="mx-auto text-4xl" />,
            title: "Student Friendly",
            text: "Offering designs tailored to meet the unique needs of students and young professionals.",
          },
          {
            icon: <FaUndo className="mx-auto text-4xl" />,
            title: "Free Revision",
            text: "Enjoy free revisions until you&apos;re completely happy with the final design.",
          },
          {
            icon: <FaRocket className="mx-auto text-4xl" />,
            title: "Fast",
            text: "Get your project completed quickly without compromising quality.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg border border-secondary-200 p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {item.icon}
            <h2 className="mt-4 text-2xl font-bold">{item.title}</h2>
            <p className="text-md mt-4">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
