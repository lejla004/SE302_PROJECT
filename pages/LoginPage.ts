import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  managerLoginBtn: Locator;
  customerLoginBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.managerLoginBtn = page.locator('button[ng-click="manager()"]');
    this.customerLoginBtn = page.locator('button[ng-click="customer()"]');
  }

  async loginAsManager(): Promise<void> {
    await this.managerLoginBtn.click();
  }

  async loginAsCustomer(): Promise<void> {
    await this.customerLoginBtn.click();
  }
}
