import Image from "next/image";
import { SkillInterface } from "../constants/experience";

interface Props {
  data: SkillInterface;
}

export default function SkillCircle({ data }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-fit p-2 mx-auto bg-white rounded-full border-2 border-black overflow-hidden">
        <div className="w-12 h-12 relative">
          <Image
            className="object-contain"
            src={data.logo}
            alt={data.name}
            fill
          />
        </div>
      </div>

      <p className="text-xs md:text-sm font-medium text-center">{data.name}</p>
    </div>
  );
}
