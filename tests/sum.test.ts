import { expect, test } from "@playwright/test";
test("sum", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  const sum1input = page.locator("#sum1");
  const sum2input = page.locator("#sum2");
  const getValueBtn = page.locator(
    "//form[@id='gettotal']//button[@type='button']"
  );
  let num1 = 121;
  let num2 = 234;
  await sum1input.fill("" + num1); //we can use type instaed of fill--Fill-clear text and fill the field. Type-append
  await sum2input.fill("" + num2);
  await getValueBtn.click();

  const result = page.locator("//p[@id='addmessage']");
  console.log(await result.textContent());
  let expectedResult = num1 + num2;

  expect(result).toHaveText("" + expectedResult);
});
