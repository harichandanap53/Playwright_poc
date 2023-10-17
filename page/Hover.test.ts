import { Page } from "@playwright/test";

export class HoverApi {
  constructor(public page: Page) {
    this.page.goto("http://the-internet.herokuapp.com/");
  }

  async HoverBtn() {
    await this.page.locator("//a[normalize-space()='Hovers']").click();
  }

  async Hovermove() {
    await this.page.hover("(//img[@alt='User Avatar'])[1]");

    this.page.waitForTimeout(8000);

    this.page.hover("(//img[@alt='User Avatar'])[2]");
    this.page.waitForTimeout(3000);

    this.page.hover("(//img[@alt='User Avatar'])[3]");
    this.page.waitForTimeout(3000);
  }
}
