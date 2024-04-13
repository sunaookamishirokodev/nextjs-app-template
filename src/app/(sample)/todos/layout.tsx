import type { Metadata } from 'next';
import seo from '@/data/seo';

export const metadata: Metadata = {
	title: `${seo.title} - Sample Todos`,
};

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
