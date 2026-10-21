import { test, expect } from '@playwright/test';

test('Selección de Laptop y Gestión de Alerta', async ({ page }) => {
  // 1. Navegar a la página principal
  await page.goto('https://www.demoblaze.com/');

  // 2. Navegar a la categoría Laptops
  await page.getByRole('link', { name: 'Laptops' }).click();

  // 3. Seleccionar el primer ordenador portátil de la lista (ej. Sony vaio i5 o similar)
  const primerLaptop = page.locator('#tbodyid a').first();
  await primerLaptop.click();

  const dialogPromise = page.waitForEvent('dialog');
  await page.getByRole('link', { name: 'Add to cart' }).click();
  const dialog = await dialogPromise;

  expect(dialog.message()).toContain('Product added');
  await dialog.accept();

 
});