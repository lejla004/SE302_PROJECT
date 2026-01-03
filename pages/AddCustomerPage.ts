import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddCustomerPage extends BasePage {
  firstNameInput: Locator;
  lastNameInput: Locator;
  postCodeInput: Locator;
  addCustomerBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('input[ng-model="fName"]');
    this.lastNameInput = page.locator('input[ng-model="lName"]');
    this.postCodeInput = page.locator('input[ng-model="postCd"]');
    this.addCustomerBtn = page.locator('button[type="submit"]');
  }

  async addCustomer(
    firstName: string,
    lastName: string,
    postCode: string
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postCodeInput.fill(postCode);
    await this.addCustomerBtn.click();
  }
}
