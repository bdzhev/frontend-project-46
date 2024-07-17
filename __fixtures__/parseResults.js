const jsonResult1 = {
    host: "hexlet.io",
    timeout: 50,
    proxy: "123.234.53.22",
    follow: false,
    nested: {
      animal: "dog",
      sound: "woof"
    }
};

const jsonResult2 = {
  host: "hexlet.io",
  timeout: 50,
  nested: {
    animal: "cat",
    sound: "nice"
  }
};

const yamlResult1 = {
  includes: [ 'common.yaml' ],
  deliverables: [
    { 
      name: 'HTML5',
      context: {
        idref: 'html'
      },
      output: '.'
    }
  ]
};

const yamlResult2 = {
  includes: [ 'common.yaml' ],
  deliverables: [
    { 
      name: 'HTML100',
      context: {
        idref: 'html'
      },
      output: '.'
    }
  ],
  additional: {
    super: 'cool',
    mega: 'good'
  }
};

export {
  jsonResult1,
  jsonResult2,
  yamlResult1,
  yamlResult2,
};
