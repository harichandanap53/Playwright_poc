import { expect, test } from "@playwright/test";

test("Post Request", async ({ request }) => {
  try {
    const response = await request.post("https://reqres.in/api/users", {
      data: {
        first_name: "victor",
        job: "writer",
      },
    });
    expect(response.status()).toBe(201);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
