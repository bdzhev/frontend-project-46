import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import parse from './parse.js';
import findDiff from './find-diff.js';
import makeFormatted from './formatter/formatter.js';

const getData = (filepath) => {
  const content = readFileSync(resolve(cwd(), filepath));
  const type = extname(filepath).slice(1);
  return parse(content, type);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const difference = findDiff(data1, data2);
  const formattedResult = makeFormatted(difference, format);
  return formattedResult;
};

export default genDiff;
