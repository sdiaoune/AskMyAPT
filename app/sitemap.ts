import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://askmyapt.com/",
      lastModified: new Date(),
    },
    {
      url: "https://askmyapt.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://askmyapt.com/terms",
      lastModified: new Date(),
    },
    {
      url: "https://askmyapt.com/privacy",
      lastModified: new Date(),
    },
  ]
}
