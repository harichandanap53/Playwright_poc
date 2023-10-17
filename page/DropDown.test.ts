import { Page } from "@playwright/test";

export class Dropdown {
  constructor(public page: Page) {
    this.page.goto("http://the-internet.herokuapp.com/");
  }

  async DragDropButton() {
    await this.page.locator("a[href='/dropdown']").click();
  }

  async SelectOption() {
    await this.page.selectOption("#dropdown", {
      label: "Option 2",
    });
  }
  async HoverBtn() {
    await this.page.locator("a[href='/hovers']").click();
  }
}
