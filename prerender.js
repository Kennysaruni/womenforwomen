import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://womenfewoman.org';
const distDir = path.resolve(__dirname, 'dist');
const distSsrDir = path.resolve(__dirname, 'dist-ssr');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Please run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// Import SSR entry
const entryServerPath = path.resolve(distSsrDir, 'entry-server.js');
if (!fs.existsSync(entryServerPath)) {
  console.error('Error: dist-ssr/entry-server.js not found. Please build SSR entry first.');
  process.exit(1);
}

const { render } = await import(entryServerPath);

const routes = [
  {
    path: '/',
    title: 'Women FE Woman | Empowering Women Through Collective Strength',
    description:
      'Non-profit organization founded by Judith Kerr. Dedicated to empowering women and marginalized communities through collective energy, equity, advocacy, financial empowerment, and sustainable self-reliance.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/about',
    title: 'About Us | Women FE Woman - Founded by Judith Kerr',
    description:
      'Discover the founding story, collective synergetic philosophy, operational mandate, and community leadership of Women FE Woman founded by Judith Kerr.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/services',
    title: 'Programs & Core Services | Women FE Woman',
    description:
      'Free, confidential community programs: Community Advocacy & Referrals, Financial Empowerment, Career & Employment Coaching, and Leadership Training.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/services/advocacy-referrals',
    title: 'Community Advocacy & Referrals | Women FE Woman',
    description:
      'Direct casework advocacy, civic navigation, and vetted referrals for housing, legal aid, healthcare, and settlement support.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/services/financial-empowerment',
    title: 'Financial Management & Literacy | Women FE Woman',
    description:
      'Practical budgeting blueprints, debt resolution consultations, credit score rebuilding, and sustainable economic sovereignty.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/services/career-development',
    title: 'Career & Employment Support | Women FE Woman',
    description:
      'ATS-compliant resume overhauls, simulated mock interview clinics, tailored cover letters, and official credential application assistance.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/services/leadership-mentorship',
    title: 'Leadership Training & Mentorship | Women FE Woman',
    description:
      'Curated 1-to-1 mentorship pairing, public advocacy coaching, and cross-generational roundtables empowering women catalysts.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/target-group',
    title: 'Target Group & Member Benefits | Women FE Woman',
    description:
      'Serving women facing systemic hurdles, immigrant families, single mothers, and aspiring changemakers. Explore our interactive support matrix.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact & Community Intake | Women FE Woman',
    description:
      'Reach out directly to founder Judith Kerr, register for community meetings, or request confidential casework and program support.',
    priority: '0.9',
    changefreq: 'monthly',
  },
];

console.log('🚀 Starting static pre-rendering for all routes...');

const today = new Date().toISOString().split('T')[0];

for (const route of routes) {
  try {
    const appHtml = render(route.path);
    const canonicalUrl = `${BASE_URL}${route.path === '/' ? '' : route.path}`;

    let html = template;

    // Inject prerendered markup into root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    html = html.replace(
      /<meta name="title" content=".*?" \/>/,
      `<meta name="title" content="${route.title}" />`
    );

    // Replace Description
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace Canonical
    html = html.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Replace Open Graph Tags
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Replace Twitter Card Tags
    html = html.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta name="twitter:url" content=".*?" \/>/,
      `<meta name="twitter:url" content="${canonicalUrl}" />`
    );

    // Determine destination file
    let filePath;
    if (route.path === '/') {
      filePath = path.resolve(distDir, 'index.html');
    } else {
      const routeDir = path.resolve(distDir, route.path.slice(1));
      fs.mkdirSync(routeDir, { recursive: true });
      filePath = path.resolve(routeDir, 'index.html');
    }

    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`  ✓ Pre-rendered: ${route.path.padEnd(35)} -> ${path.relative(process.cwd(), filePath)}`);
  } catch (err) {
    console.error(`  ✗ Error pre-rendering ${route.path}:`, err);
  }
}

// Generate sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path === '/' ? '' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapContent.trim(), 'utf-8');
fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemapContent.trim(), 'utf-8');
console.log('  ✓ Generated sitemap.xml with 9 crawled routes');

// Generate robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsContent.trim(), 'utf-8');
fs.writeFileSync(path.resolve(__dirname, 'public/robots.txt'), robotsContent.trim(), 'utf-8');
console.log('  ✓ Generated robots.txt');

// Cleanup temporary dist-ssr
try {
  fs.rmSync(distSsrDir, { recursive: true, force: true });
  console.log('  ✓ Cleaned up temporary SSR build bundle');
} catch {
  // Ignore cleanup errors
}

console.log('🎉 Pre-rendering and SEO indexing setup complete!\n');
