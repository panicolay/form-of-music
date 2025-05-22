import Link from 'next/link';

import Fom from '@/components/svg/Fom';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Link href="/">
          <Fom className="m-4 w-12 h-6" />
        </Link>
      </header>
      <main
        className="
          mx-4 my-10
        "
      >
        <div
          className="
            max-w-sm mx-auto
            space-y-10
          "
        >
          {children}
        </div>
      </main>
    </>
  );
}
