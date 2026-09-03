# SauceDemo Playwright Automation

<p align="center">
  <strong>End-to-end web automation framework using Playwright, TypeScript, @playwright/test, and Page Object Model.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-%40playwright%2Ftest-2EAD33?logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/TypeScript-5.9%2B-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Pattern-Page%20Object%20Model-4C6EF5" alt="POM">
  <img src="https://img.shields.io/badge/Browsers-Firefox%20%7C%20Chromium-4B8BBE" alt="Browsers">
</p>

> A maintainable SQA automation project for testing the SauceDemo e-commerce application.

**Application Under Test:** https://www.saucedemo.com/

---

## Project Overview

This project implements the **Playwright Assessment (TS/JS Ecosystem — `@playwright/test`)** using the SauceDemo e-commerce practice application.

The framework follows **Page Object Model (POM)** so that:

- Page classes own locators and UI actions.
- Test specifications contain business flow and assertions.
- Playwright configuration is centralized.
- Tests use resilient locators and Playwright auto-waiting.
- HTML reporting is enabled for execution evidence.

---

## Test Coverage

### Negative Login

Verifies that a locked-out user cannot log in.

```text
Username: locked_out_user
Password: secret_sauce
```

Expected:

```text
Epic sadface: Sorry, this user has been locked out.
```

### End-to-End Purchase

The test performs the complete shopping workflow:

```text
Login
  ↓
Sort by Price: Low → High
  ↓
Select cheapest + most expensive products
  ↓
Add both products to cart
  ↓
Verify cart contents
  ↓
Checkout
  ↓
Enter customer information
  ↓
Finish order
  ↓
Verify "Thank you for your order!"
```

---

## Framework Structure

```text
saucedemo-playwright-ts-pom/
│
├── src/
│   ├── fixtures/
│   │   └── test.ts
│   │
│   └── pages/
│       ├── LoginPage.ts
│       ├── InventoryPage.ts
│       ├── CartPage.ts
│       └── CheckoutPage.ts
│
├── tests/
│   ├── login.spec.ts
│   └── purchase.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

### Page Object Responsibilities

| Page Object | Responsibility |
|---|---|
| `LoginPage` | Navigation, credentials, login, and error handling |
| `InventoryPage` | Sorting, product selection, product names, and cart navigation |
| `CartPage` | Cart verification and checkout navigation |
| `CheckoutPage` | Checkout details, order completion, and success validation |

---

## Technology Stack

| Technology | Role |
|---|---|
| **Playwright** | Browser automation |
| **@playwright/test** | Test runner and assertions |
| **TypeScript** | Automation language |
| **Node.js / npm** | Runtime and dependency management |
| **Page Object Model** | Framework architecture |
| **HTML Reporter** | Test reporting |
| **Firefox / Chromium** | Browser projects |
| **Git / GitHub** | Version control |

---

## Locator Strategy

The framework prioritizes stable Playwright locators:

```ts
page.getByTestId(...)
page.getByRole(...)
page.locator(...)
```

SauceDemo uses `data-test` attributes, so the configuration maps Playwright test IDs to `data-test`:

```ts
testIdAttribute: 'data-test'
```

Test specifications do not contain inline locator queries; locators and page interactions remain inside the Page Objects.

---

## Reliability

The framework relies on Playwright's built-in synchronization rather than hard-coded delays.

**Used:**

- Playwright auto-waiting
- Web-first assertions
- Stable test IDs
- Role-based locators
- Centralized configuration
- Failure screenshots
- Failure video
- Trace on first retry

**Avoided:**

```ts
page.waitForTimeout(...)
```

The final purchase validation uses:

```ts
await expect(locator).toHaveText('Thank you for your order!');
```

---

## Configuration

Global settings are maintained in `playwright.config.ts`.

```text
Base URL        https://www.saucedemo.com/
Test timeout    30 seconds
Expect timeout  5 seconds
Headless        true
Browsers        Chromium + Firefox
Reporter        HTML + list
```

---

## Getting Started

### Prerequisites

- Node.js
- npm
- VS Code or another TypeScript-capable IDE
- Firefox and/or Chromium
- Internet connection

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

On Linux, when required:

```bash
npx playwright install --with-deps
```

---

## Run Tests

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

Individual scenarios:

```bash
npx playwright test tests/login.spec.ts
npx playwright test tests/purchase.spec.ts
```
## ✅ Test Execution Evidence

The assessment suite was executed successfully using Playwright with Firefox.

| Metric | Result |
|---|---:|
| Tests | 2 |
| Passed | 2 |
| Failed | 0 |
| Flaky | 0 |
| Skipped | 0 |

### Playwright HTML Report

![Playwright Test Execution Report](docs/images/playwright-test-report.png)

Type check:

```bash
npm run typecheck
```

---

## Test Execution Evidence

The required Firefox assessment suite was executed successfully:

| Metric | Result |
|---|---:|
| Tests | 2 |
| Passed | 2 |
| Failed | 0 |
| Flaky | 0 |
| Skipped | 0 |

### Playwright Report

![Playwright Test Execution Report](docs/images/playwright-test-report.png)

---

## HTML Report

After a test run:

```bash
npx playwright show-report
```

The generated report is stored in:

```text
playwright-report/
```

This directory is excluded from Git.

---

## Assessment Checklist

| Requirement | Status |
|---|:---:|
| Page Object Model | ✅ |
| Playwright Locator objects | ✅ |
| No inline locator queries in specs | ✅ |
| `@playwright/test` | ✅ |
| Centralized `playwright.config.ts` | ✅ |
| Locked-out login test | ✅ |
| End-to-end purchase test | ✅ |
| Low-to-high product sorting | ✅ |
| Cheapest + most expensive products | ✅ |
| Cart verification | ✅ |
| Checkout completion | ✅ |
| `toHaveText()` success assertion | ✅ |
| Playwright auto-waiting | ✅ |
| Resilient locators | ✅ |
| HTML Reporter | ✅ |

---

## Repository Purpose

This project is part of my **Software Quality Assurance and Test Automation portfolio**.

It demonstrates practical work with web UI automation, framework design, Page Object Model, TypeScript, Playwright, and Git/GitHub.

---

# About Me

## Md Mostafizur Rahman Zahid

**CSE Graduate · SQA · Aspiring Security Engineer · Cybersecurity & DevSecOps Learner**

I am a Computer Science & Engineering graduate building practical skills in **Software Quality Assurance, Test Automation, Cybersecurity, Linux, DevSecOps, Cloud, and software engineering**.

My focus is on building reliable automation frameworks, improving software quality practices, and developing strong engineering fundamentals.

### Connect

- GitHub: https://github.com/mostafizur-zahid
- LinkedIn: https://www.linkedin.com/in/mostafizur-zahid/

---

<p align="center">
  <strong>Playwright · TypeScript · @playwright/test · Page Object Model</strong>
</p>
