import Image from 'next/image';

import Button from '@/components/ui/Button';

export default function Welcome() {
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
        src="/ilu-door-open.png"
        width={160}
      />
      <h2 className="font-poppins font-medium text-2xl uppercase">
        We&apos;ve been expecting you
      </h2>
      <p className="text-sm">
        Some came to observe
        <br />
        <span className="italic text-zinc-400">— others to reveal —</span>
        <br />
        you’re welcome either way
      </p>
      <Button className="border" href="/">
        Step in
      </Button>
    </div>
  );
}
