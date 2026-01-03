import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CustomerLoginPage } from '../../pages/CustomerLoginPage';
import { CustomerAccountPage } from '../../pages/CustomerAccountPage';
import { TransactionsPage } from '../../pages/TransactionsPage';

let login: LoginPage;
let customerLogin: CustomerLoginPage;
let account: CustomerAccountPage;
let transactions: TransactionsPage;

test.beforeEach(async ({ page }) => {
  login = new LoginPage(page);
  customerLogin = new CustomerLoginPage(page);
  account = new CustomerAccountPage(page);
  transactions = new TransactionsPage(page);

  await login.openApp();
  await login.loginAsCustomer();
  await customerLogin.login('Harry Potter');
});

test('FN-10 View Transactions', async () => {
  await account.goToTransactions();

  // Assertion: transactions table should be visible
  await expect(transactions.transactionsTable).toBeVisible();
});
