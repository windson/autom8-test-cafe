const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 9001)
    .then(tc => {
        testcafe         = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['./testcafe/tests/home.js'])
            .browsers('chrome:headless')
            .reporter('junit', 'report.xml')
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });
