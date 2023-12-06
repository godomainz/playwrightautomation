import { test, expect, type Page } from '@playwright/test';

test("Browser Context  playwright test", async ({ browser })=>{
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("Page playwright test", async ({ page })=>{;
    await page.goto("https://google.com");
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Google");
});