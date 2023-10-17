import { test } from "@playwright/test";

test("winodw-popup-modal", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );
  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"), //It is array, give comma
    page.click("'Follow On Twitter'"),
  ]);
  console.log(newWindow.url());
});
