import ProjectCard from "../components/ProjectCard";
import { projectData } from "../constants/projects";

export default function ProjectsPage() {
  return (
    <div className="w-full p-12 flex flex-col">
      <p className="text-2xl md:text-3xl font-bold">Projects</p>
      <p className="mt-1 text-md md:text-lg text-black">
        My Journey Through the Tech World
      </p>

      <div className="w-full mt-6 flex flex-col gap-4">
        {projectData.map((item) => (
          <ProjectCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
