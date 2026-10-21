import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private readonly page: Page) {}

  async addToCart(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.page.getByRole('link', { name: 'Add to cart' }).click();
  }
}