exports.config = {
  suites: {
    'all': 'test/e2e/**/*_spec.js'
  },

  multiCapabilities: [
    {
      'browserName': 'chrome'
    }
  ],

  baseUrl: 'http://localhost:9000',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  }
}