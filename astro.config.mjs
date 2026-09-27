import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  // Netlify appends trailing slashes.
  // Match that to avoid 301 redirects on every navigation
  trailingSlash: 'always',
  site: 'https://acd02-resume.netlify.app',
  integrations: [sitemap({ filter: page => !page.includes('/cv') })],
  vite: {
    plugins: [tailwindcss()],
  },
})
