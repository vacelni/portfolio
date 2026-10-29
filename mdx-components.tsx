import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

type Shot = { src: string; alt: string; width: number; height: number }

/** A row of phone screenshots with one caption, so mobile screens sit side by side instead of stacking tall. */
function Phones({ shots, caption }: { shots: Shot[]; caption: string }) {
  return (
    <figure className="my-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {shots.map((shot) => (
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="(min-width: 640px) 170px, 45vw"
            className="h-auto w-full border border-rule bg-paper"
          />
        ))}
      </div>
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  )
}

function Figure({ caption, src, alt, width, height }: Shot & { caption: string }) {
  return (
    <figure className="my-10">
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full border border-rule bg-paper" />
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { Phones, Figure, ...components }
}
