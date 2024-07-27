import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormatted = (difference, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(difference);
    case 'plain':
      return makePlain(difference);
    case 'json':
      return JSON.stringify(difference);

    default: throw new Error(`Unknown style option '${format}'
      Available options: "stylish", "plain" and "json". More info: gendiff -h`);
  }
};
export default makeFormatted;
