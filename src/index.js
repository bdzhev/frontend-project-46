#!/usr/bin/env node
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import parseFile from './parser.js';
import findDiff from './find-diff.js';
import formatDifference from './formatter/formatter.js';

const getFileContent = (path) => readFileSync(resolve(cwd(), path));
const getFormat = (path) => path.split('.').at(-1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1Parsed = parseFile(getFormat(filepath1), getFileContent(filepath1));
  const file2Parsed = parseFile(getFormat(filepath2), getFileContent(filepath2));

  const difference = findDiff(file1Parsed, file2Parsed);
  const formattedResult = 
  // formatters
};

export default genDiff;