// We use the supabase user type

export interface ExtendedUser {
  id: string;
  email: string;
  username: string | null;
  avatar_url: string | null;
}
