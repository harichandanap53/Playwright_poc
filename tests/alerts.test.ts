import { test } from "@playwright/test";

test("handling alerts", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  //custom async
  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    await alert.accept();
  });

  await page.locator("button:has-text('Click Me')").nth(0).click();

  await page.waitForTimeout(3000);
});
