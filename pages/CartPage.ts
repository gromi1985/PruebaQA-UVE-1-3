import { Page, Locator } from '@playwright/test';
import { UI_TEXT } from '../data/uiTexts';

export class CartPage {
  readonly rows: Locator;

  constructor(private readonly page: Page) {
    this.rows = page.locator('#tbodyid tr');
  }

  async open(): Promise<void> {
    await this.page.getByRole('link', { name: UI_TEXT.cartLink, exact: true }).click();
  }

  itemByName(name: string): Locator {
    return this.rows.filter({ hasText: name });
  }

  async deleteItem(name: string): Promise<void> {
    await this.itemByName(name).first().getByRole('link', { name: UI_TEXT.deleteLink }).click();
  }
}