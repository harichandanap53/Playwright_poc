import { expect, test } from "@playwright/test";

test("Delete Request", async ({ request }) => {
  try {
    const response = await request.delete("https://reqres.in/api/users/2");
    expect(response.status()).toBe(204);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
