import { Metadata } from "next";
import Script from "next/script";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import { projectData } from "../constants/projects";
import { ItemList, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Projects | Arif Wahyu Prasetyo",
  description:
    "Explore a collection of innovative Fullstack and mobile projects by Arif Wahyu Prasetyo. Featuring web apps built with Next.js, React, TypeScript, Node.js, Laravel, and modern technologies.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    shortcut: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    apple: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
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
      "Explore a collection of innovative Fullstack and mobile projects by Arif Wahyu Prasetyo. Featuring web apps built with Next.js, React, TypeScript, Node.js, Laravel, and modern technologies.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
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
      "Explore a collection of innovative Fullstack and mobile projects by Arif Wahyu Prasetyo. Featuring web apps built with Next.js, React, TypeScript, Node.js, Laravel, and modern technologies.",
    images: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
  },
};

export default function ProjectsPage() {
  const jsonLd: WithContext<ItemList> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects | Arif Wahyu Prasetyo",
    description:
      "Explore a collection of innovative Fullstack and mobile projects by Arif Wahyu Prasetyo. Featuring web apps built with Next.js, React, TypeScript, Node.js, Laravel, and modern technologies.",
    url: "https://arifwahyu.id/projects",
    itemListElement: projectData.map((item, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: item.title,
      description: item.description,
      url: `https://arifwahyu.id/projects/${item.slug}`,
      image: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    })),
  };

  return (
    <>
      <Script
        id="json-ld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full p-12 flex flex-col justify-center items-center">
        <Title title="Projects" />

        <div className="w-full mt-6 flex flex-col gap-4">
          {projectData.map((item) => (
            <ProjectCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
