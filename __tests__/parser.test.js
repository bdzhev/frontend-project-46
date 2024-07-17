import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import parseFile from '../src/parser.js';
import { jsonResult1, jsonResult2, yamlResult1, yamlResult2 } from '../__fixtures__/parseResults.js';

const path1Json = './__fixtures__/testfile1.json';
const path2Json = './__fixtures__/testfile2.json';
const path1Yaml = './__fixtures__/testfile1.yaml';
const path2Yaml = './__fixtures__/testfile2.yml';

const getFileContent = (path) => readFileSync(resolve(cwd(), path));
const getFormat = (path) => path.split('.').at(-1);

test('parser JSON cases', () => {
  expect(parseFile(getFormat(path1Json), getFileContent(path1Json))).toEqual(jsonResult1);
  expect(parseFile(getFormat(path2Json), getFileContent(path2Json))).toEqual(jsonResult2);
});

test('parser YAML/YML cases', () => {
  expect(parseFile(getFormat(path1Yaml), getFileContent(path1Yaml))).toEqual(yamlResult1);
  expect(parseFile(getFormat(path2Yaml), getFileContent(path2Yaml))).toEqual(yamlResult2);
});
