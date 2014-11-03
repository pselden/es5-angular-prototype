exports.config = {
  allScriptsTimeout: 11000,

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:4000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  },

  suites: {
    series: 'e2e/series/*.test.js',
    events: 'e2e/events/*.test.js'
  },

  chromeDriver: '../node_modules/webdriver-manager/selenium/chromedriver'
};
