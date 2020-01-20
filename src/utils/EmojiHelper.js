export function getEmoji(emotion) {
  switch (emotion) {
    case 'hungry':
      return {
        emoji: './asset/images/emoji/028-winking face.svg',
        text: 'I am hungry'
      };
    case 'eating':
      return {
        emoji: './asset/images/emoji/006-full.svg',
        text: 'Yummy!'
      };
    case 'want-to-poop':
      return {
        emoji: './asset/images/emoji/003-dizzy.svg',
        text: 'I want to go to the bathroom'
      };
    case 'sleepy':
      return {
        emoji: './asset/images/emoji/026-tired.svg',
        text: 'I am sleepy'
      };
    case 'sleeping':
      return {
        emoji: './asset/images/emoji/020-sleeping.svg',
        text: 'Good Night!'
      };
    case 'unwell':
      return {
        emoji: './asset/images/emoji/008-vomiting.svg',
        text: `I feel unwell`
      };
    case 'happy':
      return {
        emoji: './asset/images/emoji/022-smiling face.svg',
        text: 'I am happy'
      };
    default:
      return null;
  }
}
