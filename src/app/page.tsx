import { Button } from './components/ui';

export default function Home() {
  return (
    <div
      className="
        space-y-10
    "
    >
      <h1
        className="
            font-poppins font-semibold
            text-7xl uppercase
        "
      >
        The
        <br />
        Form of
        <br />
        Music
      </h1>
      <Button className="border" href="/signup">
        Create an account
      </Button>
    </div>
  );
}
