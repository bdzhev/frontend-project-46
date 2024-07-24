#!/usr/bin/env node
import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import parse from './parse.js';
import findDiff from './find-diff.js';
import makeFormatted from './formatter/formatter.js';

const getContent = (path) => readFileSync(resolve(cwd(), path));
const getFileType = (path) => extname(path).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(getContent(filepath1), getFileType(filepath1));
  const data2 = parse(getContent(filepath2), getFileType(filepath2));

  const difference = findDiff(data1, data2);
  const formattedResult = makeFormatted(difference, format);
  return formattedResult;
};

export default genDiff;
