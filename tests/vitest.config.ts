import { defineConfig } from 'vitest/config';

const extensions = '{js,mjs,cjs,ts,mts,cts,jsx,tsx}';

export default defineConfig({
  test: {
    // relative to the directory where this config is located
    include: [`**/*test(.|_)${extensions}`],
  },
});
