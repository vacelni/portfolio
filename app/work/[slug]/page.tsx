import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

const studies = projects.filter((p) => p.caseStudy)

export const dynamicParams = false

export function generateStaticParams() {
  return studies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = studies.find((p) => p.slug === slug)
  return project ? { title: project.name, description: project.summary } : {}
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = studies.find((p) => p.slug === slug)
  if (!project) notFound()
  const { default: Study } = await import(`@/content/work/${slug}.mdx`)

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <nav className="pt-10">
        <Link href="/">Vacelnino Faiz Fadeli</Link>
      </nav>
      <article className="max-w-[42rem] pt-12 pb-20">
        <header className="border-b border-rule pb-10">
          <h1 className="text-3xl leading-[1.1] font-bold tracking-tight">{project.name}</h1>
          <p className="mt-5 text-lg leading-relaxed">{project.summary}</p>
          <p className="mt-4 text-sm text-muted">{project.status}</p>
          <p className="mt-1 text-sm text-muted">{project.stack.join(', ')}</p>
          {project.links.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </header>
        <div className="prose-case pt-4">
          <Study />
        </div>
      </article>
    </main>
  )
}
