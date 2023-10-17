import { Page } from "@playwright/test";

export class MQQTConnection {
  constructor(public page: Page) {}

  // Select a Broker
  async SelectBroker() {
    await this.page.selectOption("#broker", {
      label: "tcp://broker.mqtt.cool:1883",
    });
  }
  //Click Button
  async ClickButton() {
    await this.page.locator("//button[@id='connectBtn']").click();
  }

  //Publish
  async PublishTopic() {
    await this.page.locator("//input[@id='publishingTopic']").fill("QA");
    //await this.page.fill('input[id="publishingMessage"]',"Test message");
  }

  async PublishMessage() {
    //    const text = 'Hello world';
    await this.page
      .locator("//textarea[@id='publishingMessage']")
      .fill("QA Test Engineer");
  }

  //Publish Button
  async PublishButton() {
    await this.page.locator("//button[@id='publishBtn']").click();
  }

  //Subscriptions
  async SubscriptionTopic() {
    await this.page.locator("#subscribingTopic").fill("QA Test Automation");
    //await this.page.fill('input[id="publishingMessage"]',"Test message");
  }

  //Subscription Button
  async SubscriptionButton() {
    await this.page.locator("//input[@id='subscribeBtn']").click();
  }
}
