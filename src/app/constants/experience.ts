export interface SkillInterface {
  id: number;
  name: string;
  logo: string;
}

export const skillData: SkillInterface[] = [
  {
    id: 1,
    name: "HTML 5",
    logo: "/images/logo-html.svg",
  },
  {
    id: 2,
    name: "CSS 3",
    logo: "/images/logo-css.svg",
  },
  {
    id: 3,
    name: "Javascript",
    logo: "/images/logo-js.svg",
  },
  {
    id: 4,
    name: "Typescript",
    logo: "/images/logo-ts.svg",
  },
  {
    id: 5,
    name: "React.js",
    logo: "/images/logo-react.svg",
  },
  {
    id: 6,
    name: "Next.js",
    logo: "/images/logo-nextjs.svg",
  },
  {
    id: 7,
    name: "Chakra UI",
    logo: "/images/logo-chakra.svg",
  },
  {
    id: 8,
    name: "Tailwind",
    logo: "/images/logo-tailwind.svg",
  },
  {
    id: 9,
    name: "Android",
    logo: "/images/logo-android.svg",
  },
  {
    id: 10,
    name: "Kotlin",
    logo: "/images/logo-kotlin.svg",
  },
];

export interface ExperienceInterface {
  id: number;
  companyLogo: string;
  title: string;
  date: string;
  location: string;
  relatedProjects: number[];
}

export const experienceData: ExperienceInterface[] = [
  {
    id: 1,
    companyLogo: "/images/logo-bwi.jpeg",
    title: "Android & Junior Fullstack Developer at Business Watch Indonesia",
    date: "June 2023 - Present",
    location: "Boyolali, Central Java, Indonesia",
    relatedProjects: [0, 2],
  },
  {
    id: 2,
    companyLogo: "/images/logo-qatros.png",
    title: "Android Engineer Internship at Qatros",
    date: "August 2022 - December 2022",
    location: "Sleman, Special Region of Yogyakarta, Indonesia",
    relatedProjects: [3],
  },
  {
    id: 3,
    companyLogo: "/images/logo-bangkit.jpg",
    title: "Android Developer Internship at Bangkit Academy",
    date: "February 2022 - July 2022",
    location: "Remote, Indonesia",

    relatedProjects: [4],
  },
];
