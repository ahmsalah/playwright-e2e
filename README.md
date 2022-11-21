# Playwright demo

## Get Started

Clone repo & install packages

```sh
git clone https://github.com/ahmsalah/playwright-e2e.git
cd playwright-e2e
yarn
```

Launch the test runner via command line

```sh
npx playwright test
```

Or alternatively install [playwright vscode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Tests folder structure

📦tests
┣ 📂agreements
┃ ┣ 📜pinkyPromise.spec.ts
┃ ┗ 📜utils.ts
┗ 📂authentication
┃ ┣ 📜index.ts
┃ ┣ 📜login.spec.ts
┃ ┣ 📜signup.spec.ts
┃ ┗ 📜utils.ts

- tests
  - Feature
    - Subfeature 1
    - Subfeature 2
