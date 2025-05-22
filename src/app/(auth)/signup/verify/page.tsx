import Image from 'next/image';

export default function SignupVerify() {
  return (
    <div className="text-center space-y-6">
      <Image
        alt="Envelope"
        className="mx-auto"
        height={120}
        src="/ilu-envelope.png"
        width={120}
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
  );
}
