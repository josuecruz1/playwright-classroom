import { test, expect } from '@playwright/test';

test('Example 01', async ({ page }) => {
  // abrir ventana de navegador con la URL especificada
  await page.goto('https://www.saucedemo.com/v1/index.html');
  // esperar a que se cargue el selector
  await page.waitForSelector('#user-name');
  // escribir usuario
  await page.fill('#user-name', 'standard_user');
  // esperar a que se visualice el campo password
  await page.waitForSelector('#password');
  // escribir contraseña
  await page.fill('#password', 'secret_sauce');
  // Validar que se visualice el boton de LOGIN
  await page.waitForSelector('#login-button');
  // hacer clic en el boton de LOGIN
  await page.click('#login-button');
  // esperar a que se cargue la pagina
  await page.waitForSelector('#header_container > div.header_label > div');
  // validar que se visualice el titulo de la pagina
  await expect(page).toHaveTitle('Swag Labs');
  // validar que se visualice la URL correcta
  await expect(page.url()).toBe('https://www.saucedemo.com/v1/inventory.html');
  // validar el texto de un producto 
  // const text = page.locator('.inventory_item_name');
  await expect(page.locator('xpath=//*[@id="item_4_title_link"]/div')).toHaveText('Sauce Labs Backpack');
  });