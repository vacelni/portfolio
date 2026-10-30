export type Link = { label: string; href: string }

export type Project = {
  slug: string
  name: string
  summary: string
  /** One fact a reviewer can check: where it runs and for whom. */
  status: string
  stack: string[]
  links: Link[]
  caseStudy: boolean
}

export const projects: Project[] = [
  {
    slug: 'warung-kasir',
    name: 'WarungKasir',
    summary:
      'Point-of-sale app for small food stalls that keeps selling with the internet down and syncs every sale exactly once when it comes back. Prints receipts to Bluetooth thermal printers from the browser.',
    status: 'In daily use at a food stall since October 2026',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Postgres RLS', 'IndexedDB', 'PWA', 'Playwright', 'pgTAP'],
    links: [
      { label: 'Try the demo', href: 'https://warungkasir-demo.pages.dev' },
      { label: 'Read the code', href: 'https://github.com/vacelni/warung-kasir' },
    ],
    caseStudy: true,
  },
  {
    slug: 'p3l',
    name: 'P3L training platform',
    summary:
      'Website, class registration and automatic e-invoicing for a wastewater-treatment training and consulting firm, with an admin dashboard for schedules, articles and payments.',
    status: 'Live at pengolahanlimbahcair.com',
    stack: ['Next.js', 'React 19', 'Supabase', 'Server Actions', 'Resend', 'Vercel', 'Vitest'],
    links: [
      { label: 'Visit the site', href: 'https://pengolahanlimbahcair.com' },
      { label: 'Read the code', href: 'https://github.com/vacelni/p3l-showcase' },
    ],
    caseStudy: true,
  },
]

/** Built and tested, but not running for a real business. */
export const otherProjects: Project[] = [
  {
    slug: 'relasi-crm',
    name: 'Relasi CRM',
    summary:
      'Multi-tenant CRM for small Indonesian sales teams: contacts, deal pipeline, tasks and a WhatsApp-first activity log, with owner and sales roles enforced in Postgres. Scores leads and drafts follow-ups, falling back to rules when no AI key is set, and takes Pro upgrades through Midtrans.',
    status: 'Live demo with Midtrans sandbox payments',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Postgres RLS', 'Server Actions', 'Midtrans', 'Playwright', 'pgTAP'],
    links: [
      { label: 'Try the demo', href: 'https://relasicrm.vercel.app' },
      { label: 'Read the code', href: 'https://github.com/vacelni/relasi-crm' },
    ],
    caseStudy: false,
  },
  {
    slug: 'machinewatch',
    name: 'MachineWatch',
    summary:
      "Predicts how many cycles each jet engine in a fleet has left from its sensor stream, and ranks the fleet by urgency on a live dashboard. A model registry refuses to ship a model that scores worse than the one in service.",
    status: 'RMSE 14.5 cycles on the NASA C-MAPSS FD001 test set',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'server-sent events', 'SQLite', 'Docker Compose', 'pytest'],
    links: [{ label: 'Read the code', href: 'https://github.com/vacelni/machinewatch' }],
    caseStudy: false,
  },
  {
    slug: 'indo-short-answer-scoring',
    name: 'Indonesian short-answer scoring',
    summary:
      "Scores students' short answers from 0 to 5 against the teacher's reference answer and shows the evidence behind each score. Evaluated on questions the model has never seen, after I found and fixed data leakage in my first version.",
    status: 'QWK 0.57 on 6 unseen test questions',
    stack: ['Python', 'scikit-learn', 'sentence-transformers', 'IndoBERT', 'FastAPI', 'Docker', 'pytest'],
    links: [{ label: 'Read the code', href: 'https://github.com/vacelni/indo-short-answer-scoring' }],
    caseStudy: false,
  },
  {
    slug: 'smart-kebaya-pattern',
    name: 'Smart Kebaya pattern drafting',
    summary:
      'Drafts a made-to-measure kebaya pattern from 15 body measurements and draws every piece to scale, from one Kotlin codebase for Android and the web. Built during an internship for a fashion-design course.',
    status: 'Android app and web app',
    stack: ['Kotlin', 'Compose Multiplatform', 'Kotlin/Wasm', 'Compose Canvas', 'Android PDF'],
    links: [
      { label: 'Try it in the browser', href: 'https://vacelni.github.io/smart-kebaya-pattern/' },
      { label: 'Read the code', href: 'https://github.com/vacelni/smart-kebaya-pattern' },
    ],
    caseStudy: false,
  },
]

export type Research = {
  title: string
  summary: string
  detail: string
}

export const research: Research = {
  title: 'PPE detection on low-resource hardware',
  summary:
    'Undergraduate thesis comparing YOLOv5-Nano and YOLOv8-Nano for detecting personal protective equipment on hardware without a GPU.',
  detail:
    'Evaluated on 2,512 images and tested for significance with the Wilcoxon signed-rank test. YOLOv8-Nano performed better.',
}

export const experience = [
  {
    role: 'Software Engineer intern, R&D',
    org: 'PT Surya Sarana Dinamika',
    when: 'Sep 2026 to now',
    text: 'Computer-vision and industrial software: detection and tracking pipelines, desktop tooling, and machine-learning prototypes. Details on request.',
  },
  {
    role: 'B.Eng. Computer Engineering',
    org: 'Universitas Negeri Semarang',
    when: '2022 to 2026',
    text: 'GPA 3.59 / 4.00. Coursework in software engineering, machine learning, computer vision, information security and embedded systems.',
  },
]

export const contact = {
  email: 'vacelfaizfadeli28@gmail.com',
  github: 'https://github.com/vacelni',
  linkedin: 'https://linkedin.com/in/vacelnino-faiz-fadeli',
}
