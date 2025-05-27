import { prefixes, nouns, suffixes } from './usernameStrings';

// Helper to choose a random element from an array
function randomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Helper to mettre en majuscule la première lettre
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate a username according to rules
export function generateUsername() {
  // 1. Définir les combinaisons possibles
  const combos = [
    ['prefix', 'noun', 'suffix'],
    ['prefix', 'noun'],
    ['prefix', 'suffix'],
    ['noun', 'suffix'],
  ];
  const combo = randomFromArray(combos);

  // 2. Récupérer les morceaux
  const parts = combo.map((type) => {
    if (type === 'prefix') return randomFromArray(prefixes);
    if (type === 'noun') return randomFromArray(nouns);
    if (type === 'suffix') return randomFromArray(suffixes);
    return '';
  });

  // 3. Définir les styles
  const styles = [
    'kebab', // flat-track-01
    'snake', // flat_track_01
    'dot', // flat.track.01
    'camel', // flatTrack01
    'pascal', // FlatTrack01
    'flat', // flattrack01
  ];
  const style = randomFromArray(styles);

  // 4. Apply style
  let username = '';
  switch (style) {
    case 'kebab':
      username = parts.map((p) => p.toLowerCase()).join('-');
      break;
    case 'snake':
      username = parts.map((p) => p.toLowerCase()).join('_');
      break;
    case 'dot':
      username = parts.map((p) => p.toLowerCase()).join('.');
      break;
    case 'camel':
      username = parts
        .map((p, i) =>
          i === 0 ? p.toLowerCase() : capitalize(p.toLowerCase())
        )
        .join('');
      break;
    case 'pascal':
      username = parts.map((p) => capitalize(p.toLowerCase())).join('');
      break;
    case 'flat':
      username = parts.map((p) => p.toLowerCase()).join('');
      break;
  }

  return username;
}
