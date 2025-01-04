import { motion } from "framer-motion";
import data from "@/data/projectsData"; // Import the data

const GraphicDesign = () => {
  // Animation variants for the grid items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto max-w-6xl px-6">
      {/* Instagram-style grid layout */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
        {data.graphicDesign.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg border border-black dark:border-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-contain"
              style={{ aspectRatio: "1 / 1" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesign;
