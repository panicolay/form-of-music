import Image from 'next/image';

import { getProfileByUsername } from './actions';

const DEFAULT_AVATAR = '/avatars/defaults/avatar1.png';

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { profile } = await getProfileByUsername(params.username);

  if (!profile) return <div>Profil non trouvé.</div>;

  const avatarUrl = profile.avatar_url || DEFAULT_AVATAR;

  return (
    <main className="flex flex-col items-center mt-10">
      <Image
        alt={profile.username}
        className="rounded-full border"
        height={120}
        src={avatarUrl}
        width={120}
      />
      <h1 className="mt-4 text-2xl font-bold">{profile.username}</h1>
    </main>
  );
}
