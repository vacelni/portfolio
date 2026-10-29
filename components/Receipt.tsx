import { heroReceipt, renderLine } from '@/lib/receipt'

export function Receipt() {
  const text = heroReceipt.map(renderLine).join('\n')
  return (
    <figure className="receipt-feed w-full max-w-[22rem]">
      <div className="receipt">
        {/* The visual receipt is preformatted text; the caption below says the same thing for screen readers. */}
        <pre aria-hidden="true" className="whitespace-pre">
          {text}
        </pre>
      </div>
      <figcaption className="sr-only">
        Summary: WarungKasir point-of-sale app and the P3L training site are live, a PPE-detection thesis is
        finished, and a computer-vision R&amp;D internship is ongoing. Available for remote work.
      </figcaption>
    </figure>
  )
}
