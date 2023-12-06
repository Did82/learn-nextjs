import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { GeistSans } from 'geist/font';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
            <body className={`${GeistSans.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
