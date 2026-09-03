import { test, expect } from '../src/fixtures/test';

test.describe('End-to-End Purchase', () => {
  test('should complete a purchase with the cheapest and most expensive products', async ({
    loginPage, inventoryPage, cartPage, checkoutPage,
  }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(inventoryPage.inventoryList).toBeVisible();

    await inventoryPage.sortByPriceLowToHigh();

    const productCount = await inventoryPage.getProductCount();
    const cheapestProduct = await inventoryPage.getProductName(0);
    const mostExpensiveProduct = await inventoryPage.getProductName(productCount - 1);

    await inventoryPage.addProductByIndex(0);
    await inventoryPage.addProductByIndex(productCount - 1);
    await inventoryPage.openCart();

    await expect(cartPage.itemByName(cheapestProduct)).toHaveCount(1);
    await expect(cartPage.itemByName(mostExpensiveProduct)).toHaveCount(1);

    await cartPage.proceedToCheckout();
    await checkoutPage.completeCustomerInformation('Zahid', 'Rahman', '1207');
    await checkoutPage.finishOrder();
    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
  });
});
