import NameCard from "@/app/components/NameCard";
import Title from "@/app/components/Title";
import { projectData, ProjectInterface } from "@/app/constants/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const data = projectData.find((item) => item.slug === slug);

  if (!data) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: `${data.name} | Arif Wahyu Prasetyo`,
    description: data.description,
    keywords: data.keywords ?? [
      "Arif Wahyu Prasetyo",
      "Software Engineer",
      "Projects",
    ],
    icons: {
      icon: "https://arifwahyu.id/images/profile-about.webp",
      shortcut: "https://arifwahyu.id/images/profile-about.webp",
      apple: "https://arifwahyu.id/images/profile-about.webp",
    },
    openGraph: {
      title: `${data.name} | Arif Wahyu Prasetyo`,
      description: data.description,
      images: [
        {
          url: data.banner || "https://arifwahyu.id/images/profile-about.webp",
          width: 1200,
          height: 630,
          alt: `${data.name} Banner`,
        },
      ],
      type: "website",
      url: `https://arifwahyu.id/projects/${data.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.name} | Arif Wahyu Prasetyo`,
      description: data.description,
      images: data.banner || "https://arifwahyu.id/images/profile-about.webp",
    },
    alternates: {
      canonical: `https://arifwahyu.id/projects/${data.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data: ProjectInterface | undefined = projectData.find(
    (item) => item.slug === slug
  );

  if (!data) {
    notFound();
  }

  return (
    <div className="w-full p-12 flex flex-col justify-center items-center gap-4">
      <Title title={data.name} />

      {data.banner && (
        <Image
          className="w-full mt-6 rounded-neo"
          src={data.banner}
          alt={data.name}
          width={500}
          height={500}
        />
      )}

      <div className="w-full gap-1 mt-4 flex flex-col">
        <p className="text-lg font-bold">{`What's this?`}</p>

        <h2 className="mt-4 text-lg font-semibold">{data.title}</h2>

        <p className="text-md">{data.description}</p>
      </div>

      <div className="w-full gap-1 mt-4 flex flex-col">
        <p className="text-lg font-bold">What do i do in this project?</p>

        <ul className="list-disc list-inside">
          {data.task.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div className="w-full gap-1 mt-4 flex flex-col">
        <p className="text-lg font-bold">Tech Stack :</p>

        <div className="w-full gap-2 flex flex-row flex-wrap">
          {data.techStack.map((item, index) => (
            <NameCard key={item.id} name={item.name} index={index} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <p className="text-lg font-bold">Link :</p>

        {data.linkToProject.name ? (
          <Link
            href={data.linkToProject.name}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit p-2 bg-softBlue text-md font-medium drop-shadow-neo cursor-pointer"
          >
            {data.linkToProject.id === 1 ? "Web" : "Play Store"}
          </Link>
        ) : (
          <p className="text-md font-medium">
            {data.id !== 0 ? "Unavailable" : "Under Development"}
          </p>
        )}
      </div>
    </div>
  );
}
