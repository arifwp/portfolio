import { ProjectInterface } from "../constants/projects";

interface Props {
  data: ProjectInterface;
  index: number;
}

export default function RelatedProjectCard({ data, index }: Props) {
  const colorKeys = ["hardYellow", "hardBlue"];

  const getColorClass = (index: number) => {
    const colorKey = colorKeys[index % colorKeys.length];
    return `bg-${colorKey}`;
  };

  return (
    <div
      className={`w-fit p-1 rounded-md border-2 border-black ${getColorClass(
        index
      )}`}
    >
      <p className="text-xs md:text-sm">{data.name}</p>
    </div>
  );
}
