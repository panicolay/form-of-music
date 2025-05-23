import Link from 'next/link';

import Fom from '../svg/Fom';

export default function TopBarMinimal() {
  return (
    <header className="flex">
      <Link href="/">
        <Fom className="m-4 w-12 h-6" />
      </Link>
    </header>
  );
}
