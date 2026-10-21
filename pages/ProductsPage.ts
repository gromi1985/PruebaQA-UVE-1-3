import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  private readonly products: Locator;

  constructor(private readonly page: Page) {
    this.products = page.locator('#tbodyid .hrefch');
  }

  async openCategory(category: string): Promise<void> {
    await this.page.getByRole('link', { name: category, exact: true }).click();
  }

  async openFirstProduct(): Promise<string> {
    const first = this.products.first();
    const name = (await first.textContent())?.trim() ?? '';
    await first.click();
    return name;
  }
}