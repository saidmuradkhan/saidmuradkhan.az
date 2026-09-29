import { readFile, writeFile } from 'node:fs/promises'
import { createServer, loadEnv } from 'vite'

const dist = new URL('../dist/', import.meta.url)
const site = loadEnv('production', process.cwd(), 'VITE_').VITE_SITE_URL?.replace(/\/+$/, '')
if (!site) throw new Error('VITE_SITE_URL is not set (see .env)')

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const file = new URL('index.html', dist)
  const html = await readFile(file, 'utf8')
  if (!html.includes('<!--app-html-->')) throw new Error('<!--app-html--> placeholder missing in index.html')
  await writeFile(file, html.replace('<!--app-html-->', () => render()))
} finally {
  await vite.close()
}

await writeFile(new URL('robots.txt', dist), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
await writeFile(new URL('sitemap.xml', dist), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`)

console.log(`prerendered index.html, wrote robots.txt + sitemap.xml for ${site}`)
