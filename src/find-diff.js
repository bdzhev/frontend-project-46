#!/usr/bin/env node
import _ from 'lodash';

const findDiff = (dataA, dataB) => {
  const keysSorted = _.sortBy(_.union(Object.keys(dataA), Object.keys(dataB)));
  const result = keysSorted.map((key) => {
    const dataAValue = dataA[key];
    const dataBValue = dataB[key];

    if (!Object.hasOwn(dataA, key)) {
      return ({ key, status: 'added', value: dataBValue });
    }

    if (!Object.hasOwn(dataB, key)) {
      return ({ key, status: 'removed', value: dataAValue });
    }

    if (typeof (dataAValue) === 'object' && typeof (dataBValue) === 'object') {
      return ({ key, status: 'same', value: findDiff(dataAValue, dataBValue) });
    }

    if (dataAValue === dataBValue) {
      return ({ key, status: 'same', value: dataAValue });
    }

    return ({
      key,
      status: 'changed',
      oldValue: dataAValue,
      newValue: dataBValue,
    });
  });
  return result;
};

export default findDiff;
