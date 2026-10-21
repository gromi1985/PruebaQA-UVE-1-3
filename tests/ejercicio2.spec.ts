import { test, expect } from '@playwright/test';

test('Selección de Laptop y Gestión de Alerta', async ({ page }) => {
  // 1. Navegar a la página principal
  await page.goto('https://www.demoblaze.com/');

  // 2. Navegar a la categoría Laptops
  await page.getByRole('link', { name: 'Laptops' }).click();

  // 3. Seleccionar el primer ordenador portátil de la lista (ej. Sony vaio i5 o similar)
  const primerLaptop = page.locator('#tbodyid a').first();
  await primerLaptop.click();

   // Configurar la captura de la alerta antes de hacer clic en añadir al carrito
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept(); 
  });

  // 4. Hacer clic en el botón "Add to cart"
  await page.getByRole('link', { name: 'Add to cart' }).click();

 
});