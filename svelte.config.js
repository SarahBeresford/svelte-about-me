import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  build: {
    outDir: 'docs'
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
