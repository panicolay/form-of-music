import Image from 'next/image';

import Button from '@/components/ui/Button';

export default function Welcome() {
  return (
    <div
      className="
        flex-1 flex flex-col items-center justify-center
        mb-14 space-y-6
      "
    >
      <Image
        alt="Door"
        className="mx-auto"
        height={120}
        src="/ilu-door.png"
        width={120}
      />
      <h2 className="font-poppins font-medium text-2xl uppercase">
        We&apos;ve been expecting you
      </h2>
      <Button className="border" href="/">
        Step in
      </Button>
    </div>
  );
}
