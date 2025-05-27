import { type EmailOtpType } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { generateUsername } from '@/utils/generateUsername';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = searchParams.get('next') ?? '/signup/welcome';

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // Récupère l'utilisateur courant
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        // Génère un username unique
        let username;
        let isUnique = false;
        const maxAttempts = 10; // Pour éviter une boucle infinie
        let attempts = 0;
        while (!isUnique && attempts < maxAttempts) {
          username = generateUsername();
          // Vérifie si le username existe déjà dans la table 'profiles'
          const { data: existing, error: checkError } = await supabase
            .from('profiles')
            .select('id')
            .eq('username', username)
            .maybeSingle();
          if (!existing && !checkError) {
            isUnique = true;
          }
          attempts++;
        }
        if (isUnique && username) {
          // Vérifie si un profil existe déjà pour cet utilisateur
          const { data: existingProfile, error: profileError } = await supabase
            .from('profiles')
            .select('id')
            .eq('id', user.id)
            .maybeSingle();
          if (!existingProfile && !profileError) {
            // Crée le profil à la validation de l'email
            await supabase.from('profiles').insert({
              id: user.id,
              username,
              // Ajoute ici d'autres champs obligatoires si besoin
            });
          }
        }
      }
      redirect(next);
    }
  }

  // redirect the user to an error page with some instructions
  redirect('/signup/expired');
}

// TODO: change redirection when account is created but profile is not.
// no diffrences for the moment
