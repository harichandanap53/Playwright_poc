import { expect, Page, test } from "@playwright/test";

import { uploadApi } from "../page/upload.test";

test("UI Testing ", async ({ page }) => {
  await page.goto("http://the-internet.herokuapp.com/");

  const up_load = new uploadApi(page);

  up_load.uploadBtn();
  page.waitForTimeout(8000);
  up_load.Click_fileupload();
  page.waitForTimeout(8000);
  //dwnload.filedownload();
});
