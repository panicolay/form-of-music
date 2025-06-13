import Image from 'next/image';

import { Page } from '@/components/layout';

export default function SignupVerify() {
  return (
    <Page align="center" topBar="minimal" width="centered">
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
      <p className="text-sm text-center">
        Check your inbox
        <br />
        <span className="italic text-zinc-400">
          — maybe even the shadows of your spam folder —
        </span>
        <br />
        to complete your signup.
      </p>
    </Page>
  );
}
