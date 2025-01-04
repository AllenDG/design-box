import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/projectsData";

const VideoEditing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsOpen(false);
  };

  // Animation Variants
  const gridItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div>
      {/* Video Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {data.videoEditing.map((project, index) => (
          <motion.div
            key={index}
            className="w-64"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridItemVariants}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="h-full w-full rounded-lg"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => openModal(project.videoUrl)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-2xl font-bold text-white opacity-0 transition-opacity hover:opacity-100"
              >
                ▶
              </button>
            </div>
            <h3 className="mt-4 text-center text-lg font-semibold">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[60%] w-[50%]">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-50 text-3xl font-bold text-white hover:text-gray-400"
              >
                &times;
              </button>
              {/* Video */}
              <iframe
                src={selectedVideo}
                title="Selected Video"
                className="h-full w-full rounded-lg"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoEditing;
