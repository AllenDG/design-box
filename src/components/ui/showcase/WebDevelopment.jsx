import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import data from "@/data/projectsData";

const WebDevelopment = () => {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.web.map((project, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-black transition-shadow hover:shadow-xl dark:border-white"
        >
          {/* Project Image */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-48 w-full object-cover"
          />

          {/* Project Title & Icons */}
          <div className="flex flex-col items-center p-4">
            <h3 className="mb-4 text-center text-xl font-semibold">
              {project.title}
            </h3>

            {/* Icon Links */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-transform hover:scale-110 dark:text-white"
                  title="GitHub Repository"
                >
                  <FaGithub size={32} />
                </a>
              )}
              {project.vercelUrl && (
                <a
                  href={project.vercelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-transform hover:scale-110 dark:text-white"
                  title="Live on Vercel"
                >
                  <SiVercel size={32} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebDevelopment;
