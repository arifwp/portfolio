import ExperienceCard from "../components/ExperienceCard";
import SkillCircle from "../components/SkillCircle";
import { experienceData, skillData } from "../constants/experience";

export default function ExperiencesPage() {
  return (
    <div className="w-full p-12 flex flex-col">
      <div className="w-full flex flex-col">
        <p className="text-2xl md:text-3xl font-bold">Skills</p>

        <p className="mt-1 text-md md:text-lg text-black">
          Lemme show you about my abilities
        </p>

        {/* <div className="w-full mt-6 flex gap-4 flex-wrap justify-center items-center">
          {skillData.map((item) => (
            <SkillCircle key={item.id} data={item} />
          ))}
        </div> */}

        <div className="w-full mt-6 grid gap-4 grid-cols-3 md:grid-cols-5 justify-center items-center">
          {skillData.map((item) => (
            <SkillCircle key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-full mt-12 flex flex-col">
        <p className="text-2xl md:text-3xl font-bold">Experiences</p>

        <p className="mt-1 text-md md:text-lg text-black">
          My Journey Through the Tech World
        </p>

        <div className="w-full mt-6 flex flex-col gap-4">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
