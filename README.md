# vacelni portfolio

Personal site of Vacelnino Faiz Fadeli: projects in production and case studies.

Next.js 16 (App Router, fully static), Tailwind CSS 4, MDX for case studies (`content/work/*.mdx`).
The hero is set like a WarungKasir receipt on 58 mm paper: 32 characters per line (`lib/receipt.ts`).

```bash
npm install
npm run dev
npm run lint && npm run typecheck && npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin for canonical and Open Graph URLs.
