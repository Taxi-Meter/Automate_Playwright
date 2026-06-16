import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
require('dotenv').config();
const  LoginPage = require('../pages/LoginPage');
const  OtpPage  = require('../pages/OtpPage');


test.describe('Egg_Digital', () => {

  test('@TC_001 Full successful login end-to-end', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const otpPage = new OtpPage(page);
    const email = process.env.SECRET_USER;
    const password = process.env.SECRET_PASS;
    const otp = process.env.SECRET_OTP;

    await loginPage.goto();
    await loginPage.login(email, password);
    await page.waitForTimeout(2000);
    await otpPage.enterOtp(otp);
    await page.waitForTimeout(2000);
    const successElement = await loginPage.getSuccessElement();
    await expect(successElement).toBeVisible();
  });

  test('@TC_002 Login fails with wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const email = process.env.SECRET_USER;
  
    await loginPage.goto();
    await loginPage.login(email,'EggDigital@2026');
    await page.waitForTimeout(2000);
    await expect(loginPage.emailValidation).toBeVisible();
  });

  test('@TC_003 Login fails when email and password are both empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const email = process.env.SECRET_USER;
  
    await loginPage.goto();
    await loginPage.login('','');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('Bonus: Verify clicking eye icon changes input type between password and text', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const otpPage = new OtpPage(page);
      const email = process.env.SECRET_USER;
      const password = process.env.SECRET_PASS;
    
      await loginPage.goto();
      await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
      await loginPage.visibleIcon(email, password);
      await expect(loginPage.passwordInput).toHaveAttribute('type', 'text');
  });

});