import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ManagerDashboardPage } from '../../pages/ManagerDashboardPage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';

let login: LoginPage;
let manager: ManagerDashboardPage;
let openAccount: OpenAccountPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  manager = new ManagerDashboardPage(page);
  openAccount = new OpenAccountPage(page);
  await login.openApp();
  await login.loginAsManager();
});

test('FN-04 Open Account', async () => {
  await manager.goToOpenAccount();
  await openAccount.openAccount('Harry Potter', 'Dollar');
  await expect(manager.openAccountBtn).toBeVisible();
});
