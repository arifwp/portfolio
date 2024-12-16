import { ProjectInterface } from "../constants/projects";

interface Props {
  data: ProjectInterface;
}

export default function ProjectCard({ data }: Props) {
  return (
    <div className="w-full p-4 bg-softBlue drop-shadow-neo">
      <p className="text-xl md:text-2xl font-medium">{data.name}</p>

      <p className="mt-4 text-md md:text-lg">{data.description}</p>
    </div>
  );
}
