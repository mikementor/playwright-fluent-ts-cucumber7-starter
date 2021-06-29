import { CustomWorld } from '../world';
import { Before } from '@cucumber/cucumber';
import { PlaywrightFluent } from 'playwright-fluent';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isCI = require('is-ci');

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: CustomWorld) {
  this.debug = true;
});

/**
 * Before each scenario hook
 */
Before(async function (this: CustomWorld) {
  this.p = new PlaywrightFluent()
    .withBrowser('chromium')
    .recordPageErrors()
    .recordFailedRequests()
    .withCursor()
    .withOptions({ headless: true });
});

/**
 * Before each scenario hook
 */
Before({ tags: '@live' }, async function (this: CustomWorld) {
  this.live = true;
});

/**
 * Before each scenario hook
 */
Before({ tags: '@headful' }, async function (this: CustomWorld) {
  // eslint-disable-next-line no-console
  console.log('running in headful mode');
  this.p.withOptions({ headless: false });
});

/**
 * Before each scenario hook
 */
Before({ tags: '@live or @debug' }, async function (this: CustomWorld) {
  if (isCI) {
    // eslint-disable-next-line no-console
    console.log('tags @live and @debug are ignored on CI');
    return;
  }

  // eslint-disable-next-line no-console
  console.log('running in headful mode when @live or @debug is set on the Scenario');
  this.p.withOptions({ headless: false });
});

/**
 * Before each scenario hook
 */
// Before({ tags: '@recordRequests' }, async function (this: CustomWorld) {
//   // this.p.recordRequestsTo('/');
// });
