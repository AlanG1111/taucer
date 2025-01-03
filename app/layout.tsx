import type { Metadata } from 'next';
import MainHeader from '@/components/MainHeader/MainHeader';
import MainFooter from '@/components/MainFooter/MainFooter';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Taucer',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main style={{ minHeight: '80vh' }}>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
