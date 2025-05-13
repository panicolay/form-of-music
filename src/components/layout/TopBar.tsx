import { Button } from '@/components/ui';

export default function TopBar() {
  return (
    <div
      className="
        w-full flex justify-end
        bg-zinc-900
    "
    >
      <form action="/logout">
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
