import { test, expect } from '../fixtures/pages';
import { TEST_DATA } from '../data/testData';

const CATEGORY = 'Laptops';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(TEST_DATA.credentials.user, TEST_DATA.credentials.password);
});

test('Carrito: añadir el primer laptop y eliminarlo', async ({
  productsPage, productPage, cartPage,
}) => {
  await productsPage.openCategory(CATEGORY);
  const laptopName = await productsPage.openFirstProduct();
  await productPage.addToCart();

  await cartPage.open();
  await expect(cartPage.itemByName(laptopName).first()).toBeVisible();

  const before = await cartPage.rows.count();
  await cartPage.deleteItem(laptopName);
  await expect(cartPage.rows).toHaveCount(before - 1);
});