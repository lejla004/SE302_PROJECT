import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openApp(): Promise<void> {
    await this.page.goto(
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
      { waitUntil: 'domcontentloaded' }
    );
  }
}
