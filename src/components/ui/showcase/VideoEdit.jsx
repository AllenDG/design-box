
import data from "@/data/projectsData";

const VideoEditing = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {data.videoEditing.map((project, index) => (
        <div key={index} className="w-64">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-center mt-4 text-lg font-semibold">{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoEditing;
