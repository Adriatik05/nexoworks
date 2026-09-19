import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function DemoFrame({ label }: { label: string }) {
  return (
    <div className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          NexoWorks
        </Link>
        <div className="flex items-center gap-2 text-[11px] tracking-wide text-muted-foreground">
          <span className="hidden sm:inline">Live demo</span>
          <span
            className="inline-block size-1.5 rounded-full bg-brand"
            aria-hidden
          />
          <span className="font-medium text-foreground">{label}</span>
        </div>
      </div>
    </div>
  )
}
