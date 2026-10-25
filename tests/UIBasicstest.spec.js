const {test , expect }=require('@playwright/test');

test('First Playwright test Valid login shows products page',async({page}) =>
{
await page.goto('https://www.saucedemo.com/',{waitUntil: 'domcontentloaded'});
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click(); 
await expect(page).toHaveURL(/inventory/);
await expect(page.locator('.title')).toHaveText('Products');

}); 