import { test, expect, Page } from "@playwright/test";
import { users, login } from "../authentication";
import {
  createPinkyPromise,
  openAgreement,
  addMember,
  fillAgreementDetails,
  updateAgreementStatus,
  approveAll,
} from "./utils";

const trial = new Date().toUTCString();
const agreementName = `Agreement - ${trial}`;
const agreementPurpose = `Agreement Purpose - ${trial}`;

test.describe("Pinky Promise", () => {
  test("Should allow users to create/approve pinky promise agreement", async ({ browser }) => {
    const [user1, user2]: Page[] = await Promise.all(
      users.map(async ({ username, password }): Promise<Page> => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await login({
          page: page,
          username,
          password,
        });

        return page;
      })
    );

    // user 1 creates pinky promise flow
    await createPinkyPromise({ page: user1, name: agreementName, purpose: agreementPurpose });
    await expect(user1.getByText(agreementName).nth(1)).toHaveCount(1);
    await openAgreement(user1);
    await addMember(user1);
    await fillAgreementDetails(user1);
    await updateAgreementStatus({ page: user1, status: "Send for Review" });
    await expect(user1.getByText("In Review").first()).toHaveCount(1);
    await approveAll(user1);
    await expect(user1.getByText("You Agree")).toHaveCount(3);

    // user 2 approve agreement flow
    await user2.reload();
    await expect(user2.getByText(agreementName)).toHaveCount(1);
    await user2.getByText(agreementName).click();
    await openAgreement(user2);
    await approveAll(user2);
    await expect(user2.getByText("You Agree")).toHaveCount(3);

    // user 1 moves agreement into signing
    await updateAgreementStatus({ page: user1, status: "Move to Signing" });
  });
});
