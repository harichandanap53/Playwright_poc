import { expect, test } from "@playwright/test";
test("checkbox", async ({ page }) => {
  page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  const singleCheckbox = page.locator(
    "//label[normalize-space()='Click on check box']"
  );
  expect(singleCheckbox).not.toBeChecked();
  await page.waitForTimeout(3000);

  await singleCheckbox.check();
  expect(singleCheckbox).toBeChecked();

  await page.waitForTimeout(3000);
});
