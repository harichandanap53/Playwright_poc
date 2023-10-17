import { expect, test } from "@playwright/test";
test("Interaction with Inputs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  const messageInput = page.locator("//input[@id='user-message']");

  console.log(await messageInput.getAttribute("placeholder"));
  expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
  console.log("Before test" + (await messageInput.inputValue()));
  await messageInput.type("Hello");
  console.log("After test" + (await messageInput.inputValue()));

  await page.waitForTimeout(3000);
});
