import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: { baseURL: 'http://localhost:4200/' },
};

export default config;
