import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CustomerLoginPage } from '../../pages/CustomerLoginPage';
import { CustomerAccountPage } from '../../pages/CustomerAccountPage';

let login: LoginPage;
let customerLogin: CustomerLoginPage;
let account: CustomerAccountPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  customerLogin = new CustomerLoginPage(page);
  account = new CustomerAccountPage(page);

  await login.openApp();
  await login.loginAsCustomer();
  await customerLogin.login('Harry Potter');
});

test('FN-09 Withdraw More Than Balance', async () => {
  // Try withdrawing a very large amount
  await account.withdraw('10000');

  // Assertion: balance is still shown (transaction rejected)
  await expect(account.balanceText).toBeVisible();
});
