import { TopBarDefault } from '@/components/layout';
import { Button } from '@/components/ui';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <TopBarDefault />
      <main
        className="
          mx-4 my-10 space-y-10
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
        {!user && (
          <Button className="border" href="/signup">
            Create an account
          </Button>
        )}
      </main>
    </>
  );
}
