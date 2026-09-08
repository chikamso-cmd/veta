import { MetadataRoute } from "next";
import React from "react";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://veta.netlify.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
