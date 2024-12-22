import { Metadata } from "next";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { projectData } from "../constants/projects";

export const metadata: Metadata = {
  title: "Projects | Arif Wahyu Prasetyo",
  description:
    "Discover the diverse projects by Arif Wahyu Prasetyo, showcasing creativity, technical expertise, and problem-solving skills as a Junior Fullstack Developer. Explore web applications, tools, and innovative solutions built with modern technologies",
  icons: {
    icon: "/images/profile-about.png",
    shortcut: "/images/profile-about.png",
    apple: "/images/profile-about.png",
  },
  openGraph: {
    title: "Projects | Arif Wahyu Prasetyo",
    description:
      "Discover the diverse projects by Arif Wahyu Prasetyo, showcasing creativity, technical expertise, and problem-solving skills as a Junior Fullstack Developer. Explore web applications, tools, and innovative solutions built with modern technologies",
    images: "/images/profile-about.png",
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-full p-12 flex flex-col justify-center items-center">
      <Title title="Projects" />

      <div className="w-full mt-6 flex flex-col gap-4">
        {projectData.map((item) => (
          <ProjectCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
