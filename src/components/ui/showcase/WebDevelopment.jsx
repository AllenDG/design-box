import data from "@/data/projectsData";

const WebDevelopment = () => {
  return (
    <div className="grid mx-auto max-w-6xl px-6 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.web.map((project, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebDevelopment;
