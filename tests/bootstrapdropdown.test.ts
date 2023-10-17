import { expect, test } from "@playwright/test";
test("bootstrap drop down", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await page.click("(//span[@role='combobox'])[1]");
  await page
    .locator("#select2-country-results")
    .locator("Li", {
      hasText: "India",
    })
    .click();

  /*
await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await selectCountry("India");
  await selectCountry("Denamrk");
  await selectCountry("South Africa")
async function selectCountry(countryName){  
  
  await page.click("#country+sapn");
    await page.locator("#select2-country-results")
    .locator("Li", {
      hasText: countryName
    })
    .click();
}


*/

  await page.waitForTimeout(3000);
});
