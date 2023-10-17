import { expect, test } from "@playwright/test";

test("Input Form Submit", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/input-form-demo"
  );

  await page.locator("form[id='seleniumform'] button[type='submit']").click();
  await page.waitForTimeout(5000);
  //Alert

  const alertmesg = page.waitForSelector(".error-message");
  console.log(alertmesg);

  await page.waitForTimeout(5000);
  await page.locator("#name").fill("Hari");
  await page.locator("#inputEmail4").fill("hari123@gmail.com");
  await page.locator("#inputPassword4").fill("Pass123$");
  await page.locator("#company").fill("QUICk");
  await page.locator("#websitename").fill("www.quick.com");
  await page.selectOption("form[id='seleniumform'] div div select", {
    label: "United States",
  });

  await page.locator("#inputCity").fill("Gujarat");
  await page.locator("#inputAddress1").fill("Gujarat");

  await page.locator("#inputAddress2").fill("Gurat");
  await page.locator("#inputState").fill("Gurat");
  await page.locator("#inputZip").fill("500088");
  await page.waitForTimeout(5000);

  await page.locator("form[id='seleniumform'] button[type='submit']").click();
  await page.waitForTimeout(5000);

  const messageInput = page.locator(
    "div[id='__next'] div section div div div div p"
  );

  expect(messageInput).toHaveText(
    "Thanks for contacting us, we will get back to you shortly."
  );
  await page.waitForTimeout(5000);
});
