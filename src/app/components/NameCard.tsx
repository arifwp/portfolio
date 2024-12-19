import clsx from "clsx";

interface Props {
  name: string;
  index: number;
  className?: string;
}

export default function NameCard({ name, index, className }: Props) {
  const colorKeys = [
    "bg-hardBlue",
    "bg-hardYellow",
    "bg-hardGreen",
    "bg-hardRed",
    "bg-hardPurple",
    "bg-hardOrange",
  ];

  const getColorClass = (index: number) => colorKeys[index % colorKeys.length];

  return (
    <div
      className={clsx(
        `w-fit p-1 rounded-md border-2 border-black ${getColorClass(index)}`,
        className
      )}
    >
      <p className="text-xs font-medium">{name}</p>
    </div>
  );
}
