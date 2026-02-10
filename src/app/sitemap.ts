import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mdl-welcome-site.vercel.app'; // TODO: Update with actual production URL

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more pages here as they are created
        // {
        //   url: `${baseUrl}/about`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ];
}
