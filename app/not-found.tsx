import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <h1 className="text-2xl font-bold">This page doesn&rsquo;t exist</h1>
      <p className="mt-4">
        Go back to <Link href="/">the home page</Link> to see my work.
      </p>
    </main>
  )
}
