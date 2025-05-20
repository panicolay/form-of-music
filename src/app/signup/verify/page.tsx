import { Envelope } from '@/components/svg';

export default function SignupVerify() {
  return (
    <div className="space-y-6 mx-auto text-center">
      <Envelope className="w-24 h-24 mx-auto" />
      <h2 className="font-poppins font-semibold text-2xl uppercase">
        A message has been sent
      </h2>
      <p className="text-zinc-00">
        To continue, confirm your email address.
        <br />
        (check your inbox... maybe even the shadows of your spam folder)
      </p>
    </div>
  );
}
