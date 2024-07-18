import genDiff from "../src/index.js";
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';

const path1JSON = '__fixtures__/testfile1.json';
const path2JSON = '__fixtures__/testfile2.json';
const path1YAML = '__fixtures__/testfile1.yaml';
const path2YAML= '__fixtures__/testfile2.yml';

const getContent = (pathRaw) => resolve(cwd(), pathRaw);

test('flat cases', () => {
  const case1Path = getContent('__fixtures__/resultFlat_stylish.txt');
  expect(genDiff(path1JSON, path2JSON))
  .toEqual(readFileSync(case1Path, 'utf-8'));
  
  expect(genDiff(path1JSON, path2JSON, 'stylish'))
  .toEqual(readFileSync(case1Path, 'utf-8'));
  
  const case2Path = getContent('__fixtures__/resultFlat_plain.txt');
  expect(genDiff(path1JSON, path2JSON, 'plain'))
  .toEqual(readFileSync(case2Path, 'utf-8'));

  const case3Path = getContent('__fixtures__/resultFormatted.json');
  expect(JSON.parse(genDiff(path1JSON, path2JSON, 'json')))
  .toEqual(JSON.parse(readFileSync(case3Path)));
});


test('nested yaml cases', () => {
  const case4Path = getContent('__fixtures__/resultNested_stylish.txt');
  expect(genDiff(path1YAML, path2YAML))
  .toEqual(readFileSync(case4Path, 'utf-8'));

  expect(genDiff(path1YAML, path2YAML, 'stylish'))
  .toEqual(readFileSync(case4Path, 'utf-8'));

  const case5Path = getContent('__fixtures__/resultNested_plain.txt');
  expect(genDiff(path1YAML, path2YAML, 'plain'))
  .toEqual(readFileSync(case5Path, 'utf-8'));
});

test('hexlet-test', () => {
  const hexletCaseFile = getContent('__fixtures__/hexlet-test.txt');
  const hexletpath1 = '__fixtures__/hexlet-file1.json';
  const hexletpath2 = '__fixtures__/hexlet-file2.json';

  expect(genDiff(hexletpath1, hexletpath2))
  .toEqual(readFileSync(hexletCaseFile, 'utf-8'));
});
