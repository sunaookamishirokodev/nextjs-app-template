import { Inter } from 'next/font/google';
const font = Inter({ subsets: ['latin'] });

export default function RootTemplate({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <body className={font.className}>{children}</body>;
}
