import { Envelope } from '@/components/svg';

export default function SignupVerify() {
  return (
    <div className="space-y-6 mx-auto text-center">
      <Envelope className="w-24 h-24 mx-auto" />
      <h2 className="font-poppins font-semibold text-2xl uppercase">
        A message has been sent
      </h2>
      <p>
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
