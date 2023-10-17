import { test } from "@playwright/test";

test("Frame", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const allframes = page.frames();
  console.log("No of frames:" + allframes.length);

  const frame = page.frameLocator("#firstFr");
  await frame.locator("input[name='fname']").fill("Pinnelli");
  await frame.locator("input[name='lname']").fill("Chandana");
  await page.waitForTimeout(3000);

  const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
  await innerFrame.locator("input[name='email']").fill("hari123@gmail.com");

  await page.waitForTimeout(3000);
});
