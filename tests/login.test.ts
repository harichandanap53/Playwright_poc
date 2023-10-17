import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "body > div:nth-child(1) > div:nth-child(5) > header:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > div:nth-child(2) > span:nth-child(1)"
  );
  await page.click("//li[6]//ul[1]//li[1]//a[1]");
  await page.waitForTimeout(5000);
  await page.fill("input[name='email']", "arajesh.bo@gmail.com");
  await page.fill("input[name='password']", "Pass123$");
  await page.click("input[value='Login']");
  await page.waitForTimeout(3000);

  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();
  await newPage.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );

  await newPage.waitForTimeout(5000);
});
