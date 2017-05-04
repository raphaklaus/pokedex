exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework : 'jasmine2',
  specs: [
    'specs/*/*.spec.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
};
