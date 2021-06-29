# playwright-fluent-cucumber-ts-starter
![Build status](https://github.com/mikementor/playwright-fluent-ts-cucumber7-starter/actions/workflows/main.yml/badge.svg)

Starter project to write E2E tests with `cucumber-js v7` and `playwright-fluent` in TypeScript language.
### Table of Contents

- [Prerequisites](#prerequisites)
- [How to install](#how-to-install)
- [How to run tests](#how-to-run-tests)
- [How to develop](#how-to-develop)
- [Known Issues](#known-issues)

### Prerequisites
- [Nodejs](https://nodejs.org/en/download/)
  
### How to install

```
git clone https://github.com/mikementor/playwright-fluent-ts-cucumber7-starter.git
npm install
```

### How to run tests
Just run tests:
```
npm test
```

Run tests in watch-mode

```
npm run watch
```

### How to develop

## To debug a scenario in Visual Studio Code

- tag the scenario with `@debug`
- set the breakpoints in the typescript code
- Start debugging

## To run only specific scenarios

- tag the scenario(s) with `@only`
- run the command `npm run only`.

## To run scenarios in heedful/live mode

- tag the scenario(s) with `@live`
- run the command `npm run live`

The browser will stay opened at the end of the test execution.

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`.

## To create a new step

- first write the Given/When/Then sentence:

  ```gherkin
  Given I push "foo" on "bar"
  ```

- run the npm script: 

  ```sh
  npm run snippets
  ```

- the script will report the missing step(s): you just need to copy and paste them in the step definitions file:

  ```sh
  Given('I push {string} on {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  ```
(Or use Autosuggestion from your IDE)

## To use a custom option on the CLI

You can set up environment variables by customizing the file [set-environment-variables.ts](env/set-environment-variables.ts).

When running on a CI, you should setup your jobs with the expected environment variables.

## To use a custom World Objet

- customize the given Custom World Object : [custom-world](world/custom-world.ts)


### Known Issues
