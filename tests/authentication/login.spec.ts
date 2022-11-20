import { test, expect } from "@playwright/test";
import { users, login } from "./utils";

test.describe("Login", () => {
  test("should allow users to login to AgreeWe", async ({ browser }) => {
    await Promise.all(
      users.map(async ({ username, password }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await login({
          page: page,
          username,
          password,
        });

        await expect(page.getByRole("link", { name: "Home" })).toHaveCount(1);
      })
    );
  });
});
