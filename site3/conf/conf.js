exports.config = {

    onPrepare: function(){
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));
    },

    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
           browserName = caps.get('browserName');
           browserVersion = caps.get('version');
           platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
       });
    },

    directConnect: true,

    multiCapabilities: [
        {
        'browserName': 'chrome'
        },
        /* {
         'browserName': 'firefox'
        }, */

    ], maxSessions: -1, //change to 1 if want to run one after another

    framework: 'jasmine',

    specs: ['..//tests//basic_checks.js',

            ],


    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
