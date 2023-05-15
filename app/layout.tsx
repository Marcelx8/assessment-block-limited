import { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from './Providers';
import { Session } from 'next-auth';

interface Props {
  session: Session;
  children: ReactNode;
}

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Block Limited',
  description: 'Integrity is what drives our decisions and actions',
};

const RootLayout = ({ children, session }: Props) => {
  return (
    <html lang="en">
      <body
        id="__next"
        className={`flex flex-col min-h-screen relative z-10 ${jetBrains_Mono.className}`}
      >
        <Providers session={session}>
          <Header />
          <main className="relative z-11">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
