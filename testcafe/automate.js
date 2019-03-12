const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 9001)
    .then(tc => {
        testcafe         = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['./testcafe/tests/home.js'])
            .browsers('chrome:headless')
            .reporter('xunit', 'report.xml')
            .run();
    })
    .then(failedCount => {
        if(failedCount == 0){
            console.log('All tests passed successfully!');
        }else{
            console.log('Tests failed: ' + failedCount);
        }
        testcafe.close();
    });
