import Image from 'next/image';
import { notFound } from 'next/navigation';

import { Page } from '@/components/layout';
import { Button } from '@/components/ui';
import { getProfileByUsername } from '@/lib/profiles';
import { createClient } from '@/utils/supabase/server';

const DEFAULT_AVATAR = '/avatars/defaults/avatar-o.png';

// Any is used because params is not typed in Next.js 15
export default async function Profile({ params }: any) {
  const { username } = await params;
  const { profile } = await getProfileByUsername(username);

  if (!profile) {
    notFound();
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isOwner = user && profile.id && user.id === profile.id;
  const avatarUrl = profile.avatar_url || DEFAULT_AVATAR;

  return (
    <Page align="center" width="medium">
      <Image alt={profile.username} height={160} src={avatarUrl} width={160} />

      <h1 className="text-center text-2xl font-poppins font-semibold">
        {profile.username}
      </h1>

      {isOwner && user && (
        <Button
          className="border border-zinc-200"
          href={`/${username}/settings`}
        >
          Settings
        </Button>
      )}
    </Page>
  );
}
