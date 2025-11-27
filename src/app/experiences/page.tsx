import { Metadata } from "next";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";
import ExperienceCard from "../components/ExperienceCard";
import SkillCircle from "../components/SkillCircle";
import Title from "../components/Title";
import { experienceData, skillData } from "../constants/experience";

export const metadata: Metadata = {
  title: "Experiences | Arif Wahyu Prasetyo",
  description:
    "Explore the professional journey of Arif Wahyu Prasetyo, a Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and Laravel. Discover hands-on experience, technical skills, and key contributions to various projects.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    shortcut: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    apple: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
  },
  keywords: [
    "Pengalaman Arif Wahyu Prasetyo",
    "Pengalaman Arif",
    "Arif",
    "Arif Wahyu",
    "Arif Wahyu Prasetyo",
    "Website Arif Wahyu Prasetyo",
    "Website Arif",
  ],
  openGraph: {
    title: "Experiences | Arif Wahyu Prasetyo",
    description:
      "Explore the professional journey of Arif Wahyu Prasetyo, a Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and Laravel. Discover hands-on experience, technical skills, and key contributions to various projects.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
        width: 1200,
        height: 630,
        alt: "Profile of Arif Wahyu Prasetyo",
      },
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_FE_URL}/experiences`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences | Arif Wahyu Prasetyo",
    description:
      "Explore the professional journey of Arif Wahyu Prasetyo, a Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and Laravel. Discover hands-on experience, technical skills, and key contributions to various projects.",
    images: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
  },
};

export default function ExperiencesPage() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Skills & Experiences | Arif Wahyu Prasetyo",
    jobTitle: "Full Stack Developer",
    url: `${process.env.NEXT_PUBLIC_FE_URL}/experiences`,
    image: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    description:
      "Experienced Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and Laravel.",
    knowsAbout: skillData.map((skill) => skill.name),
    birthDate: "2001-06-23",
    birthPlace: "Boyolali",
  };

  return (
    <>
      <Script
        id="json-ld-experiences-skills"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>

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
    </>
  );
}
