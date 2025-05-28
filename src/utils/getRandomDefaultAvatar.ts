export function getRandomDefaultAvatar(): string {
  const defaultAvatars = [
    '/avatars/defaults/avatar-f.png',
    '/avatars/defaults/avatar-l.png',
    '/avatars/defaults/avatar-m.png',
    '/avatars/defaults/avatar-o.png',
    '/avatars/defaults/avatar-s.png',
    '/avatars/defaults/avatar-t.png',
  ];
  const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
  return defaultAvatars[randomIndex];
}
