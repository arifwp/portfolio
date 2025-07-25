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
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  task: BasicInterface[];
  techStack: BasicInterface[];
}

export const projectData: ProjectInterface[] = [
  {
    id: 0,
    banner: "/images/banner-playfields.webp",
    name: "Playfields",
    date: "March 2025 - Present",
    keywords: [
      "Playfields",
      "Booking lapangan online",
      "Sistem manajemen lapangan",
      "Jadwal futsal online",
      "Dashboard pemilik lapangan",
      "Booking futsal & mini soccer",
      "Platform Playfields Indonesia",
      "Digitalisasi pengelolaan lapangan",
      "Website booking futsal",
      "Sewa lapangan online",
      "Admin lapangan Playfields",
      "Lapangan mini soccer online",
      "Playfields web app",
      "Playfields untuk UMKM olahraga",
      "Fitur booking realtime",
      "Sistem pembayaran booking",
      "Notifikasi booking lapangan",
      "Playfields Arif Wahyu Prasetyo",
      "Sistem kasir lapangan futsal",
    ],
    linkToPage: "",
    linkToProject: {
      id: 1,
      name: "https://playfields.id",
    },
    title:
      "Playfields - Simplifying Field Booking & Management for Futsal & Mini Soccer",
    description:
      "Playfields is an innovative SaaS platform that empowers field owners to digitize and manage their futsal or mini soccer businesses with ease. From seamless booking systems, real-time schedule management, to integrated payment features. Playfields helps local sports venues operate more efficiently. The platform also provides admin dashboards, session-based pricing, and auto expire unpaid bookings to ensure optimal field utilization and user experience. Designed for scalability and ease of use, Playfields is redefining how field operations are managed.",
    slug: "playfields",
    task: [
      {
        id: 1,
        name: "Reduced booking-related issues by 40% through improved data handling and auto-expire mechanisms",
      },
      {
        id: 2,
        name: "Developed frontend features using Next.js, Tailwind CSS, and Zustand for state management, ensuring responsive and dynamic UI",
      },
      {
        id: 3,
        name: "Implemented Supabase as backend service with real-time updates, authentication, and cloud storage integration",
      },
      {
        id: 4,
        name: "Built dynamic pricing and schedule management based on day-type and session rules with full calendar visualization",
      },
      {
        id: 5,
        name: "Integrated Xendit for payment gateway, handling booking expiration logic and webhook-based payment status update",
      },
      {
        id: 6,
        name: "Enabled multi-role user access (owner/staff) and invitation-based collaboration to support flexible team management",
      },
      {
        id: 7,
        name: "Developed reusable custom hooks and modular components to ensure scalability and maintainability of the codebase",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "React.js",
      },
      {
        id: 3,
        name: "Tailwind CSS",
      },
      {
        id: 4,
        name: "Supabase",
      },
      {
        id: 5,
        name: "Zustand",
      },
      {
        id: 6,
        name: "TanStack Query",
      },
      {
        id: 7,
        name: "Payment Gateway",
      },
      {
        id: 8,
        name: "Typescript",
      },
      {
        id: 9,
        name: "Amplitude",
      },
      {
        id: 10,
        name: "Vercel",
      },
      {
        id: 11,
        name: "Git",
      },
    ],
  },
  {
    id: 1,
    banner: "/images/banner-bisnislink.webp",
    name: "BisnisLink",
    date: "September 2024 - Present",
    keywords: [
      "BisnisLink",
      "BisnisLink UMKM",
      "platform bisnislink",
      "website bisnislink",
      "umkm lokal bisnislink",
      "majukan umkm lokal",
      "BisnisLink e-commerce",
      "e-commerce UMKM",
      "digitalisasi UMKM",
      "marketplace BisnisLink",
      "jual produk di BisnisLink",
      "cara daftar BisnisLink",
      "Bisnislink indonesia",
      "Reseller bisnislink",
      "Supplier bisnislink",
      "website resmi BisnisLink",
      "BisnisLink platform terbaik",
      "BisnisLink Arif Wahyu Prasetyo",
      "BisnisLink supplier dan reseller",
    ],
    linkToPage: "",
    linkToProject: {
      id: 1,
      name: "https://bisnislink.id",
    },
    title:
      "BisnisLink - Empowering SMEs (UMKM) with E-Commerce & Business Insights",
    description:
      "BisnisLink is an all-in-one E-Commerce platform designed to help Small and Medium Enterprises (UMKM) grow their businesses efficiently. With BisnisLink, entrepreneurs can easily showcase their products, reach a wider audience, and increase sales through a seamless digital marketplace. In addition to our E-Commerce services, BisnisLink provides free business articles and blogs, offering valuable insights on entrepreneurship, marketing strategies, and business development. Whether you’re starting a new venture or scaling your existing business, BisnisLink is your go-to platform for success.",
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
      {
        id: 8,
        name: "Typescript",
      },
    ],
  },
  {
    id: 2,
    banner: "/images/banner-ketaonfair.webp",
    name: "Ketaon Fair",
    date: "June 2023 - Present",
    keywords: [
      "Ketaon Fair",
      "Kecamatan Banyudono",
      "Festival Ketaon",
      "Ketaon Annual Festival",
      "Desa Ketaon",
      "Agenda Ketaon",
      "Acara Ketaon Fair",
      "Jadwal Ketaon Fair",
      "Event Ketaon",
      "Festival budaya Ketaon",
      "Agenda Ketaon Fair",
      "Ketaon Fair website",
      "Ketaon Banyudono Boyolali",
      "Ketaon Fair tradisi",
      "Info Ketaon Fair",
      "Ketaon Banyudono Boyolali",
      "Website resmi Ketaon Fair",
      "Perayaan Ketaon Fair",
      "Budaya dan tradisi Ketaon",
      "Event tahunan Ketaon",
      "Pentas seni Ketaon Fair",
    ],
    linkToPage: "",
    linkToProject: {
      id: 1,
      name: "https://ketaon-fair.vercel.app",
    },
    title: "Ketaon Fair – Ultimate Guide to Ketaon Annual Festival",
    description:
      "Ketaon Fair is the official event website for ketaon's annual festival, providing a seamless and modern experience for attendees and organizers. Built with React.js and Chakra UI, the platform offers a fully responsive design, ensuring easy access to event details, schedules, and important updates from any device. Whether you’re looking for festival highlights, performance schedules, or venue information, Ketaon Fair keeps you informed. People in this village can join celebrating culture, tradition, and community spirit at Ketaon Fair Event!",
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
    id: 3,
    banner: "/images/banner-kubuid.webp",
    name: "Kubu.id",
    date: "June 2023 - Present",
    keywords: [
      "Kubu.id",
      "kubu id",
      "pekerja informal",
      "loker informal",
      "lowongan kerja informal",
      "pekerjaan informal",
      "kerja lepas",
      "freelancer Indonesia",
      "lowongan kerja harian",
      "kerja part-time",
      "informal job Indonesia",
      "platform pekerja informal",
      "kubu id app",
      "Kubu loker informal",
      "download Kubu.id",
      "lowongan kerja freelance",
      "aplikasi pekerja lepas",
      "freelance marketplace",
      "lowongan kerja kasual",
      "karir pekerja informal",
      "kubu id android",
      "Kubu.id Google Play Store",
      "pekerjaan fleksibel Indonesia",
      "cari kerja informal",
      "info kerja harian",
      "info kerja lepas",
      "job portal Indonesia",
      "Kubu.id freelancer",
      "pekerja non-formal",
      "bursa kerja informal",
      "kesempatan kerja fleksibel",
    ],
    linkToPage: "",
    linkToProject: {
      id: 2,
      name: "https://kubu.id",
    },
    title:
      "Kubu.id – The Ultimate Online Community for Informal & Casual Workers",
    description:
      "Kubu.id is a dedicated online platform designed to empower informal, non-formal, and casual workers by connecting them with new job opportunities, career insights, and professional consultations. Whether you’re a freelancer, daily wage worker, or part-time employee, Kubu.id provides direct access to employment-related information and expert advice to help you navigate your career journey. Take control of your career today! Download the Kubu.id app now and unlock new opportunities in the world of informal work.",
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
    id: 4,
    banner: "/images/banner-samakaki.webp",
    name: "SAMAKAKI",
    date: "September 2022 - December 2022",
    keywords: [
      "Qatros",
      "Qatros SamaKaki",
      "SamaKaki",
      "SamaKaki Qatros",
      "Aplikasi Qatros",
      "Qatros Android",
      "Qatros Play Store",
      "Qatros developer",
      "Qatros Indonesia",
      "Qatros Teknologi Nusantara",
      "Aplikasi silsilah keluarga",
      "Family tree app Indonesia",
      "Aplikasi pohon keluarga",
      "SamaKaki family tree",
      "Aplikasi berbagi cerita keluarga",
      "SamaKaki sosial media keluarga",
      "Aplikasi koneksi keluarga",
      "SamaKaki connect & share",
      "Aplikasi mirip family tree",
      "Download SamaKaki",
      "Aplikasi keluarga Indonesia",
      "Qatros social media app",
      "Pohon keluarga digital",
      "Aplikasi pelacak silsilah keluarga",
      "Best family tree app Indonesia",
      "Jaringan keluarga digital",
      "Aplikasi Qatros SamaKaki",
    ],
    linkToPage: "",
    linkToProject: {
      id: 2,
      name: "https://play.google.com/store/apps/details?id=com.qatros.samakaki&hl=id",
    },
    title: "SAMAKAKI – Connect, Share, and Build Your Family Tree",
    description:
      "SamaKaki is a family-friendly social media platform where users can share their stories, activities, and special moments with loved ones. Designed for meaningful connections, SamaKaki also lets you create and explore your family tree, preserving your family’s legacy across generations.",
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
    id: 5,
    banner: undefined,
    name: "Price App",
    date: "April 2022 - July 2022",
    keywords: [
      "Bangkit Academy",
      "Bangkit Academy 2022",
      "Bangkit Academy project",
      "PriceApp Bangkit",
      "Bangkit Android project",
      "Bangkit machine learning",
      "Bangkit Academy Indonesia",
      "Bangkit x Google",
      "Bangkit x Gojek",
      "Bangkit x Tokopedia",
      "Bangkit Academy Capstone",
      "Capstone project Bangkit",
      "Price prediction app",
      "Aplikasi prediksi harga",
      "PriceApp Android",
      "Bangkit price prediction",
      "PriceApp machine learning",
      "Aplikasi Bangkit Academy",
      "Bangkit Academy mobile development",
      "Project Bangkit Indonesia",
      "Bangkit startup project",
      "Bangkit Academy Google project",
      "Bangkit Android development",
      "PriceApp reseller tool",
      "PriceApp for sellers",
      "Smart pricing tool Indonesia",
    ],
    linkToPage: "",
    linkToProject: {
      id: 2,
      name: "",
    },
    title: "PriceApp – Smart Price Prediction for Better Selling Decisions",
    description:
      "PriceApp is an innovative platform that helps sellers predict the ideal price for their products based on real-time average selling price data in Indonesia. Whether you’re a business owner, reseller, or online merchant, PriceApp provides data-driven insights to help you set competitive prices and maximize profits.",
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
