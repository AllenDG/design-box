import { useState } from "react";

export default function TechStack() {
  const [isPaused, setIsPaused] = useState(false);

  const techStack = [
    { src: "https://via.placeholder.com/50?text=VS", alt: "VSCode" },
    {
      src: "https://via.placeholder.com/50?text=AP",
      alt: "Adobe Premiere Pro",
    },
    { src: "https://via.placeholder.com/50?text=CF", alt: "Canva" },
    { src: "https://via.placeholder.com/50?text=FG", alt: "Figma" },
    { src: "https://via.placeholder.com/50?text=PS", alt: "Adobe Photoshop" },
    { src: "https://via.placeholder.com/50?text=React", alt: "ReactJS" },
    { src: "https://via.placeholder.com/50?text=JS", alt: "JavaScript" },
    { src: "https://via.placeholder.com/50?text=HTML", alt: "HTML" },
    { src: "https://via.placeholder.com/50?text=CSS", alt: "CSS" },
    { src: "https://via.placeholder.com/50?text=Tailwind", alt: "TailwindCSS" },
    { src: "https://via.placeholder.com/50?text=Firebase", alt: "Firebase" },
  ];

  // Duplicate the array for seamless looping
  const loopingTechStack = [...techStack, ...techStack];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)} // Pause animation on hover
      onMouseLeave={() => setIsPaused(false)} // Resume animation on mouse leave
    >
      <div
        className={`flex w-max items-center gap-6 transition-transform duration-300 ${
          isPaused ? "" : "animate-marquee"
        }`}
      >
        {loopingTechStack.map((tech, index) => (
          <div key={index} className="group flex flex-col items-center gap-2">
            <img
              src={tech.src}
              alt={tech.alt}
              className="h-16 w-16 transform rounded-lg shadow-md transition-transform group-hover:rotate-3 group-hover:scale-110"
            />
            <p className="text-sm font-medium text-gray-700 group-hover:text-blue-500">
              {tech.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
