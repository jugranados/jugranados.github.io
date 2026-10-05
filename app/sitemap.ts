import type { MetadataRoute } from 'next';

const siteUrl = 'https://jugranados.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/experience/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/resume/`,
      lastModified: new Date(),
    },
  ];
}
