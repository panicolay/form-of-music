import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
// TODO : notFound = 404?

import { Page } from '@/components/layout';
import { SettingsTable } from '@/components/settings';
import { Button } from '@/components/ui';
import { getProfileByUsername } from '@/lib/profiles';
import { createExtendedUser } from '@/lib/users';
import { createClient } from '@/utils/supabase/server';

// Any is used because params is not typed (Next.js 15
export default async function SettingsPage({ params }: any) {
  const { username } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // TODO: pourquoi pas juste user (sans data) ?

  if (!user) {
    redirect('/login');
  }

  const { profile } = await getProfileByUsername(username);

  if (!profile) {
    notFound();
  }

  if (user.id !== profile.id) {
    redirect('/closeddoor');
  }

  const extendedUser = createExtendedUser(user, profile);

  return (
    <Page align="center" width="centered">
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
    </Page>
  );
}
