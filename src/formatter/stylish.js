#!/usr/bin/env node
import _ from 'lodash';

const addIndent = (count) => '  '.repeat(count);
const indentStep = 1;

const parseObj = (data, depth) => {
  const entries = _.sortBy(Object.entries(data), ([key]) => key);
  const lines = entries.map((node) => {
    const [key, value] = node;
    if (typeof (value) === 'object') {
      return (`${addIndent(depth + indentStep)}${key}: {\n${parseObj(value, depth + 1)}}`);
    }
    return (`${addIndent(depth + indentStep)}${key}: ${value}\n`);
  });
  return `{\n${lines.join('')}${addIndent(depth - indentStep)}}`;
};

const makeStylish = (node, depth = 1) => {
  const nodeStylized = node.map((item) => {
    const { key, value } = item;
    const newDepth = depth + indentStep;
    switch (item.status) {
      case 'same':
        return `${addIndent(newDepth)}${key}: ${value}`;
      case 'removed':
        return `${addIndent(newDepth - 1)}- ${key}: ${value}`;
      case 'added':
        if (typeof (value) === 'object') {
          return `${addIndent(newDepth - 1)}+ ${key}: ${parseObj(value, newDepth + indentStep)}`;
        }
        return `${addIndent(newDepth - 1)}+ ${key}: ${value}`;
      case 'changed':
        return `${addIndent(newDepth - 1)}- ${key}: ${item.oldValue}\n${addIndent(newDepth - 1)}+ ${key}: ${item.newValue}`;
      case 'hasChildren':
        return `${addIndent(newDepth)}${key}: ${makeStylish(value, newDepth + indentStep)}`;
      default: throw new Error('Incorrect item status.');
    }
  });
  return `{\n${nodeStylized.join('\n')}\n${addIndent(depth - indentStep)}}`;
};

export default makeStylish;
