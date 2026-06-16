class OtpPage {
  constructor(page) {
    this.page = page;
    this.otpInput = page.locator('input[id^="phPin"]');
    this.verifyButton = page.getByRole('button', { name: 'Verify' });
  }

  async enterOtp(otpCode) {
    for (let i = 0; i < otpCode.length; i++) {
        const otp = otpCode
        await this.otpInput.nth(i).fill(otp[i]);
        console.log(`กรอกช่องที่ ${i} ด้วยเลข: ${otp[i]}`);
    };
    await this.verifyButton.click();
  }
}

module.exports = OtpPage;
