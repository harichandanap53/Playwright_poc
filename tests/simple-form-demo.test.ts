import { expect, test } from "@playwright/test";

test("simple-form-demo", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.locator("//a[normalize-space()='Simple Form Demo']").click();
  console.log(page.url());
  expect(page.url()).toBe(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  let EnterMessage = "Welcome to LambdaTest";

  await page.locator("//input[@id='user-message']").fill(EnterMessage);

  const result = await page.locator("//button[@id='showInput']").click();
  const messageInput = page.locator("#message");

  expect(messageInput).toHaveText("Welcome to LambdaTest");

  await page.waitForTimeout(5000);
});
