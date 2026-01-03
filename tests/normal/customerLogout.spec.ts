import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CustomerLoginPage } from '../../pages/CustomerLoginPage';
import { CustomerAccountPage } from '../../pages/CustomerAccountPage';

let login: LoginPage;
let customerLogin: CustomerLoginPage;
let account: CustomerAccountPage;
let page: Page;

test.beforeEach(async ({ page: playwrightPage }) => {
  page = playwrightPage;
  login = new LoginPage(page);
  customerLogin = new CustomerLoginPage(page);
  account = new CustomerAccountPage(page);

  await login.openApp();
  await login.loginAsCustomer();
  await customerLogin.login('Harry Potter');
});

test('FN-12 Customer Logout', async () => {
  await account.logout();

  await expect(customerLogin.customerDropdown).toBeVisible();
});
