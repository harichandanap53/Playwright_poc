import { test } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  //let date = "2022-08-02";

  //  await page.locator("#birthday").fill(date);

  await page.click("input[placeholder='Start date']");

  const mmYY = page.locator("body div th:nth-child(7)");

  const prev = page.locator("//body/div/div[1]/table[1]/thead[1]/tr[2]/th[1]");

  const next = page.locator("//body/div/div[3]/table[1]/thead[1]/tr[2]/th[3]");

  let dateToSelect = "March 2022";

  await prev.click();

  await page.click("td[data-date='1693785600000']");

  await page.waitForTimeout(8000);
});
