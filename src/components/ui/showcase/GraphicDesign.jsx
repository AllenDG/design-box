import data from "@/data/projectsData"; // Import the data

const GraphicDesign = () => {
  return (
    <div className="ontainer mx-auto max-w-6xl px-6">
      {/* Instagram-style grid layout */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
        {data.graphicDesign.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "1 / 1" }} // Make the images square
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesign;
