import { TopBarDefault } from '@/components/layout';
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
      <main>
        <div>Username : {profile.username}</div>
        <div>Email : {user.email}</div>
        <div>Password : ********</div>
      </main>
    </>
  );
}
