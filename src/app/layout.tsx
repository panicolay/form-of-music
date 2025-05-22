import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import { TopBar } from '@/components/layout';
import { createClient } from '@/utils/supabase/server';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'The Form of Music',
  description: 'Explore how music is built',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body
        className={`
          min-h-screen flex flex-col
          ${inter.variable} ${poppins.variable}
        `}
      >
        <TopBar user={user} />
        <main
          className="
          flex-1 flex flex-col
          my-10 mx-4
        "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
