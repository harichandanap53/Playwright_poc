import { expect, test } from "@playwright/test";

test("Patch Request", async ({ request }) => {
  try {
    const response = await request.patch("https://reqres.in/api/users/2", {
      data: {
        first_name: "Jhon",
        job: "QA",
      },
    });
    expect(response.status()).toBe(200);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
