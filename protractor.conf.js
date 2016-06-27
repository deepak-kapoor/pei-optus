exports.config = {
  framework: 'jasmine',
  chromeOnly: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  specs: ['tests/spec/e2eSpec.js']
};