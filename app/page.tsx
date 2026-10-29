import Link from 'next/link'
import { Receipt } from '@/components/Receipt'
import { contact, experience, projects, research } from '@/lib/projects'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <section className="grid items-start gap-12 pt-16 pb-20 md:grid-cols-[1fr_auto] md:gap-16 md:pt-24 md:pb-28">
        <div className="max-w-[38rem]">
          <h1 className="text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl">Vacelnino Faiz Fadeli</h1>
          <p className="mt-6 text-lg leading-relaxed">
            I build software that small businesses run on every day. A food stall takes its orders on my point-of-sale
            app, offline when the signal drops. A wastewater consulting firm takes class registrations and sends
            invoices through a site I built and maintain.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Full-stack in TypeScript, Next.js and Postgres; computer vision and machine learning in Python. I graduated
            in computer engineering in 2026 and work on vision R&amp;D as an intern in Semarang, Indonesia. I&rsquo;m
            looking for a remote engineering role.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-base">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.github}>GitHub</a>
            </li>
            <li>
              <a href={contact.linkedin}>LinkedIn</a>
            </li>
          </ul>
        </div>
        <Receipt />
      </section>

      <section aria-labelledby="work" className="border-t border-rule py-16">
        <h2 id="work" className="text-xl font-bold">
          Work in production
        </h2>
        <ul className="mt-8">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="grid gap-4 border-b border-rule py-10 first:pt-2 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <div>
                <h3 className="text-lg leading-snug font-bold">{project.name}</h3>
                <p className="mt-1 text-sm text-muted">{project.status}</p>
              </div>
              <div className="max-w-[40rem]">
                <p>{project.summary}</p>
                <p className="mt-3 text-sm text-muted">{project.stack.join(', ')}</p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {project.caseStudy && (
                    <li>
                      <Link href={`/work/${project.slug}`}>Read the case study</Link>
                    </li>
                  )}
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li className="grid gap-4 py-10 md:grid-cols-[14rem_1fr] md:gap-10">
            <div>
              <h3 className="text-lg leading-snug font-bold">{research.title}</h3>
              <p className="mt-1 text-sm text-muted">Research, 2026</p>
            </div>
            <div className="max-w-[40rem]">
              <p>{research.summary}</p>
              <p className="mt-3 text-sm text-muted">{research.detail}</p>
            </div>
          </li>
        </ul>
      </section>

      <section aria-labelledby="experience" className="border-t border-rule py-16">
        <h2 id="experience" className="text-xl font-bold">
          Experience and education
        </h2>
        <dl className="mt-8">
          {experience.map((item) => (
            <div key={item.role} className="grid gap-2 py-5 md:grid-cols-[14rem_1fr] md:gap-10">
              <dt className="text-sm text-muted md:pt-0.5">{item.when}</dt>
              <dd className="max-w-[40rem]">
                <p className="font-bold">
                  {item.role}, {item.org}
                </p>
                <p className="mt-1">{item.text}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="border-t border-rule py-12 text-muted">
        <p className="max-w-[40rem]">
          Working remotely from UTC+7, comfortable overlapping with Asia, Australia and European mornings. The fastest
          way to reach me is <a href={`mailto:${contact.email}`}>email</a>.
        </p>
      </footer>
    </main>
  )
}
