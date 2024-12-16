export interface TechStackInterface {
  id: number;
  name: string;
}

export interface ProjectInterface {
  id: number;
  name: string;
  date: string;
  linkToPage: string;
  linkToProject: string;
  description: string;
  techStack: TechStackInterface[];
}

export const projectData: ProjectInterface[] = [
  {
    id: 0,
    name: "BisnisLink",
    date: "September 2024 - Present",
    linkToPage: "",
    linkToProject: "",
    description:
      "BisnisLink is an online E-Commerce service that supports SMEs (Small and Medium Enterprises) to develop their businesses. In BisnisLink there are also free blogs/articles to help users to increase their insight and knowledge about entrepreneurship.",
    techStack: [
      {
        id: 1,
        name: "",
      },
    ],
  },

  {
    id: 1,
    name: "Ketaon Fair",
    date: "June 2023 - Present",
    linkToPage: "",
    linkToProject: "https://www.ketaonfair.com",
    description:
      "Ketaon Fair is an event website for my village's annual festival, built with React.js and Chakra UI. It features event details, schedules, and participant registration, offering a modern, responsive, and user-friendly experience for attendees and organizers.",
    techStack: [
      {
        id: 1,
        name: "",
      },
    ],
  },
  {
    id: 2,
    name: "Kubu.id",
    date: "June 2023 - Present",
    linkToPage: "",
    linkToProject:
      "https://play.google.com/store/apps/details?id=com.kubu.id&pcampaignid=web_share",
    description:
      "Kubu.id is an application that is an online community center for workers and job seekers, especially informal/non-formal/casual workers. With a focus on employment-related information, consultation with professionals, and job search, Kubu.id gives you direct access to new opportunities. Find the best opportunities in the informal/non-formal/casual world of work by downloading the Kubu.id application now.",
    techStack: [
      {
        id: 1,
        name: "",
      },
    ],
  },
  {
    id: 3,
    name: "SAMAKAKI",
    date: "September 2022 - December 2022",
    linkToPage: "",
    linkToProject:
      "https://play.google.com/store/apps/details?id=com.qatros.samakaki&hl=id",
    description:
      "A family-friendly social media platform where users can post their activities or stories and users can create a family tree.",
    techStack: [
      {
        id: 1,
        name: "",
      },
    ],
  },
  {
    id: 4,
    name: "Price App",
    date: "April 2022 - July 2022",
    linkToPage: "",
    linkToProject:
      "https://play.google.com/store/apps/details?id=com.qatros.samakaki&hl=id",
    description:
      "An application platform to predict the price of goods to be sold based on average selling price data in Indonesia.",
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
    ],
  },
];
