import Link from "next/link";
import { portfolioData } from "@/src/data/portfolio";
import { HomeClient } from "@/src/components/HomeClient";

export const metadata = {
  title: "Home | Sujan K S - AI/ML Engineer",
  description: "AI/ML Engineer specializing in Computer Vision, Deep Learning, NLP, and applied AI systems.",
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: "AI/ML Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mangalore",
      addressCountry: "India",
    },
    email: portfolioData.email,
    url: "https://github.com/Sujan-lab-cell",
    sameAs: [portfolioData.social.github, portfolioData.social.linkedin, portfolioData.social.kaggle],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "YOLOv8",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeClient />
    </>
  );
}
