exports.config = {
  framework : 'mocha',
  specs: [
    'specs/main.spec.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  }
};
