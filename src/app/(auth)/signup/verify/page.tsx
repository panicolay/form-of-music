import { Envelope } from '@/components/svg';

export default function SignupVerify() {
  return (
    <div
      className="
        flex-1 flex flex-col
        items-center justify-center
        mb-14
        space-y-6
        text-center
      "
    >
      <Envelope className="w-24 h-24" />
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
