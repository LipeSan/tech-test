# Tech test
This tech test contains examples of how to create page objects and tests using [WebdriverIO 5.0](https://github.com/webdriverio/webdriverio/tree/master/packages) and [TypeScript](https://www.typescriptlang.org/). The application under test is tourdedave's "[the-internet](https://github.com/tourdedave/the-internet)" project which contains examples of hard to automate pages. The test runner is the [wdio-mocha-framework](https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-mocha-framework). 
For API test we are using [chai](https://www.chaijs.com/plugins/chai-http/) to validation and using [supertest](https://github.com/visionmedia/supertest#readme) to access the api.

This project was created to serve as a reference to others interested in WebdriverIO TypeScript tests.

# Dependencies
* Node.js - The latest [LTS release](https://nodejs.org/en/)
* Java -- Needed to run the selenium server
* Chrome.

# How run test
1 - you need to access the project path on cmd

2 - you need to execute `npm install`

3 - you need to adjust data test for execution on ./src/data-test/data-test.json.

{

    "User":{
    
        ... [`information for login`]
    },
    "MenuHome":{
        ... [`list of menu. the script uses menu's text to access it`]
    },
    "Allocation":{
        "date":{
            "day":"2", [`here, you put day to locate the task. you can put 1, 2, 3, 4, 5, 6, 7, 8, 9, ... ou 31`]
            "month":"12", [`here, you put month to locate the task. you can put 01, 02, 03, 04, 05, 06, 07, 08, 09, ..ou 12`]
            "year":"2019" [`here, you put year to locate the task`]
        },
        "task":"Task QA Tech Test 2 " [`here, you put the task name. you need to put space in last phrase` ]
    },
    "ApiLogin": {
        ...[`script uses to test on API`]
    },
    "AllocationConfirm":{
        "items":[
            {
                "id":308 [`here, you put task id than you would like confirm`]
            }
        ]
    }
}

4 - you can run all tests with comand `npm run test`
    or just e2e `npm run test-e2e`
    or just api `npm run test-api`

5 - on cmd will show result.

# Project folders
** .src/data-test -> here, there are files about data test, for example login information ...

** .src/pages -> here, there are files about elements and actions on the page ...

** .src/test-api -> here, there are files about api's script ...

** .src/test-e2e -> here, there are files about e2e's script for example login, access to menu and confirm allocation...

** .src/selectors -> here, there are files about Page's elements, I usually use xPath for selector.



