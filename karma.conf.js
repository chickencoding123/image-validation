module.exports = function (config) {
  config.set({
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['karma-typescript', 'jasmine'],
    preprocessors: {
      'src/*.ts': ['karma-typescript']
    },
    files: [
      { pattern: 'src/*.ts' }
    ],
    karmaTypescriptConfig: {
      compilerOptions: {
        esModuleInterop: true
      }
    },
    exclude: [
      'src/validateInNode.test.ts',
      'src/validateInNode.ts',
      'src/cli.ts'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Firefox'],
    singleRun: true
  })
}
