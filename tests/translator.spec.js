import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Greeting question', async ({ page }) => {

  // Open the website
  await page.goto('https://www.swifttranslator.com/');

  // Type Singlish input
  await page.fill('textarea', 'his name is shaavinga.oyaa eyaava dhannavadha?');

  // Wait for output
  await page.waitForTimeout(2000);

  // Read Sinhala output - using locator for the output div with specific classes
  const output = await page.locator('div.bg-slate-50.whitespace-pre-wrap').textContent();

  // Check expected result
  expect(output).toContain('his name is ශාවින්ග.ඔයා එයාව දන්නවද?');

});

