## Get Started

Clone repo & Install packages

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

- tests
  - Feature 1
    - Subfeature 1
    - Subfeature 2
  - Feature 2
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
