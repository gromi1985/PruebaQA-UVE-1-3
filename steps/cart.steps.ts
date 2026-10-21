import { createBdd } from 'playwright-bdd';
import { test, expect } from '../fixtures/pages';
import { TEST_DATA } from '../data/testData';

const { Given, When, Then } = createBdd(test);

Given('el usuario ha iniciado sesión', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(TEST_DATA.credentials.user, TEST_DATA.credentials.password);
});

Given('el usuario está en la categoría {string}', async ({ productsPage }, category: string) => {
  await productsPage.openCategory(category);
});

When('abre el primer producto de la lista', async ({ productsPage, ctx }) => {
  ctx.productName = await productsPage.openFirstProduct();
});

When('lo añade al carrito', async ({ productPage }) => {
  const message = await productPage.addToCart();
  expect(message).toContain(TEST_DATA.messages.productAdded);
});

When('abre el carrito', async ({ cartPage }) => {
  await cartPage.open();
});

Then('el producto aparece en el carrito', async ({ cartPage, ctx }) => {
  await expect(cartPage.itemByName(ctx.productName).first()).toBeVisible();
  ctx.rowsBefore = await cartPage.rows.count();
});

When('elimina el producto del carrito', async ({ cartPage, ctx }) => {
  await cartPage.deleteItem(ctx.productName);
});

Then('el carrito contiene una fila menos', async ({ cartPage, ctx }) => {
  await expect(cartPage.rows).toHaveCount(ctx.rowsBefore - 1);
});
