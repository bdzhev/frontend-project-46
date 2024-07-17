import findDiff from '../src/find-diff.js';
import {
  flat1,
  flat2,
  nested1,
  nested2,
  nestedResult,
  flatResult,
} from '../__fixtures__/findDiffFixtures.js'

test('findDiff-flat', () => {
  expect(findDiff(flat1, flat2)).toEqual(flatResult);
});

test('findDiff-nested', () => {
  expect(findDiff(nested1, nested2)).toEqual(nestedResult);
});
