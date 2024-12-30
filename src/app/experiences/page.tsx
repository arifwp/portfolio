import { Metadata } from "next";
import ExperienceCard from "../components/ExperienceCard";
import SkillCircle from "../components/SkillCircle";
import Title from "../components/Title";
import { experienceData, skillData } from "../constants/experience";

export const metadata: Metadata = {
  title: "Experiences | Arif Wahyu Prasetyo",
  description:
    "Explore the professional journey and career experiences of Arif Wahyu Prasetyo. Discover projects, achievements, and the skills gained throughout his path as a Fullstack Developer",
  icons: {
    icon: "/images/profile-about.png",
    shortcut: "/images/profile-about.png",
    apple: "/images/profile-about.png",
  },
  openGraph: {
    title: "Experiences | Arif Wahyu Prasetyo",
    description:
      "Explore the professional journey and career experiences of Arif Wahyu Prasetyo. Discover projects, achievements, and the skills gained throughout his path as a Fullstack Developer",
    images: [
      {
        url: "https://arifwahyu.id/images/profile-about.png", // URL lengkap gambar
        width: 1200,
        height: 630,
        alt: "Profile of Arif Wahyu Prasetyo",
      },
    ],
    type: "website",
    url: "https://arifwahyu.id",
  },
};

export default function ExperiencesPage() {
  return (
    <div className="w-full p-12 flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <Title title="Skills" />

        <div className="w-full mt-6 grid gap-4 grid-cols-3 md:grid-cols-5 justify-center items-center">
          {skillData.map((item) => (
            <SkillCircle key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-full mt-12 flex flex-col justify-center items-center">
        <Title title="Experiences" />

        <div className="w-full mt-6 flex flex-col gap-4">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
