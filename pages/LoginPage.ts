import { Page, Locator } from '@playwright/test';
import { UI_TEXT } from '../data/uiTexts';

export class LoginPage {
  private readonly userInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;
  private readonly loginLink: Locator;
  private readonly welcomeLabel: Locator;

  constructor(private readonly page: Page) {
    this.loginLink = page.getByRole('link', { name: UI_TEXT.loginLink });
    this.userInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.submitButton = page.getByRole('button', { name: UI_TEXT.loginButton });
    this.welcomeLabel = page.locator('#nameofuser');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async login(user: string, password: string): Promise<void> {
    await this.loginLink.click();
    await this.userInput.fill(user);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await this.welcomeLabel.waitFor();
  }
}