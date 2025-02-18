import { projectData } from "./app/constants/projects"; // Ensure the path is correct

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://arifwahyu.id", // Replace with your domain
  generateRobotsTxt: true, // Generates robots.txt
  generateIndexSitemap: false, // Optional, prevents separate index sitemap

  // Dynamically add project pages to the sitemap
  additionalPaths: async () => {
    const dynamicPaths = projectData.map((project) => ({
      loc: `/projects/${project.slug}`, // Adjust based on your project slug structure
      lastmod: new Date().toISOString(),
    }));

    return dynamicPaths;
  },
};

export default config;
