# Playwright demo

## Get Started

clone the repo & install packages

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

- Feature
  - Subfeature 1
  - Subfeature 2

📦tests
┣ 📂agreements
┃ ┗ 📜utils.ts
┃ ┣ 📜pinkyPromise.spec.ts
┗ 📂authentication
┃ ┣ 📜index.ts
┃ ┗ 📜utils.ts
┃ ┣ 📜login.spec.ts
┃ ┣ 📜signup.spec.ts
