import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  fullyParallel: false,

  //testMatch: ["tests/login.test.ts"],
  //testMatch: ["test/record.test.ts"],
  //testMatch: ["tests/basicinteraction.test.ts"],
  //testMatch: ["/tests/sum.test.ts"]
  //testMatch: ["/tests/checkbox.test.ts"],
  //testMatch: ["tests/alerts.test.ts"],
  //testMatch: ["tests/simple-form-demo.test.ts"],

  //testMatch: ["tests/dropdown.test.ts"],
  //testMatch: ["tests/bootstrapdropdown.test.ts"],
  //testMatch: ["tests/simple-form-demo.test.ts"],
  //testMatch: ["tests/frame.test.ts"],
  //testMatch: ["tests/window-popup.tests.ts"],

  //testMatch: ["tests/Input-Form.test.ts"],

  //testMatch: ["tests/date.test.ts"],
  //testMatch: ["tests/Drag-DropSliders.test.ts"],
  //testMatch: ["tests/progressbar.test.ts"],
  //testMatch: ["tests/drag.test.ts"],
  //testMatch: ["tests/MQConn.test.ts"],
  //testMatch: ["tests/GetRequest.test.ts"],
  //testMatch: ["tests/PostRequest.test.ts"],
  //testMatch: ["tests/PutRequest.test.ts"],
  //testMatch: ["tests/PatchRequest.test.ts"],
  //testMatch: ["tests/DeleteRequest.test.ts"],
  //testMatch: ["tests/Request.test.ts"],
  //testMatch: ["tests/UITesting.test.ts"],
  // testMatch: ["tests/Hove.test.ts"],
  //testMatch: ["tests/download.test.ts"],
  testMatch: ["tests/up_load.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",

    // video: "retain-on-failure",
    //slow motion
    /*  launchOptions:{
      slowMo : 1000 ,
    }*/
  },
  retries: 0,
  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["html", { open: "always" }],
  ],
};
export default config;
