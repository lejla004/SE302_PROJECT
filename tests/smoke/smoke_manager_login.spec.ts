import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ManagerDashboardPage } from '../../pages/ManagerDashboardPage';
import { AddCustomerPage } from '../../pages/AddCustomerPage';

let login: LoginPage;
let manager: ManagerDashboardPage;
let addCustomer: AddCustomerPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  manager = new ManagerDashboardPage(page);
  addCustomer = new AddCustomerPage(page);
  await login.openApp();
  await login.loginAsManager();
});

test('SM-03 Add Customer Page Load', async () => {
  await manager.goToAddCustomer();
  await expect(addCustomer.firstNameInput).toBeVisible();
});
