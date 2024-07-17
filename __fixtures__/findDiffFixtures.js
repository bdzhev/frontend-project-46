const flat1 = {
  name: 'John',
  surname: 'Test',
  age: 42,
  job: 'taxi driver',
  favSport: 'football'
};

const flat2 = {
  name: 'Mary',
  surname: 'Test',
  age: 56,
  job: 'developer',
  hobby: 'art'
};

const flatResult = [
  {
    key: 'age',
    status: 'changed',
    oldValue: 42,
    newValue: 56
  },
  {
    key: 'favSport',
    status: 'removed',
    value: 'football'
  },
  {
    key: 'hobby',
    status: 'added',
    value: 'art'
  },
  {
    key: 'job',
    status: 'changed',
    oldValue: 'taxi driver',
    newValue: 'developer'
  },
  {
    key: 'name',
    status: 'changed',
    oldValue: 'John',
    newValue: 'Mary' 
  },
  {
    key: 'surname',
    status: 'same',
    value: 'Test' 
  }
];

const nested1 = {
  animal: 'dog',
  sound: 'loud',
  bodyparts: {
    body: { legs: 4, tail: 1 },
    head: { ears: 2, nose: 1, mouth: 1, eyes: 2 }
  },
  teeth: 'many'
};

const nested2 = {
  animal: 'trex',
  sound: 'loud',
  bodyparts: {
    body: { legs: 2, tail: 1, arms: 2 },
    head: { eyes: 2, mouth: 1 }
  },
  teeth: { big: 20, small: 40 }
};

const nestedResult = [
  {
    key: 'animal',
    status: 'changed',
    oldValue: 'dog',
    newValue: 'trex'
  },
  {
    key: 'bodyparts',
    status: 'same',
    value: [
      {
        key: 'body',
        status: 'same',
        value: [
          {
            key: 'arms',
            status: 'added',
            value: 2
          },
          {
            key: 'legs',
            status: 'changed',
            oldValue: 4,
            newValue: 2
          },
          {
            key: 'tail',
            status: 'same',
            value: 1
          }
        ]
      },
      {
        key: 'head',
        status: 'same',
        value: [
          {
            key: 'ears',
            status: 'removed',
            value: 2
          },
          {
            key: 'eyes',
            status: 'same',
            value: 2
          },
          {
            key: 'mouth',
            status: 'same',
            value: 1
          },
          {
            key: 'nose',
            status: 'removed',
            value: 1
          }
        ]
      }
    ]
  },
  {
    key: 'sound',
    status: 'same',
    value: 'loud'
  },
  {
    key: 'teeth',
    status: 'changed',
    oldValue: 'many',
    newValue: {
      big: 20,
      small: 40
    }
  }

];

export {
  flat1,
  flat2,
  nested1,
  nested2,
  nestedResult,
  flatResult,
};
