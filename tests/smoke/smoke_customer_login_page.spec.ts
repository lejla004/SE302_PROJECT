import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CustomerLoginPage } from '../../pages/CustomerLoginPage';

let login: LoginPage;
let customerLogin: CustomerLoginPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  customerLogin = new CustomerLoginPage(page);
  await login.openApp();
});

test('SM-04 Customer Login Page Load', async () => {
  await login.loginAsCustomer();
  await expect(customerLogin.customerDropdown).toBeVisible();
});
