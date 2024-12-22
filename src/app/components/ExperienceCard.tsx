import Image from "next/image";
import { ExperienceInterface } from "../constants/experience";
import { projectData } from "../constants/projects";
import NameCard from "./NameCard";

interface Props {
  data: ExperienceInterface;
}

export default function ExperienceCard({ data }: Props) {
  return (
    <div className="w-full p-4 gap-4 bg-softPurple drop-shadow-neo flex flex-col md:flex-row text-center md:text-start pointer-events-none">
      <div className="w-[60px] h-[60px] relative mx-auto md:mx-0 my-auto">
        <Image
          className="aspect-square rounded-md object-contain overflow-hidden rounded-neo"
          src={data.companyLogo}
          alt={data.title}
          fill
          sizes="(max-width: 768px) 60px, (max-width: 1024px) 60px, 60px"
        />
      </div>

      <div className="flex flex-col gap-2 md:gap-0">
        <p className="text-xs md:text-sm font-medium">{`${data.date} | ${data.location}`}</p>

        <p className="text-lg font-semibold">{data.title}</p>

        <div className="w-full mt-2 gap-2 flex flex-row justify-center md:justify-start">
          {projectData
            .filter((item) => data.relatedProjects.includes(item.id))
            .map((project, index) => (
              <NameCard
                key={project.id}
                name={project.name}
                index={index}
                className="text-xl"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
