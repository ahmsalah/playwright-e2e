import { Page } from "@playwright/test";

const {
  WEB_APP_URL = "",
  USER_1_EMAIL = "",
  USER_1_PASS = "",
  USER_2_EMAIL = "",
  USER_2_PASS = "",
} = process.env;

export const users = [
  { username: USER_1_EMAIL, password: USER_1_PASS },
  { username: USER_2_EMAIL, password: USER_2_PASS },
];

type ILoginParams = {
  page: Page;
  username: string;
  password: string;
};

export async function login({ page, username, password }: ILoginParams) {
  await page.goto(WEB_APP_URL);
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByTestId("email").fill(username);
  await page.getByTestId("password").fill(password);
  await page.getByRole("button", { name: "Sign in" }).click();
}
