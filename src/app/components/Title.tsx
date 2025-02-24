import clsx from "clsx";

interface Props {
  title: string;
  className?: string;
}

export default function Title({ title, className }: Props) {
  return (
    <div
      className={clsx(
        "w-fit px-12 py-2 bg-hardYellow drop-shadow-neo pointer-events-none text-center",
        className
      )}
    >
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
    </div>
  );
}
