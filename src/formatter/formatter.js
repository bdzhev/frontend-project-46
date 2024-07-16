#!/usr/bin/env node
import makeStylish from './stylish.js'
import makePlain from './plain.js'
const format = (difference, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(difference);
    case 'plain':
      return makePlain(difference);
    case 'json':

    default: throw new Error(`Unknown style option.
      Available options: "stylish", "plain" and "json". More info: gendiff -h`);
  }
};
export default format;