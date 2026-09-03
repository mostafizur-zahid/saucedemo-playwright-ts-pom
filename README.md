# SauceDemo Playwright Automation Framework

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-%40playwright%2Ftest-2EAD33?logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/TypeScript-5.9%2B-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Pattern-Page%20Object%20Model-blue" alt="POM">
  <img src="https://img.shields.io/badge/Browser-Firefox%20%7C%20Chromium-4B8BBE" alt="Browsers">
</p>

<p align="center"><strong>End-to-end web automation framework built with Playwright, TypeScript, @playwright/test, and Page Object Model.</strong></p>

---

## 📌 Overview

This repository implements the **Playwright Assessment (TS/JS Ecosystem — `@playwright/test`)** using the SauceDemo e-commerce practice application.

The framework separates page interaction logic from test logic. Page Objects encapsulate Playwright locators and actions, while `.spec.ts` files focus on business flows and assertions.

**Application Under Test:** https://www.saucedemo.com/

## 🎯 Automated Scenarios

### 1. Negative Login

```text
Username: locked_out_user
Password: secret_sauce
```

Expected:

```text
Epic sadface: Sorry, this user has been locked out.
```

### 2. End-to-End Purchase

1. Log in with `standard_user / secret_sauce`.
2. Sort products by **Price (low to high)**.
3. Identify the cheapest and most expensive products.
4. Add both products to the cart.
5. Verify both products are present.
6. Proceed to checkout.
7. Enter checkout details.
8. Finish the order.
9. Verify:

```text
Thank you for your order!
```

The final validation uses a Playwright web-first `toHaveText()` assertion.

## 🏗️ Architecture

```text
saucedemo-playwright-ts-pom/
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
├── .gitignore
├── src/
│   ├── fixtures/
│   │   └── test.ts
│   └── pages/
│       ├── LoginPage.ts
│       ├── InventoryPage.ts
│       ├── CartPage.ts
│       └── CheckoutPage.ts
└── tests/
    ├── login.spec.ts
    └── purchase.spec.ts
```

### Responsibilities

| Component | Responsibility |
|---|---|
| `LoginPage` | Navigation, credentials, login, error handling |
| `InventoryPage` | Sorting, product selection, product names, cart navigation |
| `CartPage` | Cart verification and checkout navigation |
| `CheckoutPage` | Customer information, order completion, success validation |
| `src/fixtures/test.ts` | Reusable Playwright page-object fixtures |
| `tests/*.spec.ts` | Test flow and assertions only |

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **Playwright** | Browser automation |
| **@playwright/test** | Native test runner and assertions |
| **TypeScript** | Test/framework language |
| **Node.js + npm** | Runtime and dependency management |
| **Page Object Model** | Maintainable automation architecture |
| **HTML Reporter** | Test reporting |
| **Firefox / Chromium** | Configured browser projects |
| **Git / GitHub** | Version control |

## ⚙️ Configuration

Global settings live in `playwright.config.ts`.

```text
Base URL        https://www.saucedemo.com/
Test timeout    30 seconds
Expect timeout  5 seconds
Headless        true
Browsers        Chromium + Firefox
Reporter        HTML + list
Trace           On first retry
Screenshot      On failure
Video           On failure
```

SauceDemo uses `data-test` attributes, therefore the config maps:

```ts
testIdAttribute: 'data-test'
```

## 🔎 Locator & Synchronization Strategy

The framework prioritizes resilient Playwright locators:

```ts
page.getByTestId(...)
page.getByRole(...)
page.locator(...)
```

No inline locator queries are used inside the test specifications.

The framework relies on Playwright auto-waiting and web-first assertions and does not use hard-coded sleeps such as:

```ts
page.waitForTimeout(...)
```

## 🚀 Setup

### Prerequisites

- Node.js 20+ recommended
- npm
- VS Code or another TypeScript-capable IDE
- Firefox and/or Chromium
- Internet connection

### Clone

```bash
git clone https://github.com/mostafizur-zahid/saucedemo-playwright-ts-pom.git
cd saucedemo-playwright-ts-pom
```

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

On Linux, when browser dependencies are missing:

```bash
npx playwright install --with-deps
```

## ▶️ Run Tests

Full configured suite:

```bash
npx playwright test
```

Firefox only:

```bash
npx playwright test --project=firefox
```

Chromium only:

```bash
npx playwright test --project=chromium
```

Headed mode:

```bash
npx playwright test --headed
```

UI mode:

```bash
npx playwright test --ui
```

Individual tests:

```bash
npx playwright test tests/login.spec.ts
npx playwright test tests/purchase.spec.ts
```

## 📊 HTML Report

```bash
npx playwright show-report
```

The report is generated in:

```text
playwright-report/
```

## 🧪 Type Checking

```bash
npm run typecheck
```

## ✅ Verified Execution

The required Firefox assessment suite was executed successfully:

```text
Project: firefox

Passed: 2
Failed: 0
Flaky: 0
Skipped: 0
```

Passing scenarios:

```text
✓ Negative Login
✓ End-to-End Purchase
```

## 📋 Assessment Checklist

| Requirement | Status |
|---|:---:|
| Page Object Model | ✅ |
| Playwright Locator objects in page classes | ✅ |
| No inline locator queries in specs | ✅ |
| `@playwright/test` runner | ✅ |
| Global settings in `playwright.config.ts` | ✅ |
| Locked-out login test | ✅ |
| Standard-user purchase flow | ✅ |
| Price low-to-high sorting | ✅ |
| Cheapest + most expensive products | ✅ |
| Cart verification | ✅ |
| Checkout completion | ✅ |
| `toHaveText()` success assertion | ✅ |
| Playwright auto-waiting | ✅ |
| Resilient locators | ✅ |
| HTML Reporter | ✅ |
| README documentation | ✅ |

## 🔮 Future Enhancements

- Data-driven testing
- Test tags and selective suites
- Authentication state reuse
- API + UI hybrid testing
- GitHub Actions CI/CD
- Allure or additional reporting
- Parallel execution
- Environment-based configuration
- Failure screenshot/video/trace dashboards
- Containerized execution

---

# 👨‍💻 About Me

## Md Mostafizur Rahman Zahid

**CSE Graduate | SQA | Aspiring Security Engineer | Cybersecurity & DevSecOps Learner**

I am a Computer Science & Engineering graduate building practical skills across **Software Quality Assurance, Test Automation, Cybersecurity, Linux, DevSecOps, Cloud, and software engineering**.

My current focus is on building reliable automation frameworks, improving software quality practices, understanding security throughout the software development lifecycle, and strengthening practical engineering fundamentals.

### Connect

- **GitHub:** https://github.com/mostafizur-zahid
- **LinkedIn:** https://www.linkedin.com/in/mostafizur-zahid/

<p align="center"><strong>Built with Playwright • TypeScript • @playwright/test • Page Object Model</strong></p>
