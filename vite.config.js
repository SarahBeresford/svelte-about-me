import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [svelte(), ghPages()],
  base: '/<your-repo-name>/', // Replace with your repo name
});
