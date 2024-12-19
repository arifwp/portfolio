import Link from "next/link";
import { ProjectInterface } from "../constants/projects";
import NameCard from "./NameCard";

interface Props {
  data: ProjectInterface;
}

export default function ProjectCard({ data }: Props) {
  return (
    <Link
      href={`/projects/${data.slug}`}
      className="w-full p-4 bg-softBlue drop-shadow-neo cursor-pointer"
    >
      <p className="text-xl md:text-2xl font-bold">{data.name}</p>

      <p className="mt-4 text-md md:text-lg line-clamp-2">{data.description}</p>

      <div className="w-full mt-4 flex flex-row flex-wrap gap-2">
        {data.techStack.map((item, index) => (
          <NameCard key={item.id} name={item.name} index={index} />
        ))}
      </div>
    </Link>
  );
}
