import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CustomerAccountPage extends BasePage {
  depositTab: Locator;
  withdrawTab: Locator;
  amountInput: Locator;
  submitBtn: Locator;
  balanceText: Locator;
  logoutBtn: Locator;

  
  transactionsBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.depositTab = page.locator('button[ng-click="deposit()"]');
    this.withdrawTab = page.locator('button[ng-click="withdrawl()"]');
    this.amountInput = page.locator('input[ng-model="amount"]');
    this.submitBtn = page.locator('button[type="submit"]');
  this.balanceText = page.locator('strong.ng-binding').first();

    this.logoutBtn = page.locator('button[ng-click="byebye()"]');

  
    this.transactionsBtn = page.locator('button[ng-click="transactions()"]');
  }

  async deposit(amount: string): Promise<void> {
    await this.depositTab.click();
    await this.amountInput.fill(amount);
    await this.submitBtn.click();
  }

  async withdraw(amount: string): Promise<void> {
    await this.withdrawTab.click();
    await this.amountInput.fill(amount);
    await this.submitBtn.click();
  }

  async logout(): Promise<void> {
    await this.logoutBtn.click();
  }


  async goToTransactions(): Promise<void> {
    await this.transactionsBtn.click();
  }
}
