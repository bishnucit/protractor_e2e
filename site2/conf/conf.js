exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    specs: ['..//testcases//verify_all_elements.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
