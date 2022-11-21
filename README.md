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
 ┃ ┣ 📜 PinkyPromise.spec.ts  
 ┃ ┣ 📜 RevenueSplitter.spec.ts  
 ┃ ┗ 📜 utils.ts  
 ┗ 📂 authentication  
 ┃ ┣ 📜 index.ts  
 ┃ ┣ 📜 Login.spec.ts  
 ┃ ┣ 📜 SignUp.spec.ts  
 ┃ ┗ 📜 utils.ts
 
## Playwright Report 

[Download playwright-report](https://github.com/ahmsalah/playwright-e2e/suites/9411621647/artifacts/444388031)
  
<img width="1144" alt="image" src="https://user-images.githubusercontent.com/50025978/202936856-bf330b8a-c1ba-4f25-a1e3-50987237e38e.png">

