import { expect, test } from "@playwright/test";

import { DragDrop1 } from "../page/DragDrop.test";
import { Dropdown } from "../page/DropDown.test";
import { check } from "../page/Check.test";
import { HoverApi } from "../page/Hover.test";

test("UI Testing ", async ({ page }) => {
  //await page.goto("http://the-internet.herokuapp.com/");

  const DragDrop_Test = new DragDrop1(page);

  DragDrop_Test.DragBtn();
  await page.waitForTimeout(3000);
  DragDrop_Test.drag_drop();
  await page.waitForTimeout(3000);

  //Select Option from Drag and Drop

  const options = new Dropdown(page);
  options.DragDropButton();
  options.SelectOption();
  await page.waitForTimeout(3000);

  //Check Box
  const checkbox1 = new check(page);
  checkbox1.CheckBoxBtn();
  checkbox1.checkoption();
  await page.waitForTimeout(3000);
  await page.close();

  //Hover

  const hover1 = new HoverApi(page);
  hover1.HoverBtn();
  hover1.Hovermove();
});
