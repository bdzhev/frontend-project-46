#!/usr/bin/env node
const formatValue = (value) => {
  if (typeof (value) === 'object' || Array.isArray(value)) {
    return '[complex value]';
  }
  if (typeof (value) === 'number' || typeof (value) === 'boolean') {
    return value;
  }
  return `'${value}'`;
};

const makePlain = (difference, keyPrefix = '') => {
  const result = difference.reduce((acc, node) => {
    switch (node.status) {
      case 'same':
        return acc;
      case 'changed':
        acc.push(`Property '${keyPrefix.concat(node.key)}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`);
        return acc;
      case 'removed':
        acc.push(`Property '${keyPrefix.concat(node.key)}' was removed`);
        return acc;
      case 'added':
        acc.push(`Property '${keyPrefix.concat(node.key)}' was added with value: ${formatValue(node.value)}`);
        return acc;
      case 'hasChildren':
        acc.push(makePlain(node.value, keyPrefix.concat(node.key, '.')));
        return acc;
      default:
        throw new Error(`Unknown item status. ${node.status}`);
    }
  }, []);
  return result.join('\n');
};

export default makePlain;
