import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CustomerLoginPage extends BasePage {
  customerDropdown: Locator;
  loginBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.customerDropdown = page.locator('#userSelect');
    this.loginBtn = page.locator('button[type="submit"]');
  }

  async login(customerName: string): Promise<void> {
    await this.customerDropdown.selectOption({ label: customerName });
    await this.loginBtn.click();
  }
}
