#!/usr/bin/env node
import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import parseFile from './parser.js';
import findDiff from './find-diff.js';
import makeFormatted from './formatter/formatter.js';

const getContent = (path) => readFileSync(resolve(cwd(), path));
const getFormat = (path) => extname(path).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1Parsed = parseFile(getFormat(filepath1), getContent(filepath1));
  const file2Parsed = parseFile(getFormat(filepath2), getContent(filepath2));

  const difference = findDiff(file1Parsed, file2Parsed);
  const formattedResult = makeFormatted(difference, format);
  return formattedResult;
  // formatters
};

export default genDiff;
