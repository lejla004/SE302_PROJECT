import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ManagerDashboardPage extends BasePage {
  addCustomerBtn: Locator;
  openAccountBtn: Locator;
  customersBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.addCustomerBtn = page.locator('button[ng-click="addCust()"]');
    this.openAccountBtn = page.locator('button[ng-click="openAccount()"]');
    this.customersBtn = page.locator('button[ng-click="showCust()"]');
  }

  async goToAddCustomer(): Promise<void> {
    await this.addCustomerBtn.click();
  }

  async goToOpenAccount(): Promise<void> {
    await this.openAccountBtn.click();
  }

  async goToCustomers(): Promise<void> {
    await this.customersBtn.click();
  }
}
