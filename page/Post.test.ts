import { expect, request, Page } from "@playwright/test";

export class PostApiCall {
  constructor(public page: Page) {}
  async PostRequest() {
    try {
      const response = await this.page.request.post(
        "https://reqres.in/api/users",
        {
          data: {
            first_name: "victor",
            job: "writer",
          },
        }
      );
      expect(response.status()).toBe(201);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
