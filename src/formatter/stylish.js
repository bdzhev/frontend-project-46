import _ from 'lodash';

const indentStep = 1;
const spaceForOperators = 2;
const indentLength = 4;

const makeIndent = (depth, spaceCount = indentLength) => (' '.repeat((depth * spaceCount) - spaceForOperators));

const stringify = (differenceValue, depth) => {
  if (!_.isObject(differenceValue)) {
    return String(differenceValue);
  }
  const entries = _.sortBy(Object.entries(differenceValue), ([key]) => key);
  const lines = entries
    .map(([key, value]) => `${makeIndent(depth + indentStep)}  ${key}: ${stringify(value, depth + indentStep)}`)
    .join('\n');

  return `{\n${lines}\n  ${makeIndent(depth)}}`;
};

const makeLines = (difference, depth) => difference
  .map((node) => {
    const { key, value } = node;
    switch (node.type) {
      case 'unchanged':
        return `${makeIndent(depth)}  ${key}: ${stringify(value, depth)}`;
      case 'removed':
        return `${makeIndent(depth)}- ${key}: ${stringify(value, depth)}`;
      case 'added':
        return `${makeIndent(depth)}+ ${key}: ${stringify(value, depth)}`;
      case 'changed': {
        const deletedValue = `${makeIndent(depth)}- ${key}: ${stringify(node.value1, depth)}`;
        const addedValue = `${makeIndent(depth)}+ ${key}: ${stringify(node.value2, depth)}`;
        return `${deletedValue}\n${addedValue}`;
      }
      case 'nested':
        return `${makeIndent(depth)}  ${key}: {\n${makeLines(value, depth + indentStep).join('\n')}\n${makeIndent(depth)}  }`;
      default:
        throw new Error(`Incorrect node type. ${node.type}`);
    }
  });

const makeStylish = (difference) => `{\n${makeLines(difference, indentStep).join('\n')}\n}`;

export default makeStylish;
