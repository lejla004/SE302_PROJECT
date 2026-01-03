import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ManagerDashboardPage } from '../../pages/ManagerDashboardPage';

let login: LoginPage;
let manager: ManagerDashboardPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  manager = new ManagerDashboardPage(page);
  await login.openApp();
});

test('FN-01 Manager Login', async () => {
  await login.loginAsManager();
  await expect(manager.addCustomerBtn).toBeVisible();
});
