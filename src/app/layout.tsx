import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import UserProvider from '@/context/UserProvider';
import './globals.css';
import { createClient } from '@/utils/supabase/server';

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
          flex flex-col pt-14
          ${inter.variable} ${poppins.variable}
        `}
      >
        <UserProvider user={user}>{children}</UserProvider>
      </body>
    </html>
  );
}
