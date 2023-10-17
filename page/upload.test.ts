import { Page } from "@playwright/test";

export class uploadApi {
  constructor(public page: Page) {
    //this.page.goto("http://the-internet.herokuapp.com/");
  }

  async uploadBtn() {
    await this.page.locator("//a[normalize-space()='File Upload']").click();
  }

  async Click_fileupload() {
    await this.page.locator("//input[@id='file-upload']").click();

    //await this.page.setInputFiles("", "");
    //C:\Users\Dell\Desktop\ss\checkbox.png
  }
}
