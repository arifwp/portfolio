import { TimelineInterface } from "../constants/timeline";

interface Props {
  data: TimelineInterface;
}

export default function TimelineCard({ data }: Props) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-4 h-4 bg-hardOrange rounded-full -left-[9px]"></div>
      <p className="mb-1 text-sm text-black">{data.date}</p>
      <h3 className="text-xl font-semibold text-black">{data.title}</h3>
      <p className="mb-4 text-md text-black">{data.description}</p>
    </li>
  );
}
