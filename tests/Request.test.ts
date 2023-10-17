import { expect, test } from "@playwright/test";
import { GetApiCall } from "../page/Get.test";
import { PostApiCall } from "../page/Post.test";
test("Request", async ({ page }) => {
  const GetApi = new GetApiCall(page);

  GetApi.GetRequest();

  const PostApi = new PostApiCall(page);

  PostApi.PostRequest();
});
