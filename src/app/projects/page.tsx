import { Metadata } from "next";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { projectData } from "../constants/projects";

export const metadata: Metadata = {
  title: "Projects | Arif Wahyu Prasetyo",
  description:
    "Explore a collection of innovative Fullstack and mobile projects by Arif Wahyu Prasetyo. Featuring web apps, mobile solutions, and software tools built with Next.js, React, TypeScript, Node.js, Laravel, and modern technologies.",
  icons: {
    icon: "https://arifwahyu.id/images/profile-about.webp",
    shortcut: "https://arifwahyu.id/images/profile-about.webp",
    apple: "https://arifwahyu.id/images/profile-about.webp",
  },
  keywords: [
    "Projects Arif",
    "Projek Arif",
    "Arif Projects",
    "Proyek Arif",
    "Arif",
    "Arif Wahyu",
    "Arif Wahyu Prasetyo",
    "Website Arif Wahyu Prasetyo",
    "Website Arif",
  ],
  openGraph: {
    title: "Projects | Arif Wahyu Prasetyo",
    description:
      "Explore a collection of innovative Fullstack and mobile projects by Arif Wahyu Prasetyo. Featuring web apps, mobile solutions, and software tools built with Next.js, React, TypeScript, Node.js, Laravel, and modern technologies.",
    images: [
      {
        url: "https://arifwahyu.id/images/profile-about.webp",
        width: 1200,
        height: 630,
        alt: "Profile of Arif Wahyu Prasetyo",
      },
    ],
    type: "website",
    url: "https://arifwahyu.id/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Arif Wahyu Prasetyo",
    description:
      "Explore a collection of innovative Fullstack and mobile projects by Arif Wahyu Prasetyo. Featuring web apps, mobile solutions, and software tools built with Next.js, React, TypeScript, Node.js, Laravel, and modern technologies.",
    images: "https://arifwahyu.id/images/profile-about.webp",
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
