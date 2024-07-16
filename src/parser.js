#!/usr/bin/env node
import { load } from 'js-yaml';

const parseFile = (format, fileContent) => {
  switch (format) {
    case 'json':
    return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
    return load(fileContent);
    default:
    throw new Error('Unknown file format. Use "gendiff -h" for additional information.')
  }
};

export default parseFile;