import { test, expect, type Page } from '@playwright/test';

test.describe("New", () => {


  test("Tes", async ({ page }) => {

  await  page.goto('https://rozetka.com.ua/')

  await page.goto('https://rozetka.com.ua/');
  await page.getByRole('link', { name: 'Ноутбуки и компьютеры' }).click();
  await page.goto('https://rozetka.com.ua/computers-notebooks/c80253/');
  await page.goto('https://hard.rozetka.com.ua/monitors/c80089/');
  await page.getByRole('link', { name: 'Монитор 28" Samsung Odyssey G7 LS28BG702 (LS28BG702EIXUA) UHD 4K HDR400 / IPS 8-Bit + FRC / 144Гц / DCI-P3 90% / G-SYNC Compatible / AMD FreeSync Premium Pro / HDMI 2.1 Console Ready / Tizen Smart TV / Wi-Fi / Bluetooth' }).nth(1).click();
  await page.getByRole('button', { name: 'Открыть меню' }).click();
  await page.getByRole('button', { name: 'Каталог товаров' }).click();
  await page.getByRole('link', { name: 'Инструменты и автотовары' }).click();
  await page.getByRole('link', { name: 'Автомобильные инверторы Автомобильные инверторы' }).click();

  const nameOfInvertor = page.locator('rz-product-top > div > div.product__heading > h1')

  expect(nameOfInvertor).toEqual('Инвертор автомобильный CHOETECH 12\\220 В 2500 Вт чистая синусоида (CJ5000Q-BK-ZX)')

  });
});
