import { MetadataRoute } from 'next';
import seo from '@/data/seo';
import { colors } from '../../tailwind.config';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: seo.title?.toString(),
		short_name: seo.title?.toString(),
		description: seo.description?.toString(),
		start_url: '/',
		display: 'standalone',
		background_color: colors.main,
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
