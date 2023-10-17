import { test } from "@playwright/test";
import { HoverApi } from "../page/Hover.test";

test("UI Testing ", async ({ page }) => {
  //Hover
  //await page.goto("http://the-internet.herokuapp.com/");
  const hover1 = new HoverApi(page);
  hover1.HoverBtn();
  hover1.Hovermove();
});
