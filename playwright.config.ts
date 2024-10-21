import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [['html', { outputFolder: 'test-report', open: 'never' }]],
  use: {
    baseURL: 'https://minha-aplicacao.com',
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});

