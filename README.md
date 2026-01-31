# IT23750906_NEW 

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or download this repository.
2. Navigate to the project directory:
   ```
   cd IT23750906
   ```
3. Install the dependencies:
   ```
   npm install
   ```

This will install the following dependencies:
- `@playwright/test`: For running the Playwright tests
- `@types/node`: TypeScript types for Node.js
- `xlsx`: For handling Excel files (if needed in tests)

## Running Tests

To run the tests, use the following command:

```
npx playwright test
```

This will execute the test suite located in `tests/swift-translator-tests.spec.js`.

### Running Tests in Headed Mode

If you want to see the browser while tests are running:

```
npx playwright test --headed
```

### Additional Options

- To run a specific test file: `npx playwright test tests/swift-translator-tests.spec.js`
- To run tests in a specific browser: `npx playwright test --project=chromium` (or firefox, webkit)

## Configuration

The Playwright configuration is defined in `playwright.config.ts`. You can modify this file to change test settings, browsers, or other configurations.

## Test Results

Test results and screenshots are stored in the following directories:
- `playwright-report/`: HTML report
- `screenshots/`: Screenshots captured during tests
- `test-results/`: Detailed test results

## Troubleshooting

If tests fail, check the `test-results/` directory for error details and screenshots.