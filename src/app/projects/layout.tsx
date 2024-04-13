import type { Metadata } from 'next';
import seo from '@/data/seo';

export const metadata: Metadata = {
	title: `${seo.title} - Projects`,
};

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Warning: Do not add <body/> and <html/> tags because they have been inherited from the app/template.tsx and app/layout.tsx
	return <div>{children}</div>;
}
