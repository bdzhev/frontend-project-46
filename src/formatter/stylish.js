#!/usr/bin/env node
import _ from 'lodash';

const addIndent = (count) => '  '.repeat(count);
const indentStep = 2;

const parseObj = (data, depth) => {
  const entries = _.sortBy(Object.entries(data), ([key]) => key);
  const lines = entries.map((node) => {
    const [key, value] = node;
    if (typeof (value) === 'object') {
      return (`${addIndent(depth)}${key}: {\n${parseObj(value, depth + 1)}}`);
    }
    return (`${addIndent(depth)}${key}: ${value}\n`);
  });
  return `{\n${lines.join('')}${addIndent(depth - indentStep)}}`;
};

const makeStylish = (node, depth = indentStep) => {
  const nodeStylized = node.map((item) => {
    const { key, value } = item;
    switch (item.status) {
      case 'same':
        return `${addIndent(depth)}${key}: ${value}`;
      case 'removed':
        return `${addIndent(depth - 1)}- ${key}: ${value}`;
      case 'added':
        if (typeof (value) === 'object') {
          return `${addIndent(depth - 1)}+ ${key}: ${parseObj(value, depth + indentStep)}`;
        }
        return `${addIndent(depth - 1)}+ ${key}: ${value}`;
      case 'changed':
        return `${addIndent(depth - 1)}- ${key}: ${item.oldValue}\n${addIndent(depth - 1)}+ ${key}: ${item.newValue}`;
      case 'hasChildren':
        return `${addIndent(depth)}${key}: {\n${makeStylish(value, depth + indentStep)}\n${addIndent(depth)}}`;
      default: throw new Error('Incorrect item status.');
    }
  });
  return `${nodeStylized.join('\n')}`;
};

export default makeStylish;
