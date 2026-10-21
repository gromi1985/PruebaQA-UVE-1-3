import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  private readonly laptopsLink: Locator;
  private readonly products: Locator;

  constructor(private readonly page: Page) {
    this.laptopsLink = page.getByRole('link', { name: 'Laptops' });
    this.products = page.locator('#tbodyid .hrefch');
  }

  async openFirstLaptop(): Promise<string> {
    await this.laptopsLink.click();
    const first = this.products.first();
    const name = (await first.textContent())?.trim() ?? '';
    await first.click();
    return name;
  }
}