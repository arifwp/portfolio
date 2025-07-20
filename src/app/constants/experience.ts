export interface SkillInterface {
  id: number;
  name: string;
  logo: string;
}

export const skillData: SkillInterface[] = [
  {
    id: 1,
    name: "HTML 5",
    logo: "/images/logo-html.webp",
  },
  {
    id: 2,
    name: "CSS 3",
    logo: "/images/logo-css.webp",
  },
  {
    id: 3,
    name: "Javascript",
    logo: "/images/logo-js.webp",
  },
  {
    id: 4,
    name: "Typescript",
    logo: "/images/logo-ts.webp",
  },
  {
    id: 5,
    name: "React.js",
    logo: "/images/logo-react.webp",
  },
  {
    id: 6,
    name: "Next.js",
    logo: "/images/logo-nextjs.webp",
  },
  {
    id: 7,
    name: "Chakra UI",
    logo: "/images/logo-chakra.webp",
  },
  {
    id: 8,
    name: "Tailwind",
    logo: "/images/logo-tailwind.webp",
  },
  {
    id: 9,
    name: "Android",
    logo: "/images/logo-android.webp",
  },
  {
    id: 10,
    name: "Kotlin",
    logo: "/images/logo-kotlin.webp",
  },
  {
    id: 11,
    name: "Supabase",
    logo: "/images/logo-supabase.webp",
  },
  {
    id: 12,
    name: "Vercel",
    logo: "/images/logo-vercel.webp",
  },
];

export interface ExperienceInterface {
  id: number;
  companyLogo: string;
  title: string;
  date: string;
  startDate?: string;
  endDate?: string;
  location: string;
  relatedProjects: number[];
}

export const experienceData: ExperienceInterface[] = [
  {
    id: 0,
    companyLogo: "/images/logo-playfields.webp",
    title: "Junior Fullstack Developer at Playfields",
    date: "March 2025 - Present",
    startDate: "2025-05-10",
    location: "Remote, Indonesia",
    relatedProjects: [0],
  },
  {
    id: 1,
    companyLogo: "/images/logo-bwi.webp",
    title: "Android & Junior Fullstack Developer at Business Watch Indonesia",
    date: "June 2023 - March 2025",
    startDate: "2023-06-01",
    endDate: "2025-05-08",
    location: "Boyolali, Central Java, Indonesia",
    relatedProjects: [1, 3],
  },
  {
    id: 2,
    companyLogo: "/images/logo-qatros.webp",
    title: "Android Engineer Internship at Qatros",
    date: "August 2022 - December 2022",
    startDate: "2022-08-01",
    endDate: "2022-12-29",
    location: "Sleman, Special Region of Yogyakarta, Indonesia",
    relatedProjects: [4],
  },
  {
    id: 3,
    companyLogo: "/images/logo-bangkit.webp",
    title: "Android Developer Internship at Bangkit Academy",
    date: "February 2022 - July 2022",
    startDate: "2022-02-01",
    endDate: "2022-07-29",
    location: "Remote, Indonesia",
    relatedProjects: [5],
  },
];
