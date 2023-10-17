import { expect, test } from "@playwright/test";

test("Get Request", async ({ request }) => {
  try {
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(response.status()).toBe(200);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
