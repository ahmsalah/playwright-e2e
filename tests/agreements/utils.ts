import { Page } from "@playwright/test";

type ICreatePinkyPromiseParams = {
  page: Page;
  name: string;
  purpose: string;
};

export async function createPinkyPromise({ page, name, purpose }: ICreatePinkyPromiseParams) {
  await page.getByRole("tablist").getByRole("link", { name: "Create" }).click();
  await page
    .getByText("Pinky PromiseThis will make you super duper rich, with chances better than vagas")
    .click();
  await page.getByRole("button", { name: "Use Template" }).click();
  await page.getByTestId("name").fill(name);
  await page.getByTestId("purpose").fill(purpose);
  await page.getByTestId("purpose").blur();
  await page.getByText("Create").nth(4).click();
}

export async function openAgreement(page: Page) {
  await page.getByRole("button", { name: "Open" }).click();
}

export async function addMember(page: Page) {
  await page
    .locator(
      "div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div > .css-175oi2r > .css-1rynq56"
    )
    .click();
  await page
    .locator(
      "div:nth-child(5) > div > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > .css-175oi2r"
    )
    .click();
  await page.getByTestId("RNE__Input__text-input").fill("salah+e2e-2@agreewe.com");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("button", { name: "Add Party" }).click();
}

export async function fillAgreementDetails(page: Page) {
  await page.getByTestId("promise").fill("Test description");
  await page.getByRole("button", { name: " Select Date Type" }).click();
  await page.getByText("Starting").click();
  await page.getByRole("button", { name: " Date" }).click();
  await page.getByRole("button").nth(4).click();
  await page.getByRole("button", { name: "November 30, 2022" }).click();
}

type IUpdateAgreementStatusParams = {
  page: Page;
  status: string;
};

export async function updateAgreementStatus({ page, status }: IUpdateAgreementStatusParams) {
  await page.getByRole("button", { name: status }).click();
}

export async function approveAll(page: Page) {
  const locaterToBeDragged = page
    .locator("div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div > div")
    .first();

  for (let step = 0; step < 3; step++) {
    await locaterToBeDragged.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    await locaterToBeDragged.hover();
    await page.mouse.down();
    await page.mouse.move(0, 0);
    await page.mouse.move(600, 0);
    await page.mouse.up();
  }
}
