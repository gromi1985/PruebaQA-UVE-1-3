import { test, expect } from '@playwright/test';

test('Navegación y Verificación Inicial en Demoblaze', async ({ page }) => {
  // 1. Navegar a Demoblaze
  await page.goto('https://www.demoblaze.com/');

   /* Verificar que los elementos principales de la barra de navegación superior están 
   presentes y visibles: */
  
  // a. Inicio (Home)
  const homeLink = page.getByRole('link' , { name: 'Home' });
  await expect(homeLink).toBeVisible();

  // b. Contacto
  const contactLink = page.getByRole('link', { name: 'Contact' });
  await expect(contactLink).toBeVisible();

  // c. Acerca de nosotros (About us)
  const aboutUsLink = page.getByRole('link', { name: 'About us' });
  await expect(aboutUsLink).toBeVisible();

  // d. Carrito (Cart)
  const cartLink = page.getByRole('link', { name: 'Cart' });
  await expect(cartLink).toBeVisible();

  // e. Iniciar sesión (Log in)
  const loginLink = page.getByRole('link', { name: 'Log in' });
  await expect(loginLink).toBeVisible();

  // f. Registrarse (Sign up)
  const signupLink = page.getByRole('link', { name: 'Sign up' });
  await expect(signupLink).toBeVisible();
});