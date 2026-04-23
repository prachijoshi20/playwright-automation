# Playwright Automation Framework
[![Playwright Tests](https://github.com/prachijoshi20/playwright-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com//prachijoshi20/playwright-automation/actions/workflows/playwright.yml)
## Tech Stack
- Playwright (TypeScript)
- API & UI Testing
- CI/CD ready

## Features
- Page Object Model
- API Service Layer
- Reusable utilities

## Framework Architecture

playwright-automation/
├── pages/          # Page Object classes — one per application page
├── fixtures/       # Custom fixtures injecting page objects into tests
├── tests/
│   ├── ui/         # UI end-to-end test specs
│   └── api/        # API test specs using Playwright request context
├── testData/       # External test data — JSON files, no hardcoded values
└── playwright.config.ts  # CI/CD aware config with reporters

## What this framework demonstrates
- Page Object Model with TypeScript
- Custom Playwright fixtures for zero-boilerplate test setup
- Combined API + UI testing (create via API, verify in UI)
- HTML reporter with screenshots and traces on failure
- GitHub Actions CI/CD with artifact publishing
- Environment-aware configuration (local vs CI)

## How to run
npm install  
npx playwright test
