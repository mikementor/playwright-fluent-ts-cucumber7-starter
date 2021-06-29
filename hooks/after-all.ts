import { AfterAll } from '@cucumber/cucumber';

AfterAll(async function () {
  // eslint-disable-next-line no-console
  console.log('After All');
});
