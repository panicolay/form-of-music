import Image from 'next/image';

import { Page } from '@/components/layout';
import { SettingsTable } from '@/components/settings';
import { Button } from '@/components/ui';
import { getProfileByUsername } from '@/lib/profiles';
import { createClient } from '@/utils/supabase/server';

// Any is used because params is not typed in Next.js 15
export default async function SettingsPage({ params }: any) {
  const supabase = await createClient();
  // Récupère l'utilisateur connecté
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // TODO: add a 404 page
    return <div>Accès refusé : vous devez être connecté.</div>;
  }

  const { profile } = await getProfileByUsername(params.username);
  //TODO : pourquoi ne pas récupérer par l'id ?

  if (!profile || profile.id !== user.id) {
    return (
      // TODO: add a 404 page
      <div>Accès refusé : vous ne pouvez voir que vos propres paramètres.</div>
    );
  }

  return (
    <Page>
      <main className="flex flex-col w-full max-w-md mx-auto my-10 px-4 space-y-10 items-center">
        <Image
          alt={profile.username}
          height={160}
          src={profile.avatar_url || '/avatars/defaults/avatar-o.png'}
          width={160}
        />

        <SettingsTable profile={profile} user={user} />
        {/* TODO: send a full user ? (extended user) */}

        <Button className="w-full justify-center border" variant="destructive">
          Delete account
        </Button>
      </main>
    </Page>
  );
}
