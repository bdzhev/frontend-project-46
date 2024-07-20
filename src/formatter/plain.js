#!/usr/bin/env node
const formatValue = (value) => {
  if (value === null) {
    return 'null';
  }
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
      case 'changed': {
        const line = (`Property '${keyPrefix.concat(node.key)}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`);
        return ([...acc, line]);
      }
      case 'removed': {
        const line = `Property '${keyPrefix.concat(node.key)}' was removed`;
        return ([...acc, line]);
      }
      case 'added': {
        const line = `Property '${keyPrefix.concat(node.key)}' was added with value: ${formatValue(node.value)}`;
        return ([...acc, line]);
      }
      case 'hasChildren': {
        const line = makePlain(node.value, keyPrefix.concat(node.key, '.'));
        return ([...acc, line]);
      }
      default:
        throw new Error(`Unknown item status. ${node.status}`);
    }
  }, []);
  return result.join('\n');
};

export default makePlain;
