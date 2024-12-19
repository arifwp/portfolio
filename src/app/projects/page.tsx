import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { projectData } from "../constants/projects";

export default function ProjectsPage() {
  return (
    <div className="w-full p-12 flex flex-col justify-center items-center">
      <Title title="Projects" />

      <div className="w-full mt-6 flex flex-col gap-4">
        {projectData.map((item) => (
          <ProjectCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
