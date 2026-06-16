class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('[id="phUsernameLogin"]');
    this.passwordInput = page.locator('[id="phPwdLogin"]');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.emailValidation = page.getByText('Sorry, you entered an incorrect email or password');
    this.errorMessage = page.getByText('Sorry, email or password is required');
    this.visiblePass = page.locator('[d="M3 3l18 18"]');
    this.loginsuccess = page.locator('[src="/img/icon/logo.svg"]');
    }
  async goto() {
    await this.page.goto('https://staging-backoffice.influmatch.ai/login');
  }

  async login(email, password) {
    if (email) await this.emailInput.fill(email);
    if (password) await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async visibleIcon(email, password) {
    if (email) await this.emailInput.fill(email);
    if (password) await this.passwordInput.fill(password);
    await this.visiblePass.click();
  }

  async getSuccessElement() {
    return this.loginsuccess;
  }
}
module.exports = LoginPage;