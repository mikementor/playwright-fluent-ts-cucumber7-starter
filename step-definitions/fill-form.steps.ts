import {
  openPage,
  openComponent,
  inputTextInField,
  selectOptionsInField,
  selectRadioButtonOption,
  checkOption,
  submitForm,
  FormShouldBeSubmittedWithQueryParam,
} from '../stories';
import { CustomWorld } from '../world';
// import { expect } from 'chai';
import { Before, DataTable, Given, Then, When } from '@cucumber/cucumber';

Given('I navigate to {string}', async function (this: CustomWorld, url: string) {
  await this.p.navigateTo(url);
});

Given('I open the {string} page', async function (this: CustomWorld, page: string) {
  await this.p.runStory(openPage, page);
});

Given('I select the {string} component', async function (this: CustomWorld, component: string) {
  await this.p.runStory(openComponent, component);
});

Given(
  'I input {string} in field {string}',
  async function (this: CustomWorld, text: string, fieldLabel: string) {
    await this.p.runStory(inputTextInField, { fieldLabel, text });
  },
);

Given(
  'I select {string} in field {string}',
  async function (this: CustomWorld, options: string, fieldLabel: string) {
    await this.p.runStory(selectOptionsInField, { fieldLabel, options });
  },
);

Given('I select radio button {string}', async function (this: CustomWorld, optionText: string) {
  await this.p.runStory(selectRadioButtonOption, optionText);
});

Given('I check option {string}', async function (this: CustomWorld, optionText: string) {
  await this.p.runStory(checkOption, optionText);
});

When('I submit the form', async function (this: CustomWorld) {
  await this.p.runStory(submitForm);
});

Then(
  'the form should be submitted with {string} = {string} in the Query String',
  async function (this: CustomWorld, key: string, value: string) {
    await this.p.runStory(FormShouldBeSubmittedWithQueryParam, { key, value });
  },
);

/**
 * Before each scenario hook
 */
Before({ tags: '@foo' }, async function (this: CustomWorld) {
  this.foo = true;
});
Then(
  /^the form should be submitted in the Query String with$/,
  async function (this: CustomWorld, table: DataTable) {
    // eslint-disable-next-line no-console
    console.log(table);
    // expect(false).to.equal(true, 'False should be true');
  },
);
