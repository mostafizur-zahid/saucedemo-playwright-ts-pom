import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly sortDropdown: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.getByTestId('inventory-list');
    this.sortDropdown = page.getByTestId('product-sort-container');
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  async sortByPriceLowToHigh(): Promise<void> {
    await this.sortDropdown.selectOption({ label: 'Price (low to high)' });
  }

  private productCards(): Locator {
    return this.inventoryList.getByTestId('inventory-item');
  }

  async getProductCount(): Promise<number> { return this.productCards().count(); }

  async getProductName(index: number): Promise<string> {
    return (await this.productCards().nth(index).getByTestId('inventory-item-name').textContent())?.trim() ?? '';
  }

  async addProductByIndex(index: number): Promise<void> {
    await this.productCards().nth(index).getByRole('button', { name: /add to cart/i }).click();
  }

  async openCart(): Promise<void> { await this.cartLink.click(); }
}
