# Description

## Instructions
A small test case for a login page function in the task file (TypeScript) file that checks whether a user can log in with valid credentials.
Write the test case in a test framework of one's choice.

Requirements:
- Use a mock or similar techniques for any external dependencies (e.g. a database or authentication service).
- Check for both positive and negative cases
- Use descriptive test method names and comments to explain the test case.

## Tools
For the assignment, I chose a set of widely known and well-supported tools:
- `Mocha` - Test framework running on Node.js;
- `Chai` - Assertion library;
- `Sinon.JS` - Mocking framework;
- `Sinon-chai` - A set of custom assertions for Sinon.JS of custom assertions for Chai.
- `ts-mocha` - A wrapper on top of `mocha` that simplifies setup and running tests with `ts-node`

## Running
> Node.js v14-v16 is required to run the code
- Run `npm i` to install all required dependencies
- To build the code, execute `npm run build`
- To run the test suite, call `npm test`
