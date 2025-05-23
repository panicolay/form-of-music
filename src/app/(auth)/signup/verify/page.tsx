import Image from 'next/image';

import { TopBarMinimal } from '@/components/layout';

export default function SignupVerify() {
  return (
    <>
      <TopBarMinimal />
      <main className="mx-4 my-10">
        <div className="max-w-md mx-auto space-y-10 text-center">
          <Image
            alt="Envelope"
            className="mx-auto"
            height={160}
            src="/ilu-envelope.png"
            width={160}
          />
          <h2 className="font-poppins font-medium text-2xl uppercase">
            A message has been sent
          </h2>
          <p className="text-sm">
            Check your inbox
            <br />
            <span className="italic text-zinc-400">
              — maybe even the shadows of your spam folder —
            </span>
            <br />
            to complete your signup.
          </p>
        </div>
      </main>
    </>
  );
}
