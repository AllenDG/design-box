import techStack from "@/data/techStack";

export default function TechStack() {
  return (
    <div className="relative w-full overflow-hidden  py-4">
      <div className="animate-marquee flex items-center gap-6">
        {[...techStack, ...techStack].map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className="h-12 w-12 transform rounded-lg transition-transform hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}
