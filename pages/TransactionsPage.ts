import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransactionsPage extends BasePage {
  transactionsTable: Locator;

  constructor(page: Page) {
    super(page);
    this.transactionsTable = page.locator('table');
  }
}
