import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/svelte-about-me',    // right here! your repository name
  plugins: [svelte()],
})
