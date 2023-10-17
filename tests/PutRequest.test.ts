import { expect, test } from "@playwright/test";

test("Put Request", async ({ request }) => {
  try {
    const response = await request.put("https://reqres.in/api/users/2", {
      data: {
        first_name: "victor",
        job: "writer",
      },
    });
    expect(response.status()).toBe(200);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
