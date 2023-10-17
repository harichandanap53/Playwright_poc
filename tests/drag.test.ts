import { expect, test } from "@playwright/test";

test("Progress bar", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");

  await page.locator("//a[normalize-space()='Drag & Drop Sliders']").click();

  // the value corresponding to the 100% of the slider
  const maxValue = 100;
  // drag-and-drop target value in percentage
  const targetValue = 95;

  // retrieving the slider handle HTML element
  const sliderHandle = page.locator("#").first();
  // retrieving the slider HTML element
  const slider = page.locator(".ant-slider.ant-slider-horizontal").first();

  // getting the slider bounding box size
  const sliderBoundingBox = await slider.boundingBox()

  // performing the drag-and-drop interaction
  await sliderHandle.dragTo(sliderHandle, {
    force: true,
    targetPosition: {
      // moving the slider to the target value in %
      x: 15,
      y: 0,
    },
  });

  // retrieving the input HTML element
  const input = page.locator(".ant-input-number-input").first();
  // getting the "value" HTML attribute
  const value = await input.getAttribute("value");

  // calculating the expected value
  const expectedValue = `${maxValue * targetValue}`;

  expect(value).toEqual(expectedValue);

  await page.waitForTimeout(5000);
});
