import type { Metadata } from 'next';
import './globals.css';
import seo from '@/data/seo';

export const metadata: Metadata = seo;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" translate="no">
			{children}
		</html>
	);
	// error message
}
