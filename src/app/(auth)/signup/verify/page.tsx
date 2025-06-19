import { Page } from '@/components/layout';
import { Envelope } from '@/components/svg';

export default function SignupVerify() {
  return (
    <Page align="center" topBar="minimal" width="medium">
      <Envelope />
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
