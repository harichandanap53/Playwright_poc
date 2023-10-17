import { expect, request, Page } from "@playwright/test";

export class GetApiCall {
  constructor(public page: Page) {}
  async GetRequest() {
    try {
      const response = await this.page.request.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      expect(response.status()).toBe(200);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
