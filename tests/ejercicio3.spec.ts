import { test, expect } from '../fixtures/pages';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login("testAPA", "testAPA");
});

test('Carrito: añadir el primer laptop y eliminarlo', async ({
  productsPage, productPage, cartPage,
}) => {
  const laptopName = await productsPage.openFirstLaptop();
  await productPage.addToCart();

  await cartPage.open();
  await expect(cartPage.itemByName(laptopName).first()).toBeVisible();

  const before = await cartPage.rows.count();
  await cartPage.deleteItem(laptopName);
  await expect(cartPage.rows).toHaveCount(before - 1);
});