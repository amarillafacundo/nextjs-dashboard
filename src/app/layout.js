import './globals.css';
import { inter } from './fonts';

export const metadata = {
  title: 'Next.js Dashboard',
  description: 'Chapter 3 implementation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
