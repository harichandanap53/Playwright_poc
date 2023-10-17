import { Page } from "@playwright/test";

export class DragDrop1 {
  constructor(public page: Page) {
    this.page.goto("http://the-internet.herokuapp.com/");
  }

  async DragBtn() {
    await this.page.locator("a[href='/drag_and_drop']").click();
  }

  async drag_drop() {
    await this.page.locator("#column-a").dragTo(this.page.locator("#column-b"));
  }
}
