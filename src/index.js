#!/usr/bin/env node
import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import parse from './parse.js';
import findDiff from './find-diff.js';
import makeFormatted from './formatter/formatter.js';

const getContent = (path) => readFileSync(resolve(cwd(), path));
const getFormat = (path) => extname(path).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1Parsed = parse(getContent(filepath1), getFormat(filepath1));
  const file2Parsed = parse(getContent(filepath2), getFormat(filepath2));

  const difference = findDiff(file1Parsed, file2Parsed);
  const formattedResult = makeFormatted(difference, format);
  return formattedResult;
};

export default genDiff;
