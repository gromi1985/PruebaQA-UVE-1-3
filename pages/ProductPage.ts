import { Page } from '@playwright/test';
import { UI_TEXT } from '../data/uiTexts';

export class ProductPage {
  constructor(private readonly page: Page) {}

  async addToCart(): Promise<string> {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.page.getByRole('link', { name: UI_TEXT.addToCartButton }).click();
    const dialog = await dialogPromise;
    const message = dialog.message();
    await dialog.accept();
    return message;
  }
}