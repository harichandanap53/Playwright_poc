import { expect, test } from "@playwright/test";
import { MQQTConnection } from "../page/MQTT.test";

test("MQTT Testing ", async ({ page, baseURL }) => {
  await page.goto("https://testclient-cloud.mqtt.cool/");

  const MQConnection = new MQQTConnection(page);

  //Select Broker
  MQConnection.SelectBroker();
  await page.waitForTimeout(3000);
  MQConnection.ClickButton();

  //Publish
  MQConnection.PublishTopic();
  await page.waitForTimeout(3000); //Page is taking time to load the page. So wait for sometime.
  MQConnection.PublishMessage();
  await page.waitForTimeout(3000);
  MQConnection.PublishButton();

  //Subscription
  MQConnection.SubscriptionTopic();
  await page.waitForTimeout(3000);
  MQConnection.SubscriptionButton();
  await page.waitForTimeout(3000);
  //Assertion check
  try {
    const assercheck = page.locator("//div[@id='sub_0']//div//div[1]");
    expect(assercheck).toHaveText("QA Test Autmation");
    await page.waitForTimeout(3000);
  } catch (e) {
    console.log(e.stack);
  }
});
