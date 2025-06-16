import Image from 'next/image';

import { Page } from '@/components/layout';
import { Button } from '@/components/ui';

export default function Expired() {
  return (
    <Page align="center" topBar="minimal" width="medium">
      <Image
        alt="Door" // TODO: improve alt
        className="mx-auto"
        height={160}
        src="/ilu-door-closed.png"
        width={160}
      />
      <h2 className="font-poppins font-medium text-2xl uppercase">
        The door faded, eventually
      </h2>
      <p className="text-sm text-center">
        You may open another
        <br />
        <span className="italic text-zinc-400">
          — when the time feels right —
        </span>
        <br />
        it will linger for 1 day
      </p>
      <Button className="border" href="/signup">
        Sign up, once more
      </Button>
    </Page>
  );
}
