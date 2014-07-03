exports.config = {
  suites: {
//    'all': 'test/e2e/**/*_spec.js',
    'customers': 'test/e2e/customers/**/*_spec.js'
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