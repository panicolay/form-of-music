import Image from 'next/image';

import Button from '@/components/ui/Button';

export default function Expired() {
  return (
    <div
      className="
        space-y-10
        text-center
      "
    >
      <Image
        alt="Door"
        className="mx-auto"
        height={160}
        src="/ilu-door-closed.png"
        width={160}
      />
      <h2 className="font-poppins font-medium text-2xl uppercase">
        Once was a door here
      </h2>
      <p className="text-sm">
        Another may open
        <br />
        <span className="italic text-zinc-400">— and linger —</span>
        <br />
        for 10 minutes
      </p>
      <Button className="border" href="/signup">
        Create an account
      </Button>
    </div>
  );
}
