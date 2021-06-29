import { CustomWorld } from '../world';
import { After, Status } from '@cucumber/cucumber';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isCI = require('is-ci');

After(async function (this: CustomWorld, testCase: ITestCaseHookParameter) {
  if (testCase?.result?.status === Status.FAILED && this.p) {
    const screenshot: string = await this.p.takeFullPageScreenshotAsBase64();
    await this.attach(new Buffer(screenshot, 'base64'), 'image/png');
  }

  if (this.p && isCI) {
    await this.p.close();
    return;
  }

  if (this.live) {
    // do not close the browser
    return;
  }

  if (this.p) {
    await this.p.close();
  }
});

// /**
//  * After each scenario hook
//  */
// After(async function (this: CustomWorld) {
//   // await this.p.runStory(reportPageErrors, this);
//   // await this.p.runStory(reportFailedRequests, this);
//   // await this.p.runStory(reportRecordedRequests, this);
// });
