import { Page } from '@/components/layout';
import { DoorFaded } from '@/components/svg';
import { Button } from '@/components/ui';

export default function Expired() {
  return (
    <Page align="center" topBar="minimal" width="medium">
      <DoorFaded />
      <h2 className="font-poppins font-medium text-2xl uppercase">
        The door faded, eventually
      </h2>
      <p className="text-sm text-center">
        You may open another
        <br />
        <span className="italic text-zinc-400">
          — when the time feels right —
        </span>
        <br />
        it will linger for 1 day
      </p>
      <Button className="border" href="/signup">
        Sign up, once more
      </Button>
    </Page>
  );
}
