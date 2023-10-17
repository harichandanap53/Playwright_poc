import { Page, expect } from "@playwright/test";

export class check {
  constructor(public page: Page) {
    this.page.goto("http://the-internet.herokuapp.com/");
  }

  async CheckBoxBtn() {
    await this.page.locator("a[href='/checkboxes']").click();
  }

  async checkoption() {
    const checkoption = await this.page.locator("//body//div//input[1]");
    expect(checkoption).not.toBeChecked();
    await this.page.waitForTimeout(3000);

    await checkoption.check();
    expect(checkoption).toBeChecked();
  }
}
