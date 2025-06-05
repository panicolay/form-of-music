import Link from 'next/link';

import Fom from '../svg/Fom';

export default function TopBarMinimal() {
  return (
    <header className="fixed top-0 z-50 flex w-full">
      <Link href="/">
        <Fom className="m-4 w-12 h-6" />
      </Link>
    </header>
  );
}
