import { baseURL } from '@/data/seo';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: baseURL.toString(),
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: baseURL.toString() + '/projects',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
	];
}
