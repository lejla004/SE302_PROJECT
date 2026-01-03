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

test('FN-08 Withdraw Money', async () => {
  // Deposit first to ensure balance exists
  await account.deposit('200');

  // Withdraw money
  await account.withdraw('50');

  // Assertion: balance should still be visible
  await expect(account.balanceText).toBeVisible();
});
