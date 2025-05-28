import Image from 'next/image';

import { TopBarDefault } from '@/components/layout';
import { Button } from '@/components/ui';
import { createClient } from '@/utils/supabase/server';

import { getProfileByUsername } from './actions';

const DEFAULT_AVATAR = '/avatars/defaults/avatar-o.png';

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const { profile } = await getProfileByUsername(username);

  if (!profile) return <div>Profile not found.</div>; // TODO: add a 404 page

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isOwner = user && profile.id && user.id === profile.id;
  const avatarUrl = profile.avatar_url || DEFAULT_AVATAR;

  return (
    <>
      <TopBarDefault />
      <main className="flex flex-col items-center mx-4 my-10 gap-10">
        <Image
          alt={profile.username}
          height={160}
          src={avatarUrl}
          width={160}
        />

        <div className="text-center">
          <h1 className="text-2xl font-poppins font-semibold">
            {profile.username}
          </h1>
          {isOwner && user && (
            <div>
              <p>{user.email}</p>
            </div>
          )}
        </div>

        {isOwner && user && (
          <form action="/logout">
            <Button className="border border-zinc-200" type="submit">
              Logout
            </Button>
          </form>
        )}
      </main>
    </>
  );
}
