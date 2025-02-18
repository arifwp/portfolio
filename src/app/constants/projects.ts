export interface BasicInterface {
  id: number;
  name: string;
}

export interface ProjectInterface {
  id: number;
  banner: string | undefined;
  name: string;
  date: string;
  linkToPage: string;
  linkToProject: BasicInterface;
  description: string;
  slug: string;
  task: BasicInterface[];
  techStack: BasicInterface[];
}

export const projectData: ProjectInterface[] = [
  {
    id: 0,
    banner: "/images/banner-bisnislink.webp",
    name: "BisnisLink",
    date: "September 2024 - Present",
    linkToPage: "",
    linkToProject: {
      id: 1,
      name: "https://bisnislink.id",
    },
    description:
      "BisnisLink is an online E-Commerce service that supports SMEs (Small and Medium Enterprises) to develop their businesses. In BisnisLink there are also free blogs/articles to help users to increase their insight and knowledge about entrepreneurship.",
    slug: "bisnislink",
    task: [
      {
        id: 1,
        name: "Improved maintainability and reduced bugs by 30%, ensuring a more robust and scalable application",
      },
      {
        id: 2,
        name: "Designed and developed web applications using React.js for the frontend and Laravel for the backend, ensuring seamless integration between both layers",
      },
      {
        id: 3,
        name: "Actively participated in the entire development lifecycle, from planning and design to deployment and post-launch optimization",
      },
      {
        id: 4,
        name: "Actively participated in the entire development lifecycle, from planning and design to end-user test",
      },
      {
        id: 5,
        name: "Integrated Firebase Cloud Messaging (FCM) to implement push notifications",
      },
      {
        id: 6,
        name: "Improved application performance by 20% through server-side optimizations and frontend code enhancements, ensuring a faster and smoother user experience",
      },
      {
        id: 7,
        name: "Designed and implemented a migration of legacy applications from a Laravel monolith architecture to a microservice architecture using React.js and Chakra UI for the frontend, paired with a Laravel backend",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Laravel",
      },
      {
        id: 2,
        name: "React.js",
      },
      {
        id: 3,
        name: "Chakra UI",
      },
      {
        id: 4,
        name: "Firebase Cloud Messaging",
      },
      {
        id: 5,
        name: "Postman",
      },
      {
        id: 6,
        name: "REST API",
      },
      {
        id: 7,
        name: "Git",
      },
    ],
  },

  {
    id: 1,
    banner: "/images/banner-ketaonfair.webp",
    name: "Ketaon Fair",
    date: "June 2023 - Present",
    linkToPage: "",
    linkToProject: {
      id: 1,
      name: "https://ketaon-fair.vercel.app",
    },
    description:
      "Ketaon Fair is an event website for my village's annual festival, built with React.js and Chakra UI. It features event details, and schedules, offering a modern, responsive, and user-friendly experience for attendees and organizers.",
    slug: "ketaon-fair",
    task: [
      {
        id: 1,
        name: "Developed reusable components to streamline development and maintainability, enhancing development productivity by 30%",
      },
      {
        id: 2,
        name: "Independently designed and developed a responsive web application using React.js and Chakra UI, ensuring a seamless user experience across devices",
      },
      {
        id: 3,
        name: "Managed the entire frontend development lifecycle, including deployment and monitoring, ensuring a successful and timely project launch",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Chakra UI",
      },
      {
        id: 3,
        name: "Git",
      },
      {
        id: 4,
        name: "Vercel",
      },
      {
        id: 5,
        name: "Deployment",
      },
    ],
  },
  {
    id: 2,
    banner: "/images/banner-kubuid.webp",
    name: "Kubu.id",
    date: "June 2023 - Present",
    linkToPage: "",
    linkToProject: {
      id: 2,
      name: "https://play.google.com/store/apps/details?id=com.kubu.id&pcampaignid=web_share",
    },
    description:
      "Kubu.id is an application that is an online community center for workers and job seekers, especially informal/non-formal/casual workers. With a focus on employment-related information, consultation with professionals, and job search, Kubu.id gives you direct access to new opportunities. Find the best opportunities in the informal/non-formal/casual world of work by downloading the Kubu.id application now.",
    slug: "kubu.id",
    task: [
      {
        id: 1,
        name: "Collaborate with Marketing Team and resulting in new marketing feature using email that is succeeded in increasing website insight by 10%",
      },
      {
        id: 2,
        name: "Developed and maintained Android applications with over 14,000+ downloads on the Google Play Store",
      },
      {
        id: 3,
        name: "Conducted post-release monitoring and implemented updates based on user feedback and crash analytics to maintain app stability",
      },
      {
        id: 4,
        name: "Managed the end-to-end deployment process on the Google Play Store, ensuring successful launches and compliance with platform guidelines",
      },
      {
        id: 5,
        name: "Implemented Firebase Cloud Messaging to develop push notification feature resulting in 5% increase in user-engagement",
      },
      {
        id: 6,
        name: "Successfully integrated dynamic content through API connections, improving data reliability and user experience",
      },
      {
        id: 7,
        name: "Optimize App performance by optimizing assets and minimazing redundant code",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Codeigniter 3",
      },
      {
        id: 2,
        name: "Android SDK",
      },
      {
        id: 3,
        name: "Play Store Deployment",
      },
      {
        id: 4,
        name: "Kotlin",
      },
      {
        id: 5,
        name: "MVP",
      },
      {
        id: 6,
        name: "REST API",
      },
      {
        id: 7,
        name: "Firebase Cloud Messaging",
      },
      {
        id: 8,
        name: "Firebase Crashlytics",
      },
      {
        id: 9,
        name: "MySql",
      },
      {
        id: 10,
        name: "Play Store Deployment",
      },
      {
        id: 11,
        name: "Git",
      },
    ],
  },
  {
    id: 3,
    banner: "/images/banner-samakaki.webp",
    name: "SAMAKAKI",
    date: "September 2022 - December 2022",
    linkToPage: "",
    linkToProject: {
      id: 2,
      name: "https://play.google.com/store/apps/details?id=com.qatros.samakaki&hl=id",
    },
    description:
      "A family-friendly social media platform where users can post their activities or stories and users can create a family tree.",
    slug: "qatros-samakaki",
    task: [
      {
        id: 0,
        name: "Researched and implemented new custom library to enhance Android applications, increased 10% development speed",
      },
      {
        id: 1,
        name: "Collaborated within a Scrum team to develop and enhance Android applications, ensuring timely delivery of high-quality features",
      },
      {
        id: 2,
        name: "Actively contributed to sprint planning, daily stand-ups, and retrospectives, fostering team collaboration and alignment",
      },
      {
        id: 3,
        name: "Actively contributed to sprint planning, daily stand-ups, and retrospectives, fostering team collaboration and alignment",
      },
      {
        id: 4,
        name: "Optimized application assets and implemented file compression techniques, reducing APK size by 20%, resulting in faster downloads and improved user experience",
      },
      {
        id: 5,
        name: "Fully participated in the development lifecycle, from initial coding to successful deployment on the Google Play Store, ensuring seamless delivery and platform compliance",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Android SDK",
      },
      {
        id: 2,
        name: "Kotlin",
      },
      {
        id: 3,
        name: "MVVM",
      },
      {
        id: 4,
        name: "Dagger2/Hilt",
      },
      {
        id: 5,
        name: "Retrofit",
      },
      {
        id: 6,
        name: "Postman",
      },
      {
        id: 7,
        name: "REST APi",
      },
      {
        id: 8,
        name: "Git",
      },
      {
        id: 9,
        name: "Agile/Scrum",
      },
      {
        id: 10,
        name: "Play Store Deployment",
      },
    ],
  },
  {
    id: 4,
    banner: undefined,
    name: "Price App",
    date: "April 2022 - July 2022",
    linkToPage: "",
    linkToProject: {
      id: 2,
      name: "",
    },
    description:
      "An application platform to predict the price of goods to be sold based on average selling price data in Indonesia.",
    slug: "bangkit-academy-price-app",
    task: [
      {
        id: 1,
        name: "Developed and maintained Android applications remotely, utilizing Java/Kotlin and Android Studio to create user-friendly and efficient mobile experiences",
      },
      {
        id: 2,
        name: "Integrated RESTful APIs to provide dynamic content, ensuring seamless data flow and real-time updates within the application",
      },
      {
        id: 3,
        name: "Actively participated in code reviews and ensured code quality by following best practices and writing maintainable code",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "MVVM",
      },
      {
        id: 2,
        name: "REST API",
      },
      {
        id: 3,
        name: "Git",
      },
      {
        id: 4,
        name: "Android SDK",
      },
      {
        id: 5,
        name: "Kotlin",
      },
      {
        id: 6,
        name: "Postman",
      },
      {
        id: 7,
        name: "Retrofit",
      },
    ],
  },
];
