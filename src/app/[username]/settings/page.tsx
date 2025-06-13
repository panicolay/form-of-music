import Image from 'next/image';

import { Page } from '@/components/layout';
import { SettingsTable } from '@/components/settings';
import { Button } from '@/components/ui';
import { getProfileById } from '@/lib/profiles';
import type { ExtendedUser } from '@/types/ExtendedUser';
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

  const { profile } = await getProfileById(user.id);

  if (!profile) {
    return (
      // TODO: add a 404 page
      <div>Accès refusé : vous ne pouvez voir que vos propres paramètres.</div>
    );
  }

  const extendedUser: ExtendedUser = {
    id: user.id,
    email: user.email ?? '', // Fallback vide car l'email est requis
    username: profile.username,
    avatar_url: profile.avatar_url,
  };

  return (
    <Page>
      <main className="flex flex-col w-full max-w-md mx-auto my-10 px-4 space-y-10 items-center">
        <Image
          alt="User avatar"
          height={160}
          src={extendedUser.avatar_url || '/avatars/defaults/avatar-o.png'}
          width={160}
        />

        <SettingsTable user={extendedUser} />

        <Button className="w-full justify-center border" variant="destructive">
          Delete account
        </Button>
      </main>
    </Page>
  );
}
