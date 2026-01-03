import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

let login: LoginPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  await login.openApp();
});

test('SM-01 Login Page Load', async () => {
  await expect(login.managerLoginBtn).toBeVisible();
  await expect(login.customerLoginBtn).toBeVisible();
});
