import { expect, test } from "@playwright/test";

test("Progress bar", async ({ page }) => {
  await test.step("handle slider", async () => {
    await page.goto("https://www.lambdatest.com/selenium-playground");

    await page.locator("//a[normalize-space()='Drag & Drop Sliders']").click();
  });

  await test.step("handle slider", async () => {
    await page.waitForSelector("(//input[@value='15'])[1]");
    const s = await page.waitForSelector("(//input[@value='15'])[1]");

    let ele = page.locator("div[id='slider3'] h4");
    
    console.log("Initial text:" + ele);
    let text = await ele.inputValue();
    console.log("Initial text:" + text);
    let targetAmount = 95;
    let isCompleted = false;
    if (s) {
      while (!isCompleted) {
        let srcBound = await s.boundingBox();
        if (srcBound) {
          await page.mouse.move(
            srcBound.x + srcBound.width / 2,
            srcBound.y + srcBound.height / 2
          );
          await page.mouse.down();
          await page.mouse.move(
            srcBound.x + 15,
            srcBound.y + srcBound.height / 2
          );
          await page.mouse.up();
          let text = await ele.inputValue();
          if (text == "targetAmount") {
            isCompleted = true;
          }
        }
      }
    }
  });
});
