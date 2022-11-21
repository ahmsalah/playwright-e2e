## Get Started

Clone repo & Install packages

```sh
git clone https://github.com/ahmsalah/playwright-e2e.git
cd playwright-e2e
yarn
```

Install and run tests via [playwright vscode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

Or alternatively, Launch the test runner via command line

```sh
npx playwright test
```

## Tests folder structure

Folders are structured into features and sub-features, each main folder has a utilities file for code reuse across tests

- tests
  - Feature 1
    - Subfeature 1
    - Subfeature 2

 📦 tests  
 ┣ 📂 agreements  
 ┃ ┣ 📜 pinkyPromise.spec.ts  
 ┃ ┗ 📜 utils.ts  
 ┗ 📂 authentication  
 ┃ ┣ 📜 index.ts  
 ┃ ┣ 📜 login.spec.ts  
 ┃ ┣ 📜 signup.spec.ts  
 ┃ ┗ 📜 utils.ts
