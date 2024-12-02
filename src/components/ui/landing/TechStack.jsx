import techStack from "@/data/techStack";

export default function TechStack() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-marquee flex items-center gap-6">
        {techStack.map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className="h-16 w-16 transform rounded-lg shadow-md transition-transform hover:scale-110"
          />
        ))}
        {techStack.map((tech, index) => (
          <img
            key={`duplicate-${index}`}
            src={tech.src}
            alt={tech.alt}
            className="h-16 w-16 transform rounded-lg shadow-md transition-transform hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}
