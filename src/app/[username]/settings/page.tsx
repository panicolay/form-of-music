import Image from 'next/image';

import { TopBarDefault } from '@/components/layout';
import IconPen from '@/components/svg/IconPen';
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

  if (!profile || profile.id !== user.id) {
    return (
      // TODO: add a 404 page
      <div>Accès refusé : vous ne pouvez voir que vos propres paramètres.</div>
    );
  }

  return (
    <>
      <TopBarDefault />
      <main className="flex flex-col w-full max-w-md mx-auto my-10 px-4 space-y-10 items-center">
        <Image
          alt={profile.username}
          height={160}
          src={profile.avatar_url || '/avatars/defaults/avatar-o.png'}
          width={160}
        />

        <div
          className="
            flex flex-col w-full
            border border-zinc-500 divide-y divide-zinc-500
          "
        >
          <div className="flex h-16 px-4 items-center justify-between">
            <div className="font-poppins text-sm text-zinc-400 uppercase">
              Username
            </div>
            <div className="flex gap-4 items-center text-zinc-200">
              {profile.username} <IconPen className="text-zinc-400" size={16} />
            </div>
          </div>

          <div className="flex h-16 px-4 items-center justify-between">
            <div className="font-poppins text-sm text-zinc-400 uppercase">
              Email
            </div>
            <div className="flex gap-4 items-center text-zinc-200">
              {user.email || 'No email'}{' '}
              <IconPen className="text-zinc-400" size={16} />
            </div>
          </div>

          <div className="flex h-16 px-4 items-center justify-between">
            <div className="font-poppins text-sm text-zinc-400 uppercase">
              Password
            </div>
            <div className="flex gap-4 items-center text-zinc-200">
              ******** <IconPen className="text-zinc-400" size={16} />
            </div>
          </div>
        </div>

        <Button className="w-full justify-center border" variant="destructive">
          Delete account
        </Button>
      </main>
    </>
  );
}
