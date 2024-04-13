import { baseURL } from '@/data/seo';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: baseURL + 'sitemap.xml',
	};
}
