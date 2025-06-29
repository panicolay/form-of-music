import { Page } from '@/components/layout';
import { DoorOpen } from '@/components/svg';
import { Button } from '@/components/ui';

export default function Welcome() {
  return (
    <Page align="center" topBar="minimal" width="medium">
      <DoorOpen />
      <h2 className="font-poppins font-medium text-2xl uppercase">
        We&apos;ve been expecting you
      </h2>
      <p className="text-sm text-center">
        Some came to observe
        <br />
        <span className="italic text-zinc-400">— others to reveal —</span>
        <br />
        you’re welcome either way
      </p>
      <Button className="border" href="/">
        Step in
      </Button>
    </Page>
  );
}
