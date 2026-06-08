import type { MetadataRoute } from "next";
import { portfolioData } from "@/src/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sujanks.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...portfolioData.projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
