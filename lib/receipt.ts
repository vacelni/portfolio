// The hero receipt is set exactly like a WarungKasir receipt on 58 mm paper: 32 characters per line.
export const RECEIPT_WIDTH = 32

export type ReceiptLine =
  | { kind: 'center'; text: string }
  | { kind: 'item'; left: string; right: string }
  | { kind: 'note'; text: string }
  | { kind: 'rule' }
  | { kind: 'blank' }

export function renderLine(line: ReceiptLine): string {
  switch (line.kind) {
    case 'center': {
      const pad = Math.max(0, RECEIPT_WIDTH - line.text.length)
      return ' '.repeat(Math.floor(pad / 2)) + line.text
    }
    case 'item': {
      const gap = Math.max(1, RECEIPT_WIDTH - line.left.length - line.right.length)
      return line.left + ' '.repeat(gap) + line.right
    }
    case 'note':
      return `  ${line.text}`
    case 'rule':
      return '-'.repeat(RECEIPT_WIDTH)
    case 'blank':
      return ''
  }
}

export const heroReceipt: ReceiptLine[] = [
  { kind: 'center', text: 'VACELNINO FAIZ FADELI' },
  { kind: 'center', text: 'Software engineer' },
  { kind: 'center', text: 'Semarang, Indonesia (UTC+7)' },
  { kind: 'rule' },
  { kind: 'item', left: 'WarungKasir POS', right: 'LIVE' },
  { kind: 'note', text: 'offline-first PWA' },
  { kind: 'note', text: '1,094 unit tests, 365 pgTAP' },
  { kind: 'item', left: 'P3L training site', right: 'LIVE' },
  { kind: 'note', text: 'registration + e-invoices' },
  { kind: 'item', left: 'PPE detection thesis', right: 'DONE' },
  { kind: 'note', text: 'YOLOv5n vs YOLOv8n' },
  { kind: 'item', left: 'Vision R&D internship', right: 'NOW' },
  { kind: 'rule' },
  { kind: 'item', left: 'Remote work', right: 'AVAILABLE' },
  { kind: 'rule' },
  { kind: 'center', text: 'Terima kasih!' },
]
