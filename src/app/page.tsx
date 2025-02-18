import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profileHeader from "../../public/images/profile-about.webp";
import TimelineCard from "./components/TimelineCard";
import { timelineData } from "./constants/timeline";

export const metadata: Metadata = {
  title: "Arif Wahyu Prasetyo | Junior Fullstack Developer",
  description:
    "Versatile developer with 2 years of combined experience in Android app development and Fullstack web projects.",
  icons: {
    icon: "https://arifwahyu.id/images/profile-about.webp",
    shortcut: "https://arifwahyu.id/images/profile-about.webp",
    apple: "https://arifwahyu.id/images/profile-about.webp",
  },
  openGraph: {
    title: "Arif Wahyu Prasetyo | Junior Fullstack Developer",
    description:
      "Versatile developer with 2 years of combined experience in Android app development and Fullstack web projects.",
    images: [
      {
        url: "https://arifwahyu.id/images/profile-about.webp",
        width: 1200,
        height: 630,
        alt: "Profile of Arif Wahyu Prasetyo",
      },
    ],
    type: "website",
    url: "https://arifwahyu.id",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full h-[100%] min-h-[100dvh] pt-0 pb-12 px-12 bg-softOrange flex flex-col gap-6">
      <Image
        className="mx-auto aspect-square object-cover object-center"
        src={profileHeader}
        alt="foto arif wahyu prasetyo"
        width={400}
        height={400}
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3">
          <h1 className="my-auto text-3xl font-bold md:text-5xl">{`Hello I'm`}</h1>
          <div className="p-1 rounded-none border-2 border-black bg-hardYellow">
            <h1 className="text-3xl font-bold md:text-5xl">Arif </h1>
          </div>
        </div>

        <p className="text-md">
          Junior Fullstack Developer with 2 year of Android development
          experience and 6 months in Fullstack projects. Creating and maintain
          impactful Android apps with 14,000+ downloads on Google Play Store,
          and improved system performance by reducing bugs by 30%. Skilled in
          React.js, TypeScript, Chakra UI, and integrating web services. Eager
          to grow and deliver innovative solutions while building expertise in
          modern development practices.
        </p>

        <a
          href="mailto:arif.wpras@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full p-4 bg-hardYellow drop-shadow-neo font-medium">
            {`Let's Work Together`}
          </button>
        </a>

        <div className="w-full flex flex-row gap-4 flex-wrap">
          <Link
            href="https://www.linkedin.com/in/arif-wahyu-prasetyo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-hardBlue drop-shadow-neo flex flex-row flex-1 font-medium"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
            LinkedIn
          </Link>

          <Link
            href="https://www.github.com/arifwp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-hardGray drop-shadow-neo flex flex-row flex-1 text-white items-center rounded-md font-medium"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </Link>

          <Link
            href={"https://arifwahyu.id/resume"}
            className="p-4 bg-white drop-shadow-neo flex flex-row flex-1 text-black font-medium"
          >
            <svg
              className="w-6 h-6 text-black mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
              />
            </svg>
            Resume
          </Link>
        </div>
      </div>

      <p className="mt-6 text-2xl md:text-3xl text-black font-bold">
        Short Story About Me
      </p>

      <div className="w-full">
        <ol className="relative border-s-2 border-black">
          {timelineData.map((item) => (
            <TimelineCard key={item.id} data={item} />
          ))}
        </ol>
      </div>
    </div>
  );
}
