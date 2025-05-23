import Image from 'next/image';

import { TopBarMinimal } from '@/components/layout';
import { Button } from '@/components/ui';

export default function Expired() {
  return (
    <>
      <TopBarMinimal />
      <main className="mx-4 my-10">
        <div className="max-w-md mx-auto space-y-10 text-center">
          <Image
            alt="Door"
            className="mx-auto"
            height={160}
            src="/ilu-door-closed.png"
            width={160}
          />
          <h2 className="font-poppins font-medium text-2xl uppercase">
            A door closed, eventually
          </h2>
          <p className="text-sm">
            Another may open
            <br />
            <span className="italic text-zinc-400">
              — and linger for 1 hour —
            </span>
            <br />
            when the time feels right
          </p>
          <Button className="border" href="/signup">
            Sign up, one more time
          </Button>
        </div>
      </main>
    </>
  );
}
