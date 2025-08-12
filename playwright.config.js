/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './e2e-tests',   // Only run tests from here
  testMatch: '**/*.spec.js', // Or .ts, whatever your E2E tests use
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5000',
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  timeout: 120 * 1000,
  use: {
    baseURL: 'http://localhost:5000/',
  },
}

module.exports = config
