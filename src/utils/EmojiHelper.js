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

    case 'pooping':
      return {
        emoji: './asset/images/emoji/014-grinning.svg',
        text:
          'Excuse me! I need to do some private business, please look aside.'
      };
    case 'died-from-hunger':
      return {
        emoji: './asset/images/emoji/004-expressionless.svg',
        text:
          'I died from hunger. You have not been a good owner. Try feeding him more often next time.'
      };

    case 'died-from-age':
      return {
        emoji: './asset/images/emoji/004-expressionless.svg',
        text:
          'I died from old age. But congratulations for taking such a good care of him. You have been a great owner.'
      };

    default:
      return null;
  }
}
