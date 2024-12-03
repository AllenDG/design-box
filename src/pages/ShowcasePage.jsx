import { useState } from "react";
import GraphicDesign from "@/components/ui/showcase/GraphicDesign";
import VideoEditing from "@/components/ui/showcase/VideoEdit";
import WebDevelopment from "@/components/ui/showcase/WebDevelopment";

const ShowcasePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("graphicDesign");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-center gap-4">
        <button
          className={`rounded-md px-6 py-2 text-sm font-light ${
            selectedCategory === "graphicDesign"
              ? "bg-secondary-200 text-white"
              : "bg-primary-200 text-gray-700"
          }`}
          onClick={() => setSelectedCategory("graphicDesign")}
        >
          Graphic Design
        </button>
        <button
          className={`rounded-md px-6 py-2 text-sm font-thin ${
            selectedCategory === "videoEditing"
              ? "bg-secondary-200 text-white"
              : "bg-primary-200 text-gray-700"
          }`}
          onClick={() => setSelectedCategory("videoEditing")}
        >
          Video Editing
        </button>
        <button
          className={`rounded-md px-6 py-2 text-sm font-thin ${
            selectedCategory === "web"
              ? "bg-secondary-200 text-white"
              : "bg-primary-200 text-gray-700"
          }`}
          onClick={() => setSelectedCategory("web")}
        >
          Web Development
        </button>
      </div>

      {/* Display Projects Based on Category */}
      {selectedCategory === "graphicDesign" && <GraphicDesign />}
      {selectedCategory === "videoEditing" && <VideoEditing />}
      {selectedCategory === "web" && <WebDevelopment />}
    </div>
  );
};

export default ShowcasePage;
