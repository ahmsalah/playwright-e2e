import { Page } from "@playwright/test";

export const users = [
  { username: "salah+e2e-1@agreewe.com", password: "12345678" },
  { username: "salah+e2e-2@agreewe.com", password: "12345678" },
];

type ILoginParams = {
  page: Page;
  username: string;
  password: string;
};

export async function login({ page, username, password }: ILoginParams) {
  await page.goto("https://mobile.agreewe.com/");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByTestId("email").fill(username);
  await page.getByTestId("password").fill(password);
  await page.getByRole("button", { name: "Sign in" }).click();
}
