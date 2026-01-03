import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OpenAccountPage extends BasePage {
  customerSelect: Locator;
  currencySelect: Locator;
  processBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.customerSelect = page.locator('#userSelect');
    this.currencySelect = page.locator('#currency');
    this.processBtn = page.locator('button[type="submit"]');
  }

  async openAccount(customerName: string, currency: string): Promise<void> {
    await this.customerSelect.selectOption({ label: customerName });
    await this.currencySelect.selectOption(currency);
    await this.processBtn.click();
  }
}
