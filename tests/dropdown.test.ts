import { test } from "@playwright/test";

test("Handling dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#select-demo", {
    label: "Tuesday",
    //value ="Tuesday"
    // index: 5
  });

  await page.waitForTimeout(3000);

  //multi select will be within the array

  await page.selectOption("#multi-select", [
    {
      label: "Texas",
    },
    { index: 2 },
    { value: "Washington" },
  ]);

  await page.waitForTimeout(3000);
});
