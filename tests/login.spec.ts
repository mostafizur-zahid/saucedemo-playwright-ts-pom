import { test, expect } from '../src/fixtures/test';

test.describe('Negative Login', () => {
  test('should reject a locked-out user', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.loginError).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  });
});
